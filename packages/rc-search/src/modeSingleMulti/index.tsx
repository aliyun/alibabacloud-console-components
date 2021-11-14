import React, {useState, useEffect} from "react";
import classNames from 'classnames'
import styled from "styled-components";
import { Button, Icon, Tag, Select } from '@alicloud/console-components'
import { IRcSearchProps } from "../types/IRcSearchProps.type";
import {
    getHistoryTag as getHistoryTagUtil,
    setHistoryTag as setHistoryTagUtil,
    removeHistoryTagItem as removeHistoryTagItemUtils,
    getTagByFileds
} from "../utils";

const { Group: TagGroup, Closeable: ClosableTag } = Tag;

const { AutoComplete } = Select

const WrapDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  .left-wrap {
    flex: 1;
    border-left: 1px solid rgba(192,198,204,1);
    display: flex;
    .condition{
        height: 26px;
        display: inline-block;
        margin-top: 2px;
    }
    .condition-item{
        height: 26px;
        display: inline-block;
        line-height: 26px;
        background: #EFF3F8;
        border-radius: 2px;
        background-color: #EFF3F8;
        padding: 0 8px;
        margin: 0 2px;
        font-size: 12px;
        color: #333;
        position: relative;
        
    }
    .condition-select{
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
    .forms{
      flex: 1;
    }
    .main-input{
      height: auto;
      border: none;
      width: 100%;
      
      .next-input{
        height: auto;
      }
    }
  }
  .right-wrap {
    width: 32px;
    height: 32px;
    .search-btn{
      width: 32px;
      height: 32px;
    }
  }
`;


const ModeSingleSingle: React.FC<IRcSearchProps> = (props) => {
  const {
    mode,
    options,
    defaultDataIndex,
    tags,
    onSuggest,
    onSuggestNoDataIndex,
    onChange,
    onSearch,
    onTagChange
  } = props;

  const [allFileds, setAllFileds] = useState<any>({});
  const [curOptionItem, setCurOptionItem] = useState<any>({});
  const [defaultOptionItem, setDefaultOptionItem] = useState<any>(null);
  const [defaultInputValue, setDefaultValue] = useState<any>(null);
  const [inputValue, setInputValue] = useState<any>(null);
  const [inputDataSource, setInputDataSource] = useState<any>([]);
  const [visible, setVisible] = useState<any>(false);
  const [defaultVisible, setDefaultVisible] = useState<any>(false);
  const [multipleValues, setMultipleValues] = useState<any>([]);
  const [tagList, setTagList] = useState<any>([]);
  const [histroyList, setHistroyList] = useState<any>([]);

  useEffect(() => {
    let initHisTags = getHistoryTagUtil();
    console.log('initHisTags', JSON.stringify(initHisTags))
    if (initHisTags) {
      setHistroyList(initHisTags);
    }
  }, [])

  let initCurType = ''
  if (defaultDataIndex && defaultDataIndex !== '' && !defaultOptionItem) {
    initCurType = 'default';
    let defaultItem = options.find((x:any) => x.dataIndex === defaultDataIndex)
    if (defaultItem) {
        console.log(defaultItem)
        setDefaultOptionItem(defaultItem);
    } else {
        initCurType = 'nodefault';
    }
  } else {
    initCurType = 'nodefault';
  }
  const [curType, setCurType] = useState<any>(initCurType); // defalut/nodefault/item


  let level1DataSource = [
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

  const menuPropsLevel1 = {
    focusable: false,
    header: (
      <ul className="next-menu-content">
        {
          histroyList && histroyList.length > 0 && (<li role="option" title="历史搜索记录" className="next-menu-group-label"><div className="next-menu-item-inner">历史搜索记录{histroyList.length}</div></li>)  
        }
        {
          histroyList && histroyList.length > 0 && (
            <TagGroup>
            {histroyList.map((tag:any, index: number) => {
                return (
                <ClosableTag
                  size="small"
                  key={tag.dataIndex + tag.value + index}
                  onClose={() => {onRemoveHisTag(tag); return true;}}
                  onClick={() => {onSelectHisTag(tag);}}
                >
                    {tag.label}:{tag.valueShow}
                </ClosableTag>
                )
            })}
            </TagGroup>
          )  
        }
        
      </ul>
    ),
    footer: null,
  };

  const menuProps = {
    focusable: false,
    header: null,
    footer: (
      <div style={{ padding: "0 4px", textAlign: "center", display: "flex", justifyContent: "space-around" }}>
        <Button size="small" type="primary" onClick={() => {onPrimaryMultiple(curOptionItem.dataIndex)}}>确定</Button>
        <Button size="small" type="normal" onClick={() => {setMultipleValues([])}}>取消</Button>
      </div>
    ),
  };

  function onRemoveHisTag (tagItem:any) {
    const newHisTags = removeHistoryTagItemUtils(tagItem);
    setHistroyList(newHisTags);
  }

  function onSelectHisTag (tagItem:any) {
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
      tags.forEach((tag: any) => {
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
    // todo : func
    let initCurType = ''
    if (defaultDataIndex && defaultDataIndex !== '' && !defaultOptionItem) {
        initCurType = 'default';
        let defaultItem = options.find((x:any) => x.dataIndex === defaultDataIndex)
        if (defaultItem) {
            console.log(defaultItem)
            setDefaultOptionItem(defaultItem);
        } else {
            initCurType = 'nodefault';
        }
    } else {
        initCurType = 'nodefault';
    }
    setCurType(initCurType)
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
      
    }
  }

  // 多选的change，仅改变state
  function onMultipleChange(values: any) {
    setMultipleValues(values)
  }

  // 第一级选择某个具体的类别
  function onLevel1Change (value: any, actionType: any) {
    //   console.log('level1 , actionType', actionType)
    if (actionType === 'itemClick') {
      let curOptItem = options.find((x: any) => x.dataIndex === value);
      if (curOptItem) {
        setCurOptionItem(curOptItem)
        setCurType('item')
      }
    }
    setDefaultValue(value)
    
  }

  function onDeFaultEnter (e: any) {
    let dataIndex = defaultDataIndex;
    let value = defaultInputValue;
    if (curType === 'item' && curOptionItem.template === 'input'){
      dataIndex = curOptionItem.dataIndex;
      value = inputValue;
    }
    if (e.keyCode === 13) {
      if (defaultDataIndex && defaultDataIndex !== '' && onSuggest) {
        inputChange(value, 'enter', dataIndex);
        setDefaultVisible(false);
        setDefaultValue(undefined);
      } else if (onSuggestNoDataIndex) {
        onSuggestNoDataIndex(value);
        setDefaultVisible(false);
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
    } else {
      if (value === '') {
        setInputDataSource([]);
      }
      setInputValue(value)
      if (onSuggest) {
          // todo：try catch， 要补上
          let list = await onSuggest(value, dataIndex);
          console.log('res suggest', list);
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
    if (onChangeItem) {
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = value;
        if (mode === 'single-multi') {
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
      // console.log(tags, checkAllFromTags(allFileds))
      // console.log('all', allFileds);
      onSearch(checkAllFileds);
      // todo: 只有搜索了才会被记录到，根据页面的路由为key，history
      upDateHistory();
    }
  }

  return (
    <WrapDiv>
      <div className={classNames('left-wrap', 'next-input')}>
        <div className={classNames('condition')}>
          {curType === 'item' && 
            (
              <div className={classNames('condition-item')}>
                {curOptionItem.label}<Icon type="caret-down" size="xxs" />
                <Select
                  className={classNames('condition-select')}
                  hasBorder={false}
                  dataSource={level1DataSource}
                  onChange={onLevel1Change}
                />
              </div>
            )
          }
        </div>
        <div className={classNames('forms')} onKeyUp={onDeFaultEnter}>
          {(curType === 'default' || curType === 'nodefault') && defaultOptionItem && 
            (
              <AutoComplete
                className={classNames('main-input')}
                placeholder={`默认按${defaultOptionItem.label}搜索`}
                hasClear
                hasBorder={false}
                menuProps={menuPropsLevel1}
                dataSource={level1DataSource}
                onChange={onLevel1Change}
                visible={defaultVisible}
                onFocus={() => {setDefaultVisible(true)}}
                onBlur={() => {setDefaultVisible(false)}}
                // value={defaultInputValue}
              />
            )
          }
          {curType === 'item' && curOptionItem.template === 'input' && 
            (
              <AutoComplete
                className={classNames('main-input')}
                placeholder={curOptionItem.templateProps.placeholder || `默认按${curOptionItem.label}搜索`}
                hasClear
                hasBorder={false}
                visible={visible}
                onBlur={() => {setVisible(false)}}
                dataSource={inputDataSource}
                onChange={(value, actionType) => {inputChange(value, actionType, curOptionItem.dataIndex)}}
              />
            )
          }
          {curType === 'item' && curOptionItem.template === 'select' && 
            (
              <Select
                className={classNames('main-input')}
                placeholder={curOptionItem.templateProps.placeholder || "请选择"}
                hasClear
                hasBorder={false}
                dataSource={curOptionItem.templateProps.dataSource}
                onChange={(value) => {selectChange(value, curOptionItem.dataIndex)}}
              />
            )
          }
          {curType === 'item' && curOptionItem.template === 'multiple' && 
            (
              <Select
                className={classNames('main-input')}
                placeholder={curOptionItem.templateProps.placeholder || "请选择"}
                hasClear
                mode="multiple"
                hasBorder={false}
                menuProps={menuProps}
                onFocus={() => {setVisible(true)}}
                onBlur={() => {setVisible(false)}}
                visible={visible}
                dataSource={curOptionItem.templateProps.dataSource}
                onChange={(value) => {onMultipleChange(value)}}
              />
            )
          }
        </div>
      </div>
      
      <div className={classNames('right-wrap')}>
        <Button className={classNames('search-btn')} onClick={onCommonSearch}><Icon type="search" /></Button>
      </div>
    </WrapDiv>
  )
}

export default ModeSingleSingle;