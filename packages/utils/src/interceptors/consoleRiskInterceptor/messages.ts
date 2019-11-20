import { getLocale } from '../../utils'

const locale = getLocale() || 'en-US'
/* eslint-disable max-len */
const messages = {
  'en-US': {
    sms: {
      title: 'SMS Verification',
      detailDescription: 'Linked Phone',
      changeDescription: 'Change Linked Phone',
      bindDescription: 'To protect the security of your account, please set up your phone number for SMS verification',
    },
    email: {
      title: 'Email Verification',
      detailDescription: 'Linked Email',
      changeDescription: 'Change Linked Email',
      bindDescription: 'To protect the security of your account, please set up your email for Email verification',
    },
    ga: {
      title: 'MFA Verification',
      detailDescription: 'Virtual MFA Device Verification',
      changeDescription: 'Unlink MFA',
    },
    others: {
      setTitle: 'Verification Method Setup',
      setTip: 'No Verification method detected! To protect the security of your account, please set up a verification method.',
      goSet: 'Set Now',
      doneTip: 'Complete verification in the new window.',
      doneSet: 'The changes have been saved.',
      gotProblem: 'Encounter problems',
      settingLabel: 'Verification Code',
      codeInvalid: 'The verification code is incorrect. Try again.',
      reSend: 'Resend in {s} seconds',
      sendCode: 'Get Verification Code',
    },
  },

  // 日文文案
  'ja-JP': {
    sms: {
      title: 'SMS 認証',
      detailDescription: 'リンクされた電話',
      changeDescription: 'リンクされた電話の変更',
      bindDescription: 'アカウントのセキュリティを保護するため、SMS 認証用の電話番号を設定してください',
    },
    email: {
      title: '電子メール認証',
      detailDescription: 'リンクされた電子メール',
      changeDescription: 'リンクされた電子メールの変更',
      bindDescription: 'アカウントのセキュリティを保護するため、電子メール認証用の電子メールを設定してください',
    },
    ga: {
      title: 'MFA 認証',
      detailDescription: '仮想 MFA デバイス認証',
      changeDescription: 'MFA のリンクの解除',
    },
    others: {
      setTitle: '認証方法の設定',
      setTip: '認証方法が検出されませんでした。アカウントのセキュリティを保護するため、認証方法を設定してください。',
      goSet: '今すぐ設定',
      doneTip: '新しいウィンドウで認証を完了してください。',
      doneSet: '変更が保存されました。',
      gotProblem: '問題の発生',
      settingLabel: '認証コード',
      codeInvalid: '認証コードが間違っています。再試行してください。',
      reSend: '{s} 秒後に再送信',
      sendCode: '認証コードの取得',
    },
  },

  // 中文文案
  'zh-CN': {
    sms: {
      title: '手机验证',
      detailDescription: '您绑定的手机',
      changeDescription: '更换手机',
      bindDescription: '未检测到手机号码,为了保障您的账户安全，请先设置手机绑定。',
    },
    email: {
      title: '邮箱验证',
      detailDescription: '您绑定的邮箱',
      changeDescription: '更换邮箱',
      bindDescription: '未检测到邮箱，为了保障您的账户安全，请先设置邮箱绑定。',
    },
    ga: {
      title: 'MFA验证',
      detailDescription: '验证虚拟MFA设备',
      changeDescription: '解除MFA绑定',
    },
    others: {
      setTitle: '设置验证方式',
      setTip: '系统没有检测到您的验证方式!为了保障您的账户安全，请先设置验证方式。',
      goSet: '前往设置',
      doneTip: '请在新窗口中完成验证方式的设置',
      doneSet: '完成设置',
      gotProblem: '遇到问题',
      settingLabel: '校验码',
      codeInvalid: '校验码错误,请重新输入',
      reSend: '{s} 秒后重发',
      sendCode: '点击获取',
    },
  },

  // 繁体中文
  'zh-HK': {
    sms: {
      title: '手機驗證',
      detailDescription: '您綁定的手機',
      changeDescription: '更換手機',
      bindDescription: '未檢測到手機號碼,為了保障您的賬戶安全，請先設定手機綁定。',
    },
    email: {
      title: '郵箱驗證',
      detailDescription: '您綁定的郵箱',
      changeDescription: '更換郵箱',
      bindDescription: '未檢測到郵箱，為了保障您的賬戶安全，請先設定郵箱綁定。',
    },
    ga: {
      title: 'MFA驗證',
      detailDescription: '驗證虛擬MFA裝置',
      changeDescription: '解除MFA綁定',
    },
    others: {
      setTitle: '設定驗證方式',
      setTip: '系統沒有檢測到您的驗證方式!為了保障您的賬戶安全，請先設定驗證方式。',
      goSet: '前往設定',
      doneTip: '請在新視窗中完成驗證方式的設定',
      doneSet: '完成設定',
      gotProblem: '遇到問題',
      settingLabel: '校驗碼',
      codeInvalid: '校驗碼錯誤,請重新輸入',
      reSend: '{s} 秒後重發',
      sendCode: '點擊獲取',
    },
  },
}


export default (messages[locale] || messages['en-US'])