import classNames from 'classnames'
import cloneDeep from 'lodash/cloneDeep';
import groupBy from 'lodash/groupBy';
import isArray from 'lodash/isArray';
import React, { useState, useRef } from "react";
import { Button, Icon, Select, ConfigProvider, Field, Checkbox } from '@alicloud/console-components'

import { SearchWarp, MultiBtnWarp } from "../style";
import SearchConditionSelectPrefix from "./InputPrefix";
import { IRcSearchProps } from "../types/IRcSearchProps.type";
import { IRcSearchOptionsProps } from '../types/IRcSearchOptions.type';
import { SEARCH_FILTER_FIELD, SEARCH_FILTER_VALUE_FIELD } from "../constants";
import message from "../message";
import { isPlainObject, template } from 'lodash';

const { AutoComplete } = Select
/**
 * 
 * @param IRcSearchOptionsProps options
 * @returns 
 */
const normalizeOptions = (options: IRcSearchOptionsProps[]) => {
  const optionsCopy = cloneDeep(options);
  optionsCopy.forEach((o) => !o.groupName && (o.groupName = message.defaultFilterGroupName));

  return Object.entries(groupBy(optionsCopy, 'groupName'))
    .map(([groupName, children]) => {
      return {
        label: groupName,
        children: children.map((l:any) => {
          return {
            label: l.label,
            value: l.dataIndex
          }
        })
      }
    })
}

const normalizeSuggestion = (suggestion: any[]) => {
  const suggestionCopy = cloneDeep(suggestion);
  suggestionCopy.forEach((s) => {
    if (s.children) {
      s.children.forEach((child: any) => {
        if (isPlainObject(child)) {
          child.dataIndex = s.value;
        }
      })
    }
  })
  return suggestionCopy;
}

const normalizeSelectDataSource = (title: string, list:any) => {
  return [
    {
      label: title || '',
      children: [...list]
    }
  ]
}

const normalizeSearchOptions = (dataIndex: string, value: string, options: IRcSearchOptionsProps[]) => {
  const opt = options.find(o => o.dataIndex === dataIndex);
  let valueLabel = value;
  if (opt?.template === 'select') {
    valueLabel = opt.templateProps?.dataSource.find((d: any) => d.value === value).label;
  }
  if (opt?.template === 'multiple') {
    valueLabel = opt.templateProps?.dataSource.filter((d: any) => value.indexOf(d.value) !== -1).map((d: any) => d.label).join('/');
  }

  return {
    label: opt?.label,
    valueLabel,
    value,
    dataIndex
  }
}

const highlightKeyword = (value: string, keywords: string) => {
  const idx = value.toLowerCase().indexOf(keywords.toLowerCase());
  const startValue = value.slice(0, idx);
  const highlightValue = value.slice(idx, idx + keywords.length);
  const endValue = value.slice(idx + keywords.length)
  return <>{startValue}<span style={{color: 'var(--color-brand1-6)'}}>{highlightValue}</span>{endValue}</>
}

