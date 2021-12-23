import React, {useState, useEffect} from "react";
import classNames from 'classnames'
// import styled from "styled-components";
import { Button, Icon, Input, Select } from '@alicloud/console-components'
import { IRcSearchProps } from "../types/IRcSearchProps.type";
import { SearchWarp } from "../style";

import { 
  getSelectOptionAdatp,
  getTagByFileds
} from '../utils'

const { AutoComplete } = Select

const ModeSingleSingle: React.FC<IRcSearchProps> = (props) => {
  const {
    options,
    tags,
    onSuggest,
    onChange,
    onSearch,
    onTagChange
  } = props;
  let optionItem = options[0];
  if (!optionItem.templateProps) {
    optionItem.templateProps = {}
  }
  const [inputDataSource, setInputDataSource] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [allFileds, setAllFileds] = useState<any>({});
  const [inputValue, setInputValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('');

  useEffect(() => {
    // console.log('tags', tags)
    if (Array.isArray(tags) && tags.length === 0) {
      setAllFileds({});
      if (onChange) {
        onChange({}, {});
      }
    }
  }, [props.tags])

  const itemRender = (item: any, searchKey:string) => {
    let label = item.label
    if (searchKey && searchKey.length) {
      const key = searchKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
      const reg = new RegExp(`(${key})`, 'ig')
      label = label.replace(
        reg,
        (x: any) => `<span class="next-select-highlight" style="background-color: #EFF3F8;font-weight: 500;">${x}</span>`
      )
    }
  
    return <span dangerouslySetInnerHTML={{ __html: label }} />
  }

  function onChangeFn (changeFileds: any, allFileds: any) {
    if (onChange) {
      onChange(changeFileds, allFileds);
    }
    if (onTagChange) {
      let newTags = getTagByFileds(allFileds, options);
      // setTagList(newTags);
      onTagChange(newTags)
    }
  }

  async function inputChange (value: any, actionType: string, dataIndex: string) {
    if (actionType === 'itemClick' && onChangeFn) {
      let changeFileds = Object.create({});
      changeFileds[dataIndex] = value;
      onChangeFn(changeFileds, changeFileds);
      setAllFileds(changeFileds);
      setVisible(false);
      setInputValue('');
    } else {
      setInputValue(value);
      // fuzzyDisable
      if (!optionItem.templateProps || !optionItem.templateProps.fuzzyDisable) {
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = value;
        if (onChangeFn) {
          onChangeFn(changeFileds, changeFileds);
        }
        setAllFileds(changeFileds);
      }
      
      //
      if (value === '') {
        setInputDataSource([]);
      }
      if (onSuggest) {
          let list = await onSuggest(value, dataIndex);
          // console.log('res suggest', res);
          // 当没有联想返回值时， 无需展示下拉
          if (Array.isArray(list) && list.length !== 0) {
            let newDataSource = [
              {
                label: optionItem.label,
                children: list
              }
            ]
            setInputDataSource(newDataSource);
            setVisible(true)
          }
      }
    }
  }

  async function selectChange (value: any, dataIndex: string) {
    setSelectValue('')
    if (onChangeFn) {
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = value;
        onChangeFn(changeFileds, changeFileds);
        setAllFileds(changeFileds);
    }
  }

  function onCommonSearch () {
    if (onSearch) {
      onSearch(allFileds);
    }
  }

  function onDeFaultEnter (e: any) {
    if (e.keyCode === 13 && inputValue !== '' && onChangeFn) {
      if (!optionItem.templateProps || !optionItem.templateProps.fuzzyDisable) {
        const dataIndex = optionItem.dataIndex;
        setVisible(false);
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = inputValue;
        onChangeFn(changeFileds, changeFileds);
        setAllFileds(changeFileds);
        setInputValue('');
      }
      
    }
  }

  return (
    <SearchWarp>
      {optionItem.template === 'input' && 
        (
          <div className={classNames('left-wrap', 'next-input')} onKeyUp={onDeFaultEnter}>
            <AutoComplete
              className={classNames('main-input', 'single')}
              placeholder={optionItem.templateProps.placeholder || `默认按${optionItem.label}搜索`}
              hasClear
              hasBorder={false}
              dataSource={inputDataSource}
              visible={visible}
              value={inputValue}
              onBlur={() => {setVisible(false)}}
              itemRender={itemRender}
              onChange={(value, actionType) => {inputChange(value, actionType, optionItem.dataIndex)}}
            />
          </div>
        )
      }
      {optionItem.template === 'select' && 
        <div className={classNames('left-wrap', 'next-input')}>
          <div className={classNames('condition')}>
            <span className={classNames('condition-item')}>{optionItem.label}</span>
          </div>
          <Select
            className={classNames('main-input', 'single')}
            placeholder={optionItem.templateProps.placeholder || `请选择${optionItem.label}`}
            hasClear
            hasBorder={false}
            value={selectValue}
            dataSource={getSelectOptionAdatp(optionItem.label, optionItem.templateProps.dataSource)}
            onChange={(value) => {selectChange(value, optionItem.dataIndex)}}
            popupStyle={{minWidth: 'auto'}}
          />
        </div>
      }
      
      <div className={classNames('right-wrap')}>
        <Button className={classNames('search-btn')} onClick={onCommonSearch}><Icon type="search" /></Button>
      </div>
    </SearchWarp>
  )
}

export default ModeSingleSingle;