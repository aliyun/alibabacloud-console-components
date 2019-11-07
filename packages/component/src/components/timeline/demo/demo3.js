import React from 'react'
import { Timeline } from '@alicloud/console-components'

const { Item: TimelineItem } = Timeline
const dataSource = [
  {id:1,title:'【杭州市】已签收,签收人是阿里巴巴小邮局，感谢使用申通快递，期待再次为您服务',time: '2016-06-10 10:30:00',state:'process'},
  {id:2,title:'【杭州市】快件已到达 浙江杭州滨江公司',time: '2016-06-10 09:30:00',state:'done'},
  {id:3,title:'【杭州市】浙江杭州滨江公司派件员正在为您派件',time: '2016-06-10 09:03:00',state:'done'},
  {id:4,title:'【杭州市】浙江杭州转运中心 已发出',time: '2016-06-10 06:10:00',state:'done'},
  {id:5,title:'【东莞市】广东东莞转运中心 已发出',time: '2016-06-09 10:30:00',state:'done'},
  {id:6,title:'【东莞市】您的订单开始处理',time: '2016-06-09 10:30:00',state:'done'}
]
const content = dataSource.map((item) => {
  return (<TimelineItem key={item.id} title={item.title} time={item.time} state={item.state} />)
})

const Demo3 = () => (
  <div>
    <Timeline fold={[{foldArea: [1, 2], foldShow: false}, {foldArea: [5], foldShow: false}]}>
      {content}
    </Timeline>
  </div>
)

export default Demo3