const ComplexSearch: React.FC<IRcSearchProps> = (props) => {
  const {
    options = [],
    fuzzy,
    defaultDataIndex,
    defaultSelectedDataIndex,
    placeholder,
    onSearch,
    onSuggest,
    suggestions = [],
    prefix = 'next-'
  } = props;

  const [selectedFilterType, setSelectedFilterType] = useState<any>(options.find(o => o.dataIndex === defaultSelectedDataIndex));
  const [focused, setFocused] = useState<any>(false);
  const autoRef = useRef<any>(null);
  const fuzzyAutoRef = useRef<any>(null);
  const field = Field.useField();
  const { init, getValue, reset } = field;

  const focusProps = {
    onFocus: () => {setFocused(true)},
    onBlur: () => {setFocused(false)}
  }

  //计算视图，根据内部状态和输入的 props 决定一些值
  const isFuzzy = (!!defaultDataIndex || fuzzy) && !!getValue(SEARCH_FILTER_FIELD);
  const defaultFilter = options.find((t) => t.dataIndex === defaultDataIndex);

  const highlightItem = (item: any, searchKey:any) => {
    let label = item.label
    if (searchKey && searchKey.length) {
      label = highlightKeyword(item.label, searchKey)
    }
  
    return <span data-value={item?.value}>{label}</span>
  }

  /**
   * 处理筛选类型选中的情况
   */
  const handlerFilterTypeChange = (type: string, resetValue=true) => {
    setSelectedFilterType(options.find(o => o.dataIndex === type));
    resetValue && reset();
  }

  /**
   * 处理当筛选类型没选中，用户输入筛选类型，或者是做默认搜索的情况
   */
  const handlerFilterTypeInput = (value: string, actionType: string, isFuzzy: boolean, option: any) => {
    const isFuzzySearch = isFuzzy && getValue(SEARCH_FILTER_FIELD);

    // 如果是模糊搜索，则直接处理
    if (isFuzzySearch) {
      if (actionType !== 'change') {
        handleSearch(option.dataIndex);
      } else {
        onSuggest && onSuggest(value, defaultDataIndex || '');
      }
      return;
    }

    // 否则处理筛选项改变的情况
    handlerFilterTypeChange(value, false)
  }

  const handlerFilterClear = () => {
    setSelectedFilterType(null);
    reset();
  }

  const handleSearch = (dataIndex?: string) => {
    if (onSearch) {
      const value = getValue<any>(SEARCH_FILTER_VALUE_FIELD);
      // 如果是没有选择下拉
      if (defaultDataIndex && !selectedFilterType) {
        onSearch(
          getValue<any>(SEARCH_FILTER_FIELD),
          defaultDataIndex,
          normalizeSearchOptions(defaultDataIndex, getValue<any>(SEARCH_FILTER_FIELD), options)
        );
      }
      // 如果是用户没有指定 defaultDataIndex 但是设置了 fuzzy
      if (fuzzy && !selectedFilterType) {
        onSearch(
          getValue<any>(SEARCH_FILTER_FIELD),
          dataIndex || '',
          normalizeSearchOptions(dataIndex || '', getValue<any>(SEARCH_FILTER_FIELD), options)
        );
      }
      if (selectedFilterType) {
        onSearch(
          value,
          selectedFilterType.dataIndex,
          normalizeSearchOptions(selectedFilterType.dataIndex, value, options)
        );
      }
    }
    reset();
    document.body.click();
    setFocused(false);
  }

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 13 && e.currentTarget.value) {
      handleSearch();
      document.body.click();
    }

    if (e.keyCode === 8 && !e.currentTarget.value) {
     handlerFilterClear();
    }
  }

  const renderMultipleSelectorItem = (item: any) => {
    const searchValue = getValue(SEARCH_FILTER_VALUE_FIELD);
    const checked = isArray(searchValue) && searchValue.some(v => v === item.value);
    return (<Checkbox checked={checked}>{item.label}</Checkbox> )
  }

  const renderSelectedFilter = () => {
    const type = selectedFilterType?.template;
    const searchValue = getValue<string[]>(SEARCH_FILTER_VALUE_FIELD);
    const props = {
      hasBorder: false,
      autoFocus: true,
      hasClear: true,
      key: type,
      placeholder: selectedFilterType?.templateProps?.placeholder || template(message.defaultPlaceHolder)({ value: selectedFilterType?.label }),
      ...focusProps,
    }

    const selectProps = {
      dataSource: normalizeSelectDataSource(selectedFilterType?.label, selectedFilterType?.templateProps?.dataSource || []),
      defaultVisible: true,
      popupStyle: { width: 'auto' },
    }

    switch (type) {
      case 'input':
        return (
          <AutoComplete
            {...init<string>(SEARCH_FILTER_VALUE_FIELD, {})}
            className={classNames('main-input', 'multi')}
            autoHighlightFirstItem={false}
            {...props}
            autoWidth
            onKeyUp={handleKeyUp}
            dataSource={selectedFilterType?.templateProps?.dataSource}
          />
        );
      case 'select':
        return (
          <Select
            className={classNames('main-input', 'select')}
            {...init<string>(SEARCH_FILTER_VALUE_FIELD, {
              props: {
                onChange: handleSearch
              }
            })}
            autoHighlightFirstItem={false}
            {...props}
            {...selectProps}
          />
        );
      case 'multiple':
        return (
          <Select
            className={classNames('main-input', 'multi')}
            {...init<string>(SEARCH_FILTER_VALUE_FIELD, {})}
            {...props}
            {...selectProps}
            itemRender={renderMultipleSelectorItem}
            popupClassName="xconsole-rcsearch-multi-pop"
            mode="multiple"
            autoHighlightFirstItem={false}
            maxTagCount={0}
            menuProps={{
              footer: (
                <MultiBtnWarp prefix={prefix}>
                  <Button
                    size="small"
                    className={classNames("pri-btn")}
                    type="primary"
                    disabled={!searchValue?.length}
                    onClick={() => {
                      handleSearch()
                    }}>
                      {message.confirm}
                  </Button>
                  <Button
                    size="small"
                    className={classNames("cancel-btn")}
                    type="normal"
                    onClick={() => {
                      reset()
                      document.body.click();
                    }}>{message.cancel}</Button>
                </MultiBtnWarp>
              ),
            }}
          />
        )
      default:
        return null;
    }
  }

  const renderSelectFilterCloseIcon = () => {
    const hasFilterTypeClearBtn = !!selectedFilterType && !(selectedFilterType?.template === 'input' && !!getValue(SEARCH_FILTER_VALUE_FIELD)) ;
    return hasFilterTypeClearBtn && 
    (
      <div
        className="clear-level1"
      >
        <span className={`${prefix}input-control`}>
          <span className={`${prefix}input-hint-wrap`}>
            <i
              className={`${prefix}icon ${prefix}icon-delete-filling ${prefix}input-hint ${prefix}input-clear-icon`}
              role="button"
              onClick={() => {handlerFilterClear()}}
            >
            </i>
            </span>
          </span>
      </div>
    )
  }
  return (
    <SearchWarp prefix={prefix}>
      <div className={classNames('left-wrap', `${prefix}input`,  {'focus': focused })}>
        <div className={classNames('condition')}>
          { 
            selectedFilterType ? 
              <SearchConditionSelectPrefix
                dataSource={normalizeOptions(options)}
                label={selectedFilterType?.label}
                defaultValue={selectedFilterType?.dataIndex}
                onChange={(value: string) => {
                  handlerFilterTypeChange(value)
                }}
              /> : null
          }
        </div>
        <div className={classNames('forms')}>
          { 
            !selectedFilterType ? 
                <AutoComplete
                  {...init(SEARCH_FILTER_FIELD, {
                    props:{
                      // @ts-ignore
                      onChange: (value, actionType, option) => {
                        handlerFilterTypeInput(value, actionType, !!isFuzzy, option)
                      }
                    }
                  })}
                  autoHighlightFirstItem={false}
                  // @ts-ignore
                  itemRender={highlightItem}
                  placeholder={
                    placeholder ? placeholder : (defaultFilter?.label ? (template(message.defaultPlaceHolder)({ value: defaultFilter?.label })): '')
                  }
                  className={classNames('main-input', 'multi')}
                  hasBorder={false}
                  onKeyUp={handleKeyUp}
                  dataSource={
                    // 如果是指定了默认的筛选类型或者是直接指定模糊搜索模式 ，并且用户在这个输入框里面已经输入了值
                    // 则表示需要模糊搜索，调用 handleSuggest
                    isFuzzy ? 
                    normalizeSuggestion(suggestions) :
                      normalizeOptions(options)
                  }
                  popupStyle={{width: 'auto'}}
                  popupClassName={'rc-search-auto-complete'}
                  {...focusProps}
                />
              : null
          }
          { renderSelectedFilter() }
          { renderSelectFilterCloseIcon() }
        </div>
      </div>
      
      <div className={classNames('right-wrap')} ref={autoRef}>
        <Button className={classNames('search-btn', {'focus': focused })} onClick={() => handleSearch()} >
            <Icon type="search" />
        </Button>
      </div>
    </SearchWarp>
  )
}

export default ConfigProvider.config(ComplexSearch) as typeof ComplexSearch;
