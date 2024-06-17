import Cookie from 'js-cookie'

const isSSR = typeof document === 'undefined'

const messages = {
  zh: {
    nodata: '您在当前地域 {value} 暂无实例',
    comma: '，',
    period: '',
    switch: '您可以切换至以下有实例的地域',
    switch_suf: '',
    unit: '个',
    global_search_help: '没有找到想要的实例？',
  },
  en: {
    nodata: 'You have no instance available in the selected region {value}',
    comma: ', ',
    period: '',
    switch: 'You can switch to the following regions: ',
    unit: ' Regions',
    global_search_help: 'Cannot find an instance?',
  },
  ja: {
    nodata: '現在のリージョン {value} では結果が見つかりませんでした。',
    comma: ', ',
    period: '',
    switch: '以下のリージョンに切り替えることができます: ',
    unit: ' リージョン',
    global_search_help: 'インスタンスが見つからない場合',
  },
  'zh-TW': {
    nodata: '您在當前地區 {value} 暫時無個體',
    comma: ', ',
    period: '',
    switch: '您可以切換至以下有個體的地區：',
    unit: ' 個',
    global_search_help: '沒有找到想要的執行個體？',
  },
}

let lang = isSSR ? 'en' : Cookie.get('aliyun_lang')

// @ts-ignore
if (!Object.keys(messages).includes(lang)) {
  lang = 'en'
}

// @ts-ignore
export default messages[lang]
