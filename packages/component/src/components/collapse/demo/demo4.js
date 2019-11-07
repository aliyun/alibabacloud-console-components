import React from 'react'
import { Collapse } from '@alicloud/console-components'

const Panel = Collapse.Panel
const list = [
  {
    title: '宋词范例',
    content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。'
    
  },
  {
    title: '唐诗范例',
    content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。',
    disabled: true
  },
  {
    title: '现代诗范例',
    content: '轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。',
    disabled: true
  },
  {
    title: '网络词汇',
    content: ' 洪荒之力。萌萌哒。带我上黄金，带我装逼带我飞。扎心了老铁',
    disabled: true
  },
]

const Demo4 = () => (
  <div>
    <Collapse>
      <Panel title="There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured.">
        <ul>
          <li>Promotions are marketing campaigns ran by Marketplace</li>
          <li>Participate to sale your products during that promotion and make a profit</li>
        </ul>
      </Panel>
      <Panel title="What are Promotion Products?" disabled>
        <ul>
          <li>Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range</li>
          <li>You can choose which products should be available for the promotion</li>
          <li>Not all Products of you will be available, because Promotions will only attract certain Product areas</li>
        </ul>
      </Panel>
      <Panel title="Why can i not submit a higher price?">
        <ul>
          <li>The Promotion requires a certain price to make sure that our customers are attracted</li>
        </ul>
      </Panel>
      <Panel title="What is Promo Stock?">
       Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.
      </Panel>
    </Collapse>

    <h6>dataSource方式</h6>
    <Collapse dataSource={list} />
    
    <h6>全部禁用</h6>
    <Collapse disabled>
      <Panel title="There is a long title, you can set the multiTitle to multi line display, the associated configuration properties and a single height is not the same, the specific configuration platform configuration can be configured.">
        <ul>
          <li>Promotions are marketing campaigns ran by Marketplace</li>
          <li>Participate to sale your products during that promotion and make a profit</li>
        </ul>
      </Panel>
      <Panel title="What are Promotion Products?">
        <ul>
          <li>Promotion Products is a service that helps you to promote products you list on Marketplace during a certain time range</li>
          <li>You can choose which products should be available for the promotion</li>
          <li>Not all Products of you will be available, because Promotions will only attract certain Product areas</li>
        </ul>
      </Panel>
      <Panel title="Why can i not submit a higher price?">
        <ul>
          <li>The Promotion requires a certain price to make sure that our customers are attracted</li>
        </ul>
      </Panel>
      <Panel title="What is Promo Stock?">
       Promo Stock is the criteria needed to be followed to be able to join Promotion. With setting particular Promo Stock value you commit to have this amount of stock available while Promotion is active.
      </Panel>
    </Collapse>
  </div>
)

export default Demo4
