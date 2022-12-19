/**
 * 拉取fusion文案，生成 wind-v2 的文案，提交到美杜莎上：
 * https://mds-portal.alibaba-inc.com/applications/detail?appName=wind-v2&appId=705001
 * OneConsole会拉取这个美杜莎的文案（找振骅将文案从美杜莎同步到OneConsole），注入到控制台的window.ALIYUN_WIND_MESSAGE
 * 控制台拿到文案以后，会传给wind-intl，后者用ConfigProvider包裹应用并提供文案
 * 
 * 之所以需要使用这个脚本，是因为fusion组件库有时候会新增文案（比如新增了一个组件、或者组件某个地方新增了文案坑位），我们需要一种机制来将fusion新增的文案补充到我们的美杜莎项目。
 * 
 * 使用方式：执行这个脚本，然后访问 https://mds-portal.alibaba-inc.com/applications/detail?appName=wind-v2&appId=705001 ，点击“导入文案”，将这个脚本生成的 windIntlMessages/xxx.json 导入到美杜莎wind-v2项目中
 */

const download = require('download')
const path = require('path')
const fs = require('fs-extra')

const locales = ['en-us', 'zh-cn']

/** 以下文案，不使用fuison的值，而是在美杜莎上维护 */
const ignoreKeys = [
  '@wind_v2.base.DatePicker.monthPlaceholder',
  '@wind_v2.base.DatePicker.yearPlaceholder',
  '@wind_v2.base.Dialog.ok',
  '@wind_v2.base.Pagination.pageSize',
  '@wind_v2.base.Table.ok',
  '@wind_v2.base.momentLocale',
  '@wind_v2.base.Calendar.monthSelectAriaLabel',
  '@wind_v2.base.Calendar.nextDecade',
  '@wind_v2.base.Calendar.prevDecade',
  '@wind_v2.base.Calendar.yearSelectAriaLabel',
  '@wind_v2.base.Card.expand',
  '@wind_v2.base.Card.fold',
  '@wind_v2.base.DatePicker.datetimePlaceholder',
  '@wind_v2.base.DatePicker.endPlaceholder',
  '@wind_v2.base.DatePicker.hour',
  '@wind_v2.base.DatePicker.minute',
  '@wind_v2.base.DatePicker.placeholder',
  '@wind_v2.base.DatePicker.second',
  '@wind_v2.base.DatePicker.startPlaceholder',
  '@wind_v2.base.Pagination.go',
  '@wind_v2.base.Pagination.goTo',
  '@wind_v2.base.Pagination.inputAriaLabel',
  '@wind_v2.base.Pagination.labelNext',
  '@wind_v2.base.Pagination.labelPrev',
  '@wind_v2.base.Pagination.selectAriaLabel',
  '@wind_v2.base.Select.autoCompletePlaceholder',
  '@wind_v2.base.Select.selectPlaceholder',
  '@wind_v2.base.Table.asc',
  '@wind_v2.base.Table.desc',
  '@wind_v2.base.Table.empty',
  '@wind_v2.base.Table.expanded',
  '@wind_v2.base.Table.folded',
  '@wind_v2.base.TimePicker.hour',
  '@wind_v2.base.TimePicker.minute',
  '@wind_v2.base.TimePicker.placeholder',
  '@wind_v2.base.TimePicker.second',
  '@wind_v2.base.Timeline.expand',
  '@wind_v2.base.Timeline.fold',
  '@wind_v2.base.Transfer.item',
  '@wind_v2.base.Transfer.items',
  '@wind_v2.base.Transfer.moveAll',
  '@wind_v2.base.Transfer.searchPlaceholder',
  '@wind_v2.base.Upload.card.addPhoto',
  '@wind_v2.base.Upload.drag.hint',
  '@wind_v2.base.Upload.drag.text'
]

;(async () => {
  const unpkgUrl = 'https://unpkg.alipay.com/@alifd/next@1.23.10/lib/locale/'

  const downloadPath = path.join(__dirname, 'locale')

  await Promise.all(
    locales.map((name) => {
      return download(`${unpkgUrl}${name}.js`, downloadPath)
    })
  )

  const windIntlMessagesPath = path.join(__dirname, 'windIntlMessages')
  locales.forEach((name) => {
    const msgObj = require(`./locale/${name}`)
    const result = {}
    visitor(msgObj, '@wind_v2.base', result)
    fs.ensureDirSync(windIntlMessagesPath)
    fs.writeJSONSync(path.join(windIntlMessagesPath, name + '.json'), result, {
      spaces: 2
    })
  })
})()

function visitor(obj, currentPath, result) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'string') {
      const msgKey = (() => {
        if (!currentPath) return key
        return `${currentPath}.${key}`
      })()
      if (ignoreKeys.includes(msgKey)) return
      result[msgKey] = value
    }
  })
  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === 'object') {
      const msgKey = (() => {
        if (!currentPath) return key
        return `${currentPath}.${key}`
      })()
      visitor(value, msgKey, result)
    }
  })
}
