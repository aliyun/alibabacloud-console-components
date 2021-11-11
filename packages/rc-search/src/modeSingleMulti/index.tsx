import React, {Children, useState, useImperativeHandle} from "react";
import classNames from 'classnames'
import styled from "styled-components";
import { Button, Icon, Tag, Select } from '@alicloud/console-components'
import { IRcSearchProps } from "../types/IRcSearchProps.type";

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

function getTagByFileds (fileds: any, options: any) {
  let rtTags = new Array<any>();
  Object.keys(fileds).forEach((key: string) => {
    let resItem = options.find((x:any) => x.dataIndex === key)
    if (resItem) {
      let tagItem = {
        label: resItem.label,
        dataIndex: key,
        value: fileds[key],
        valueShow: ''
      }  
      if (resItem.template === 'input') {
        tagItem.valueShow = fileds[key]
      } else if (resItem.template === 'select') {
        tagItem.valueShow = resItem.templateProps.dataSource.find((y:any) => y.value === fileds[key]).label
      } else if (resItem.template === 'multiple') {
        tagItem.valueShow = ''
        let valueShowArr = new Array<any>();
        fileds[key].forEach((y:any) => {
          let findMul = resItem.templateProps.dataSource.find((z:any) => z.value === y)
          if (findMul) {
            valueShowArr.push(findMul.label)
          }
        })
        tagItem.valueShow = valueShowArr.join('/')
      }
      rtTags.push(tagItem)
    }
  })
  return rtTags;
}


const ModeSingleSingle: React.FC<IRcSearchProps> = (props) => {
  const {
    mode,
    options,
    defaultDataIndex,
    onSuggest,
    onChange,
    onSearch,
    onTagChange
  } = props;

  const [allFileds, setAllFileds] = useState<any>({});
  const [curOptionItem, setCurOptionItem] = useState<any>({});
  const [defaultOptionItem, setDefaultOptionItem] = useState<any>(null);
  const [inputDataSource, setInputDataSource] = useState<any>([]);
  const [visible, setVisible] = useState<any>(false);
  const [multipleValues, setMultipleValues] = useState<any>([]);
  const [tagList, setTagList] = useState<any>([]);
  const [histroyList, setHistroyList] = useState<any>([]);

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
      <div>
        {
          histroyList.length > 0 && (<li role="option" title="历史搜索记录" className="next-menu-group-label"><div className="next-menu-item-inner">历史搜索记录</div></li>)  
        }
        <TagGroup>
          {histroyList.map((tag:any) => {
            <ClosableTag size="medium">{tag.label}:{tag.values.map((x:any) => x.label).join('/')}</ClosableTag>
          })}
        </TagGroup>
      </div>
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

  function onChangeItem (changeFileds: any, allFileds:any) {
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

  function onPrimaryMultiple(dataIndex: string) {
    // multipleValues
    setVisible(false)
    if (onChangeItem) {
      let changeFileds = Object.create({});
      changeFileds[dataIndex] = multipleValues;
      if (mode === 'single-multi') {
        onChangeItem(changeFileds, changeFileds);
        setAllFileds(changeFileds);
      } else if (mode === 'multi-multi') {
        allFileds[dataIndex] = multipleValues
        onChangeItem(changeFileds, allFileds);
        setAllFileds(allFileds);  
      }
      
    }
  }
  function onMultipleChange(values: any) {
    setMultipleValues(values)
  }

  function onLevel1Change (value: any, actionType: any) {
    if (actionType === 'itemClick') {
      let curOptItem = options.find((x: any) => x.dataIndex === value);
      if (curOptItem) {
        setCurOptionItem(curOptItem)
        setCurType('item')
      }
    }
  }

  async function inputChange (value: any, actionType: string, dataIndex: string) {
    if ((actionType === 'itemClick' || actionType === 'enter') && onChangeItem) {
      let changeFileds = Object.create({});
      changeFileds[dataIndex] = value;
      if (mode === 'single-multi') {
        onChangeItem(changeFileds, changeFileds);
        setAllFileds(changeFileds);
      } else if (mode === 'multi-multi') {
        allFileds[dataIndex] = value;
        onChangeItem(changeFileds, allFileds);
        setAllFileds(allFileds);
      }
      setVisible(false);
    } else {
      if (value === '') {
        setInputDataSource([]);
      }
      if (onSuggest) {
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
      }
    }
  }

  function selectChange(value: any, dataIndex: string) {
    if (onChangeItem) {
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = value;
        if (mode === 'single-multi') {
          onChangeItem(changeFileds, changeFileds);
          setAllFileds(changeFileds);
        } else if (mode === 'multi-multi'){
          allFileds[dataIndex] = value;
          onChangeItem(changeFileds, allFileds);
          setAllFileds(allFileds);
        }
        
    }
  }
  

  function onCommonSearch () {
    if (onSearch) {
      onSearch(allFileds);
      // todo: 只有搜索了才会被记录到，根据页面的路由为key，history
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
        <div className={classNames('forms')}>
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