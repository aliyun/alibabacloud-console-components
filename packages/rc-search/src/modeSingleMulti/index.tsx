import React, {useState, useEffect} from "react";
import classNames from 'classnames'
// import styled from "styled-components";
import { Button, Icon, Tag, Select } from '@alicloud/console-components'
// import { AutoCompleteProps } from '@alifd/next/lib/select'
import { IRcSearchProps } from "../types/IRcSearchProps.type";
import { IRcSearchTagItemProps } from '../types/IRcSearchTagItemProps.type'
import { IRcSearchOptionsProps } from '../types/IRcSearchOptions.type'
import { MenuProps } from '@alicloud/console-components/types/menu'; 
import {
    getHistoryTag as getHistoryTagUtil,
    setHistoryTag as setHistoryTagUtil,
    removeHistoryTagItem as removeHistoryTagItemUtils,
    getTagByFileds,
    checkNoIndexListFormat,
    getSelectOptionAdatp
} from "../utils";
// import '../index.less'

import {
  SearchWarp,
  MultiBtnWarp,
  MenuContentWrap
} from "../style";

const { Group: TagGroup, Closeable: ClosableTag } = Tag;

const { AutoComplete } = Select

const ModeSingleSingle: React.FC<IRcSearchProps> = (props) => {
  const {
    mode,
    options,
    defaultDataIndex,
    defaultPlaceholder,
    tags,
    onSuggest,
    onSuggestNoDataIndex,
    onChange,
    onSearch,
    onTagChange
  } = props;

  const [allFileds, setAllFileds] = useState<any>({});
  const [curOptionItem, setCurOptionItem] = useState<any>({});
  const [defaultOptionItem, setDefaultOptionItem] = useState<any>({});
  const [defaultInputValue, setDefaultValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [inputDataSource, setInputDataSource] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [defaultVisible, setDefaultVisible] = useState<boolean>(false);
  const [clearLevel1Show, setClearLevel1Show] = useState<boolean>(false);
  const [multipleValues, setMultipleValues] = useState<any>([]);
  const [tagList, setTagList] = useState<IRcSearchTagItemProps[]>([]);
  const [histroyList, setHistroyList] = useState<IRcSearchTagItemProps[]>([]);
  const [curType, setCurType] = useState<string>(''); // defalut/nodefault/item
  const [focusClass, setFocusClass] = useState<string>(''); // focus/''

  useEffect(() => {
    let initHisTags = getHistoryTagUtil();
    if (initHisTags) {
      setHistroyList(initHisTags);
    }
    initCurType()
  }, [])

  function initCurType () {
    let initCurType = ''
    if (defaultDataIndex && defaultDataIndex !== '') {
      initCurType = 'default';
      let defaultItem = options.find((x:any) => x.dataIndex === defaultDataIndex)
      if (defaultItem) {
          // console.log(defaultItem)
          setDefaultOptionItem(defaultItem);
      } else {
          initCurType = 'nodefault';
      }
    } else {
      initCurType = 'nodefault';
    }
    // console.log('initCurType', initCurType)
    setCurType(initCurType);
  }

  
  // if (initCurType === 'nodefault') {
  //   let defaultItem2 = options.find((x:any) => x.template === 'input')
  //     if (defaultItem2) {
  //         console.log(defaultItem2)
  //         setDefaultOptionItem(defaultItem2);
  //     }
  // }
  


  let level1DataSourceTemp = [
    {
     label: '选择筛选条件',
     children: options.map((l1:any) => {
        return {
          label: l1.label,
          value: l1.dataIndex
        }
      })
    }
  ]

  const [level1DataSource, setLevel1DataSource] = useState<any>(level1DataSourceTemp);

  const menuPropsLevel1 = {
    focusable: false,
    header: (
      <MenuContentWrap>
        {
          defaultDataIndex && defaultDataIndex !== '' && histroyList && histroyList.length > 0 && defaultInputValue === '' && (<li role="option" title="历史搜索记录" className="next-menu-group-label"><div className="next-menu-item-inner">历史搜索记录</div></li>)  
        }
        {
          defaultDataIndex && defaultDataIndex !== '' && histroyList && histroyList.length > 0 && defaultInputValue === '' && (
            <TagGroup style={{paddingLeft: '20px'}}>
            {histroyList.map((tag:IRcSearchTagItemProps, index: number) => {
                return tag ? (
                  <ClosableTag
                    size="small"
                    key={tag.dataIndex + tag.value + index}
                    onClose={() => {onRemoveHisTag(tag); return true;}}
                    onClick={() => {onSelectHisTag(tag);}}
                  >
                      {tag.label}:{tag.valueShow}
                  </ClosableTag>
                ) : ''
            })}
            </TagGroup>
          )  
        }
        
      </MenuContentWrap>
    ),
    footer: null,
  };

  // 多选
  const menuProps = {
    focusable: false,
    header: null,
    footer: (
      <MultiBtnWarp>
        <Button size="small" className={classNames("pri-btn")} disabled={multipleValues.length === 0} type="primary" onClick={() => {onPrimaryMultiple(curOptionItem.dataIndex)}}>确定</Button>
        <Button size="small" className={classNames("cancel-btn")} type="normal" onClick={() => {setVisible(false);setMultipleValues([]);}}>取消</Button>
      </MultiBtnWarp>
    ),
  };

  const itemRender = (item: any, searchKey:any) => {
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

  const itemRenderMulti = (item: any) => {
    let isChecked = false;
    if (multipleValues.find((v: any) => v === item.value)) {
      isChecked = true
    }
    // console.log('item',item, 'isChecked', isChecked)
    return (
      <label className={classNames('next-checkbox-wrapper', 'multi-lable', (isChecked ? 'checked' : ''))}>
        <span className="next-checkbox">
          <span className="next-checkbox-inner">
            <i className="next-icon next-icon-select next-xs next-checkbox-select-icon"></i>
          </span>
          <input type="checkbox" className="next-checkbox-input" defaultChecked={isChecked} />
        </span>
        <span className="next-checkbox-label">{item.label}</span>
      </label>
    )
  }

  function onRemoveHisTag (tagItem:IRcSearchTagItemProps) {
    const newHisTags = removeHistoryTagItemUtils(tagItem);
    setHistroyList(newHisTags);
  }

  function onSelectHisTag (tagItem:IRcSearchTagItemProps) {
    let changeFileds = Object.create({});
    let tempAllFileds = Object.create({});
    
    changeFileds[tagItem.dataIndex] = tagItem.value;
    if (mode === 'single-multi') {
      tempAllFileds = changeFileds
    } else if (mode === 'multi-multi') {
      tempAllFileds = {
        ...allFileds,
        ...changeFileds
      }
      
    }
    onChangeItem(changeFileds, tempAllFileds)
  }

  function upDateHistory() {
    // const allFiledsTagList = getTagByFileds(allFileds, options);
    const allFiledsTagList = [...tagList];
    let rtHisTags = setHistoryTagUtil(allFiledsTagList)
    setHistroyList(rtHisTags);

  }

  function checkAllFromTags(allFileds: any) {
    let allFiledsAdapt = {...allFileds};
    if (tags && Array.isArray(tags) && tags.length >= 0) {
      allFiledsAdapt = {};
      tags.forEach((tag: IRcSearchTagItemProps) => {
        if (allFileds[tag.dataIndex]) {
          allFiledsAdapt[tag.dataIndex] = allFileds[tag.dataIndex]
        }
      })
    }
    return allFiledsAdapt
  }

  // 某一类别确定时，修改fileds， 和tags
  function onChangeItem (changeFileds: any, allFileds:any) {
    setDefaultVisible(false)
    setAllFileds(allFileds);

    // todo
    if (onChange) {
      onChange(changeFileds, allFileds);
    }
    if (onTagChange) {
        let newTags = getTagByFileds(allFileds, options);
        setTagList(newTags);
        onTagChange(newTags)
    }
    
    // 仅仅清空值， 保留类别
    setVisible(false);
    setInputValue('');
    setFocusClass('');
    setClearLevel1Show(true);
  }

  function clearLevel1 () {
    // 清空类别
    let initCurType = ''
    if (defaultDataIndex && defaultDataIndex !== '' && defaultOptionItem) {
        initCurType = 'default';
        let defaultItem = options.find((x:any) => x.dataIndex === defaultDataIndex)
        if (defaultItem) {
            // console.log(defaultItem)
            setDefaultOptionItem(defaultItem);
        } else {
            initCurType = 'nodefault';
        }
    } else {
        initCurType = 'nodefault';
    }
    
    setCurType(initCurType);
    setClearLevel1Show(false);
  }

  // 多选的确定
  function onPrimaryMultiple(dataIndex: string) {
    // multipleValues
    setVisible(false)
    if (onChangeItem) {
      let changeFileds = Object.create({});
      changeFileds[dataIndex] = multipleValues;
      if (mode === 'single-multi') {
        setAllFileds(changeFileds)
        onChangeItem(changeFileds, changeFileds);
      } else if (mode === 'multi-multi') {
        allFileds[dataIndex] = multipleValues
        setAllFileds(allFileds)
        onChangeItem(changeFileds, allFileds);
      }
      setMultipleValues([]);
    }
  }

  // 多选的change，仅改变state
  function onMultipleChange(values: any) {
    // console.log('value', values);
    if (values) {
      setMultipleValues(values)
    } else {
      setMultipleValues([])
    }
  }

  // 第一级选择某个具体的类别
  async function onLevel1Change (value: any, actionType: any, item: any) {
    // console.log('value', value,'level1 , actionType', actionType, 'item:', item)
    setClearLevel1Show(true);
    // console.log('defaultInputValue', defaultInputValue)
    if (actionType === 'itemClick') {
      // 判断是level选择还是直接输入的suggest---- 选了一个类别
      if (!defaultInputValue) {
        // level1 的选择
        let curOptItem = options.find((x: any) => x.dataIndex === value);
        if (curOptItem) {
          setCurOptionItem(curOptItem)
          setCurType('item')
        }
        // 当第一次选择了筛选类别后，需自动进入激活状态，无需再次点击；（自动获取焦点）自动弹窗
        setVisible(true)
      } else if (curType === 'default' && defaultDataIndex && defaultDataIndex !== '') {
        // 选了suggest
        inputChange(value, 'itemClick', defaultDataIndex);
        setDefaultValue('')
        setLevel1DataSource(level1DataSourceTemp);
      } else if (curType === 'nodefault') {
        if (item && item.dataIndex) {
          inputChange(value, 'itemClick', item.dataIndex);
          setDefaultValue('')
          setLevel1DataSource(level1DataSourceTemp);
        }
      }
      
    } else if (actionType === 'change'){

      // 直接输入
      
      if (!value || value === '') {
        setLevel1DataSource(level1DataSourceTemp);
      } else {
        if (defaultDataIndex && defaultDataIndex !== '' && onSuggest) {
          await setDefSuggest(value);
        } else if (onSuggestNoDataIndex) {
          await setNoDefSuggest(value);
        }
      }
      setDefaultValue(value)
    }
  }

  function onClearLevel1 () {
    clearLevel1();
  }

  async function setDefSuggest(value: any) {
    if (onSuggest && defaultDataIndex && defaultDataIndex !== '') {
      let list = await onSuggest(value, defaultDataIndex);
        let newDataSource = [
          {
            label: defaultOptionItem.label,
            children: list
          }
        ]
        setLevel1DataSource(newDataSource);
        setDefaultVisible(true);
    }
  }

  async function setNoDefSuggest(value: any){
    if (onSuggestNoDataIndex) {
      let list = await onSuggestNoDataIndex(value)
      // console.log(list)
      checkNoIndexListFormat(list);
      setLevel1DataSource([...list]);
      setDefaultVisible(true);
    }
  }

  function onDeFaultEnter (e: any) {
    let dataIndex = defaultDataIndex;
    let value = defaultInputValue;
    if (curType === 'item' && curOptionItem.template === 'input'){
      dataIndex = curOptionItem.dataIndex;
      value = inputValue;
    }
    if (e.keyCode === 13 && value !== '') {
      if (curOptionItem.template === 'multiple') {
        return
      }
      if (defaultDataIndex && defaultDataIndex !== '' && onSuggest) {
        inputChange(value, 'enter', defaultDataIndex);
        setDefaultVisible(false);
        setDefaultValue('');
      }
    }
  }

  /**
   * 当某一类别是， 输入类型时触发
   * 接收一个promise
   */ 
  async function inputChange (value: any, actionType: string, dataIndex: string) {
    if ((actionType === 'itemClick' || actionType === 'enter') && onChangeItem) {
      let changeFileds = Object.create({});
      changeFileds[dataIndex] = value;
      if (mode === 'single-multi') {
        setAllFileds(changeFileds)
        onChangeItem(changeFileds, changeFileds);
      } else if (mode === 'multi-multi') {
        allFileds[dataIndex] = value;
        setAllFileds(allFileds)
        onChangeItem(changeFileds, allFileds);
      }
      setVisible(false);
      setDefaultVisible(false);
      setInputDataSource([]);
    } else {
      if (value === '') {
        setInputDataSource([]);
        setClearLevel1Show(true);
      } else {
        setClearLevel1Show(false);
      }
      setInputValue(value)
      
      if (value !== '' && onSuggest) {
          // todo：try catch， 要补上
          let list = await onSuggest(value, dataIndex);
          // console.log('res suggest', list);
          let newDataSource = [
            {
              label: curOptionItem.label,
              children: list
            }
          ]
          setInputDataSource(newDataSource);
          setVisible(true)
          setDefaultVisible(true);
      }
    }
  }

  // 单选或多选的change，
  function selectChange(value: any, dataIndex: string) {
    // setSingleValues(value);
    setVisible(false);
    setFocusClass('');
    if (onChangeItem) {
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = value;
        if (mode === 'single-multi') {
          // 判断value 是否为undefined
          setAllFileds(changeFileds);
          onChangeItem(changeFileds, changeFileds);
        } else if (mode === 'multi-multi'){
          allFileds[dataIndex] = value;
          setAllFileds(allFileds)
          onChangeItem(changeFileds, allFileds);
        }
        
    }
  }
  
  // 提交按钮
  function onCommonSearch () {
    if (onSearch) {
      let checkAllFileds = checkAllFromTags(allFileds);
      onSearch(checkAllFileds);
      // todo: 只有搜索了才会被记录到，根据页面的路由为key，history
      upDateHistory();
    }
  }

  return (
    <SearchWarp>
      <div className={classNames('left-wrap', 'next-input', focusClass)}>
        <div className={classNames('condition')}>
          {curType === 'item' && 
            (
              <div className={classNames('condition-item')}>
                <span className={classNames('condition-item-txt')}>{curOptionItem.label}</span>
                <Icon type="caret-down" size="xxs" />
                <Select
                  className={classNames('condition-select')}
                  hasBorder={false}
                  dataSource={level1DataSource}
                  onChange={onLevel1Change}
                  autoWidth={false}
                />
              </div>
            )
          }
        </div>
        <div className={classNames('forms')} onKeyUp={onDeFaultEnter}>
          {curType === 'default' && defaultOptionItem && 
            (
              <AutoComplete
                className={classNames('main-input', 'multi')}
                placeholder={`默认按${defaultOptionItem.label}搜索`}
                hasClear
                hasBorder={false}
                menuProps={menuPropsLevel1}
                dataSource={level1DataSource}
                itemRender={itemRender}
                onChange={onLevel1Change}
                popupStyle={histroyList && histroyList.length > 0 ? {} : {width: 'auto'}}
                visible={defaultVisible}
                onFocus={() => {setDefaultVisible(true);setFocusClass('focus')}}
                onBlur={() => {setDefaultVisible(false);setFocusClass('')}}
                value={defaultInputValue}
              />
            )
          }
          {curType === 'nodefault' && 
            (
              <AutoComplete
                className={classNames('main-input', 'multi')}
                placeholder={defaultPlaceholder || `请搜索`}
                hasClear
                hasBorder={false}
                menuProps={menuPropsLevel1}
                popupStyle={histroyList && histroyList.length > 0 ? {} : {width: 'auto'}}
                itemRender={itemRender}
                dataSource={level1DataSource}
                onChange={onLevel1Change}
                visible={defaultVisible}
                onFocus={() => {setDefaultVisible(true);setFocusClass('focus')}}
                onBlur={() => {setDefaultVisible(false);setFocusClass('')}}
                value={defaultInputValue}
              />
            )
          }
          {curType === 'item' && curOptionItem.template === 'input' && 
            (
              <AutoComplete
                className={classNames('main-input', 'multi')}
                placeholder={curOptionItem.templateProps.placeholder || `默认按${curOptionItem.label}搜索`}
                hasClear
                hasBorder={false}
                itemRender={itemRender}
                visible={visible && inputDataSource.length > 0}
                dataSource={inputDataSource}
                autoFocus
                value={inputValue}
                onFocus={() => {setVisible(true);setFocusClass('focus')}}
                onBlur={() => {setVisible(false);setFocusClass('')}}
                onChange={(value, actionType) => {inputChange(value, actionType, curOptionItem.dataIndex)}}
              />
            )
          }
          {curType === 'item' && curOptionItem.template === 'select' && 
            (
              <Select
                className={classNames('main-input', 'select')}
                placeholder={curOptionItem.templateProps.placeholder || `请选择${curOptionItem.label}`}
                hasClear
                hasBorder={false}
                dataSource={getSelectOptionAdatp(curOptionItem.label, curOptionItem.templateProps.dataSource)}
                onChange={(value) => {selectChange(value, curOptionItem.dataIndex)}}
                popupStyle={{minWidth: 'auto'}}
                autoFocus
                visible={visible}
                value={undefined}
                onClick={() => {setVisible(true);setFocusClass('focus')}}
                onFocus={() => {setVisible(true);setFocusClass('focus')}}
                onBlur={() => {setVisible(false);setFocusClass('')}}
              />
            )
          }
          {curType === 'item' && curOptionItem.template === 'multiple' && 
            (
              <Select
                className={classNames('main-input', 'multi')}
                placeholder={curOptionItem.templateProps.placeholder || `请选择${curOptionItem.label}`}
                hasClear
                mode="multiple"
                maxTagCount={0}
                hasBorder={false}
                autoFocus
                menuProps={menuProps}
                value={multipleValues}
                onFocus={() => {setVisible(true);setFocusClass('focus')}}
                onClick={() => {setVisible(true);setFocusClass('focus')}}
                onBlur={() => {setVisible(false);setFocusClass('')}}
                itemRender={itemRenderMulti}
                popupClassName="xconsole-rcsearch-multi-pop"
                visible={visible}
                dataSource={getSelectOptionAdatp(curOptionItem.label, curOptionItem.templateProps.dataSource)}
                onChange={(value) => {onMultipleChange(value)}}
                popupStyle={{minWidth: 'auto', padding: '10px 16px 10px 16px'}}
              />
            )
          }
          {clearLevel1Show && 
            (
              <div className="clear-level1" onClick={onClearLevel1}>
                {/* <Icon type="remove" size="xxs" /> */}
                <span className="next-input-control">
                  <span className="next-input-hint-wrap">
                    <i role="button" aria-label="清除" className="next-icon next-icon-delete-filling next-medium next-input-hint next-input-clear-icon"></i>
                    </span>
                  </span>
              </div>
            )
          }
          
        </div>
      </div>
      
      
      <div className={classNames('right-wrap')}>
        <Button className={classNames('search-btn')} onClick={onCommonSearch}><Icon type="search" /></Button>
      </div>
    </SearchWarp>
  )
}

export default ModeSingleSingle;