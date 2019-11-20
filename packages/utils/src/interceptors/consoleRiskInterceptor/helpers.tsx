import React from 'react'
import { Dialog } from '@alicloud/console-components'
import messages from './messages'


function gotoSetVerificationMethod(verifyUrl) {
  window.open(verifyUrl.bindMobileHelp, '_blank')
}

function confirmSettingFinish(verifyMessages, verifyUrl) {
  Dialog.confirm({
    title: verifyMessages.setTitle,
    content: verifyMessages.doneTip,
    locale: {
      ok: verifyMessages.doneSet,
      cancel: verifyMessages.gotProblem,
    },
    onCancel: () => {
      gotoSetVerificationMethod(verifyUrl)
    },
    needWrapper: false,
  })
}

export function guideToVerificationMethodSetting(verifyType, risk) {
  const { url: verifyUrl } = risk
  const verifyMessages = {
    ...messages[verifyType],
    ...messages.others,
  }
  Dialog.confirm({
    title: verifyMessages.setTitle,
    onOk: () => {
      gotoSetVerificationMethod(verifyUrl)
      confirmSettingFinish(verifyMessages, verifyUrl)
    },
    content: <div>{verifyMessages.setTip}</div>,
    // @ts-ignore
    locale: {
      ok: verifyMessages.goSet,
    },
    footerActions: ['ok'],
    needWrapper: false,
  })
}

export function guideToVerificationDetailSetting(verifyType, risk) {
  const { url: verifyUrl } = risk
  const verifyMessages = {
    ...messages[verifyType],
    ...messages.others,
  }
  Dialog.confirm({
    title: verifyMessages.title,
    content: verifyMessages.bindDescription,
    onOk: () => {
      gotoSetVerificationMethod(verifyUrl)
      confirmSettingFinish(verifyMessages, verifyUrl)
    },
    // @ts-ignore
    locale: {
      ok: verifyMessages.goSet,
    },
    footerActions: ['ok'],
    needWrapper: false,
  })
}