/**
 * @title RegionGuidance
 */

import React from "react";
import { Table } from "@alicloud/console-components";
import { RegionGuidance } from "@alicloud/console-components-pro";


const Demo1: React.FC<{}> = (props) => {
   const [visible, setVisible] = React.useState(false)
   return (
     <>
        <Table emptyContent={<RegionGuidance currentRegion="cn-hangzhou"/>}>
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={(
            <RegionGuidance
              currentRegion="cn-hangzhou"
              onRegionClick={(value) => alert(value)}
              regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}]}
            />
          )}>
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={
            <RegionGuidance currentRegion="cn-hangzhou" globalSearchAction regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}]}/>
          }
        >
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={(
            <RegionGuidance
              currentRegion="cn-hangzhou"
              globalSearchAction
              onRegionClick={(value) => alert(value)}
              regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}, {id: 'ap-southeast-5', count: 1}]}/>
          )}
        >
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={(
            <RegionGuidance
              currentRegion="cn-hangzhou"
              regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}, {id: 'ap-southeast-5', count: 1}]}
            >
              <>当前地域下无资源栈，请选择其他地域或 <a href="#">创建资源栈</a></>
            </RegionGuidance>
          )}
        >
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <RegionGuidance
          currentRegion="cn-hangzhou"
          type="message"
          regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}]}
        />

        <div style={{margin: "20px 0px"}}/>

        <RegionGuidance
          currentRegion="cn-hangzhou"
          type="message"
          regionList={[
            {id: 'cn-shanghai', count: 29},
            {id: 'cn-beijing', count: 20},
            {id: 'cn-shenzhen', count: 20},
            {id: 'cn-chengdu', count: 20}
          ]}
        />
     </>
   )
 };
 
 export default Demo1;
 