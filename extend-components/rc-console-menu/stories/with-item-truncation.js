// import React, { Fragment, useState } from 'react'
// import { random } from 'lodash'
// import { Select } from '@alicloud/console-components'
// import ConsoleMenu from '@alicloud/console-components-console-menu'
// import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloud/console-components-fake-browser'

// /**
//  * @param {String|Number} key 被点击的 `<Item>` 的 key
//  * @param {Item} item 被点击的 `<Item>` 的序列化对象
//  * @param {SyntheticEvent} e
//  */
// const onItemClick = (key, item, e) => {
//   console.log(`${key} has been clicked.`)
//   console.log([item, e])
// }

// const createRandomStringGetter = (words, joinWith = '') => length =>
//   new Array(length)
//     .fill(1)
//     .map(() => words[random(words.length)])
//     .join(joinWith)

// const cnWords =
//   '永和九年岁在癸丑暮春之初会于会稽山阴之兰亭修稧事也群贤毕至少长咸集此地有崇山峻领茂林修竹又有清流激湍映带左右引以为流觞曲水列坐其次虽无丝竹管弦之盛一觞一咏亦足以畅叙幽情'
// const enWords = 'Alibaba Cloud networking services provide you a highly stable low latency and high-speed network with flexible hybrid cloud connections Our networking services deliver secure and reliable communication to and from IDCs in 19 regions globally. With more than 60 areas deployed globally Alibaba Clouds large node network gives you access to close by nodes shortening geographic distances'.split(
//   ' '
// )

// const wordsMap = {
//   cn: {
//     value: cnWords,
//     joinWith: '',
//   },
//   en: {
//     value: enWords,
//     joinWith: ' ',
//   },
// }

// const useWords = initialWordsId => {
//   const [wordsId, setWordsId] = useState(initialWordsId)
//   const { value, joinWith } = wordsMap[wordsId]
//   const getRandomString = createRandomStringGetter(value, joinWith)

//   return {
//     getRandomString,
//     wordsId,
//     setWordsId,
//   }
// }

// const defaultWordsId = 'cn'

// /**
//  * 使用组件方式声明导航菜单
//  */
// const Example = () => {
//   const { getRandomString, setWordsId } = useWords(defaultWordsId)

//   return (
//     <Fragment>
//       <div style={{ marginBottom: 20 }}>
//         <Select
//           style={{ width: 210 }}
//           defaultValue={defaultWordsId}
//           onChange={value => {
//             setWordsId(value)
//           }}
//         >
//           <Select.Option value="cn">简体中文</Select.Option>
//           <Select.Option value="en">English</Select.Option>
//         </Select>
//       </div>
//       <ConsoleMenu
//         style={{ width: 210 }}
//         header={getRandomString(20)}
//         onItemClick={onItemClick}
//         defaultActiveKey="home"
//       >
//         <ConsoleMenu.Item key="home">{getRandomString(20)}</ConsoleMenu.Item>
//         <ConsoleMenu.Item key="list">{getRandomString(10)}</ConsoleMenu.Item>
//         <ConsoleMenu.SubMenu key="logs" label={getRandomString(20)}>
//           <ConsoleMenu.Item key="daily">{getRandomString(5)}</ConsoleMenu.Item>
//           <ConsoleMenu.Item key="prod">{getRandomString(20)}</ConsoleMenu.Item>
//         </ConsoleMenu.SubMenu>
//         <ConsoleMenu.SubMenu
//           key="others"
//           label={
//             <ConsoleMenu.Truncate>{getRandomString(20)}</ConsoleMenu.Truncate>
//           }
//         >
//           <ConsoleMenu.Item key="help">
//             <ConsoleMenu.Truncate>{getRandomString(20)}</ConsoleMenu.Truncate>
//           </ConsoleMenu.Item>
//           <ConsoleMenu.Item key="docs" disabled>
//             <ConsoleMenu.Truncate>{getRandomString(20)}</ConsoleMenu.Truncate>
//           </ConsoleMenu.Item>
//         </ConsoleMenu.SubMenu>
//       </ConsoleMenu>
//     </Fragment>
//   )
// }

// const FakeBrowserDemo = () => {
//   return (
//     <FakeBrowser
//       key={Date.now()}
//       position="fixed"
//       width="100%"
//       height="auto"
//       left="0"
//       top="0"
//       bottom="40px"
//     >
//       <Example />
//     </FakeBrowser>
//   )
// }

// export default FakeBrowserDemo
