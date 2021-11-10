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

let selectOptions = [
    {label: '111', value: '999'}
]

const ModeSingleSingle: React.FC<IRcSearchProps> = (props) => {
  const {
    options,
    onSuggest
  } = props;
  let optionItem = options[0];
  const [selectDataSource, setSelectDataSource] = useState(selectOptions);

  async function inputChange (value: any) {
    console.log('value: ', value)
    if (onSuggest) {
        let res = await onSuggest(value, 'name');
        console.log('res suggest', res);
        setSelectDataSource(res);
    }
  }

  return (
    <WrapDiv>
      {optionItem.template === 'input' && 
        (
          <div className={classNames('left-wrap', 'next-input')}>
            <AutoComplete
              className={classNames('main-input')}
              placeholder={`默认按${optionItem.label}搜索`}
              hasClear
              hasBorder={false}
              dataSource={selectDataSource}
              onChange={inputChange}
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
            placeholder="请选择"
            hasClear
            hasBorder={false}
            dataSource={selectDataSource}
          />
        </div>
      }
      
      <div className={classNames('right-wrap')}>
        <Button className={classNames('search-btn')}><Icon type="search" /></Button>
      </div>
    </WrapDiv>
  )
}

export default ModeSingleSingle;