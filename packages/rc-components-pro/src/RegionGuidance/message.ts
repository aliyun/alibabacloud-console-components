import Cookie from 'js-cookie';

const isSSR = typeof document === 'undefined';

const messages = {
  'zh': {
    nodata: '当前地域 {value} 暂时无数据',
    comma: '，',
    period: '',
    switch: '您可以切换至以下有资源的地域',
    switch_lower: '您可以切换至以下有资源的地域',
    switch_suf: '',
    unit: '个',
    global_search_help: '没有找到想要的实例？'
  },
  'en': {
    nodata: 'No resource are available in the selected region {value}',
    comma: ', ',
    period: '',
    switch: 'You can switch to the following regions with resources: ',
    switch_lower: 'you can switch to the following regions with resources: ',
    unit: ' regions',
    global_search_help: 'No desired resource?'
  }
}

let lang = isSSR ? 'en' : Cookie.get('aliyun_lang');

if (lang !== 'zh') {
  lang = 'en';
}

// @ts-ignore
export default messages[lang];