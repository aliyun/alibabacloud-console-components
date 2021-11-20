import React, {useState} from "react";
import classNames from 'classnames'
import styled from "styled-components";
import { Button, Icon, Input, Select } from '@alicloud/console-components'
import { IRcSearchProps } from "../types/IRcSearchProps.type";

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
        
    }
    .main-input{
      height: auto;
      border: none;
      flex: 1;
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
    options,
    onSuggest,
    onChange,
    onSearch
  } = props;
  let optionItem = options[0];
  if (!optionItem.templateProps) {
    optionItem.templateProps = {}
  }
  const [inputDataSource, setInputDataSource] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [allFileds, setAllFileds] = useState<any>({});

  const itemRender = (item: any, searchKey:string) => {
    let label = item.label
    if (searchKey && searchKey.length) {
      const key = searchKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
      const reg = new RegExp(`(${key})`, 'ig')
      label = label.replace(
        reg,
        (x: any) => `<span class="next-select-highlight">${x}</span>`
      )
    }
  
    return <span dangerouslySetInnerHTML={{ __html: label }} />
  }

  async function inputChange (value: any, actionType: string, dataIndex: string) {
    if (actionType === 'itemClick' && onChange) {
      let changeFileds = Object.create({});
      changeFileds[dataIndex] = value;
      onChange(changeFileds, changeFileds);
      setAllFileds(changeFileds);
      setVisible(false);
    } else {
      if (value === '') {
        setInputDataSource([]);
      }
      if (onSuggest) {
          let list = await onSuggest(value, dataIndex);
          // console.log('res suggest', res);
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

  async function selectChange (value: any, dataIndex: string) {
    if (onChange) {
        let changeFileds = Object.create({});
        changeFileds[dataIndex] = value;
        onChange(changeFileds, changeFileds);
        setAllFileds(changeFileds);
    }
  }

  function onCommonSearch () {
    if (onSearch) {
      onSearch(allFileds);
    }
  }

  return (
    <WrapDiv>
      {optionItem.template === 'input' && 
        (
          <div className={classNames('left-wrap', 'next-input')}>
            <AutoComplete
              className={classNames('main-input')}
              placeholder={optionItem.templateProps.placeholder || `默认按${optionItem.label}搜索`}
              hasClear
              hasBorder={false}
              dataSource={inputDataSource}
              visible={visible}
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
            className={classNames('main-input')}
            placeholder={optionItem.templateProps.placeholder || "请选择"}
            hasClear
            hasBorder={false}
            dataSource={optionItem.templateProps.dataSource}
            onChange={(value) => {selectChange(value, optionItem.dataIndex)}}
          />
        </div>
      }
      
      <div className={classNames('right-wrap')}>
        <Button className={classNames('search-btn')} onClick={onCommonSearch}><Icon type="search" /></Button>
      </div>
    </WrapDiv>
  )
}

export default ModeSingleSingle;