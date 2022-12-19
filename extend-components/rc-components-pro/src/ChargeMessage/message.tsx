import Cookie from 'js-cookie';

const isSSR = typeof document === 'undefined';

const messages = {
  'zh': {
    seeMore: '详见',
    billingDoc: '计费文档',
    confirmMessage: '我已知晓以上信息, 并确认开启',
  },
  'en': {
    seeMore: 'For more information, see',
    billingDoc: 'Billing.',
    confirmMessage: 'I understand the above information and want to enable the feature.',
  },
  'ja': {
    seeMore: '詳細については、',
    billingDoc: '「課金」をご参照ください。',
    confirmMessage: '上記の情報を理解し、この機能を有効化します。',
  },
  'zh-TW': {
    seeMore: '詳見',
    billingDoc: '計費文檔',
    confirmMessage: '我已知曉以上資訊, 並確認開啟',
  }
}

let lang = isSSR ? 'en' : Cookie.get('aliyun_lang');

// @ts-ignore
if (!Object.keys(messages).includes(lang)) {
  lang = 'en';
}

// @ts-ignore
export default messages[lang];