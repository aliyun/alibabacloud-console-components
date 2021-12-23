/**
 * @title 场景一
 * @describe 场景一：single-single：单维度单类别单选.
 */

import React, {useState} from "react";
import { Search, IRcSearchProps, SearchTagList } from "@alicloud/console-components-search";

// interface IProps {}

let options = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '默认按实例名称搜索',
      dataSource: []
    }
  }
]

let noFuzzyoptions = [
  {
    label: '实例名称',
    dataIndex: 'name',
    template: 'input',
    templateProps: {
      placeholder: '默认按实例名称搜索',
      dataSource: [],
      fuzzyDisable: true // 不支持模糊搜索 
    }
  }
]

let options2 = [
  {
    label: '网络类型',
    dataIndex: 'type',
    template: 'select',
    templateProps: {
      placeholder: '请选择网络类型',
      dataSource: [
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
        {label: 'C', value: 'c'},
        {label: 'D', value: 'd'},
      ]
    }
  }
]

const Demo1: React.FC<IRcSearchProps> = (props) => {

  const [tagList, setTagList] = useState<any>([]);
  const [tagList2, setTagList2] = useState<any>([]);
  const [tagList3, setTagList3] = useState<any>([]);
  const [tagList4, setTagList4] = useState<any>([]);

  async function onSuggestAsync (value: string, dataIndex: string) {
    if (!value) {
      return [];
    }
    return [
      // {label: value, value: `${dataIndex}-${value}`}
      `${value}-1`,
      `${value}-2`,
      `${value}-3`,
      `${value}-4`,
      `${value}-5`,
    ]
  }
  function onSuggestPromise (value: string, dataIndex: string) {
    let rtList = [];
    if (!value) {
      rtList = [];
    }
    rtList = [
      // {label: value, value: `${dataIndex}-${value}`}
      `${value}-1`,
      `${value}-2`,
      `${value}-3`,
      `${value}-4`,
      `${value}-5`,
    ]
    return Promise.resolve(rtList)
  }

  async function onChange1 (changedFileds:any, allFileds:any) {
    console.log(`changedFileds:`,  changedFileds, '可用于搜索，allFileds', allFileds)
  }

  async function onSearch (allFileds:any) {
    console.log(`onSearch:`, 'allFileds', allFileds)
    console.log(`手动点击 ， 提交搜索： ${JSON.stringify(allFileds)}`)
  }

  function onTagChange(newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList(newTags);
  }

  function onTagChangeByTagList (newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList(newTags);
  }

  function onTagChange2(newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList2(newTags);
  }

  function onTagChangeByTagList2 (newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList2(newTags);
  }

  function onTagChange3(newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList3(newTags);
  }

  function onTagChangeByTagList3 (newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList3(newTags);
  }

  function onTagChange4(newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList4(newTags);
  }

  function onTagChangeByTagList4 (newTags: any) {
    console.log(`onTagChange:`, newTags);
    setTagList4(newTags);
  }

  return (
    <div>
      搜索类型：(async 调用)<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={options}
        onSuggest={onSuggestAsync}
        onChange={onChange1}
        onSearch={onSearch}
        onTagChange={onTagChange}
        tags={tagList}
      />
      <SearchTagList regionId="demo" resourceType="demo" style={{marginTop: '8px'}} tagList={tagList} onChange={onTagChangeByTagList} />
      <br /><br /><br />
      搜索类型：（promise调用）<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={options}
        onSuggest={onSuggestPromise}
        onChange={onChange1}
        onSearch={onSearch}
        onTagChange={onTagChange2}
        tags={tagList2}
      />
      <SearchTagList regionId="demo" resourceType="demo" style={{marginTop: '8px'}} tagList={tagList2} onChange={onTagChangeByTagList2} />
      <br /><br /><br />
      搜索类型：（不支持模糊搜索 fuzzyDisable: true）<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={noFuzzyoptions}
        onSuggest={onSuggestPromise}
        onChange={onChange1}
        onSearch={onSearch}
        onTagChange={onTagChange3}
        tags={tagList3}
      />
      <SearchTagList regionId="demo" resourceType="demo" style={{marginTop: '8px'}} tagList={tagList3} onChange={onTagChangeByTagList3} />
      <br /><br /><br />
      单选类型：<br />
      <Search
        mode="single-single"
        regionId="demo"
        resourceType="demo"
        options={options2}
        onChange={onChange1}
        onSearch={onSearch}
        onTagChange={onTagChange4}
        tags={tagList4}
      />
      <SearchTagList regionId="demo" resourceType="demo" style={{marginTop: '8px'}} tagList={tagList4} onChange={onTagChangeByTagList4} />
      <br />
      单维度单类别,暂不支持多选
    </div>
  );
};

export default Demo1;
