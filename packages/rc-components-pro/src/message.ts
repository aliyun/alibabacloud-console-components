import * as Cookie from 'js-cookie';

const isSSR = typeof document === 'undefined';

const messages = {
  'en': {
    title: 'Request to unsubscribe',
    content: 'This product does not support self-service unsubscribe, you need to submit a ticket to unsubscribe. The process is as follows',
    step1: 'Submit Ticket',
    step2: 'Manual Review',
    step3: 'Generate Unsubscribe Ticket',
    step4: 'Complete Unsubscribe',
    action: 'Submit an unsubscribe ticket',
    noHint: 'Don\'t prompt next time'
  },
  'zh': {
    title: '申请退订',
    content: '本产品不支持自助退订，需提交工单退订。流程如下',
    step1: '提交工单',
    step2: '人工审核',
    step3: '生成退订订单',
    step4: '完成退订',
    action: '提交退订工单',
    noHint: '下次不再提示'
  }
}

let lang = isSSR ? 'en' : Cookie.get('aliyun_lang');

if (lang !== 'zh') {
  lang = 'en';
}

// @ts-ignore
export default messages[lang];