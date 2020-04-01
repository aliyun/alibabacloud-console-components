export const defaultMessages = {
  ok: '确定',
  cancel: '取消',
  edit: '编辑',
  no_empty: '不能为空',
  tip_invalid_format: '格式不合法',
  tip_2_char_required: '最少需要 2 个字符',
  text_validation_customer:
    '长度为{min}-{max}个字符，以大小字母或中文开头，可包含数字，"_"或"-"',
}

const enMessages = {
  ok: 'OK',
  cancel: 'Cancel',
  edit: 'Edit',
  no_empty: 'Required',
  tip_invalid_format: 'Invalid Format',
  tip_2_char_required: 'Enter 2 characters at least.',
  text_validation_customer:
    'The value must contain {min}-{max} characters and start with an English or Chinese character. It can contain numbers, underscores (_), and hyphens (-).',
}

export default {
  zh: defaultMessages,
  'zh-cn': defaultMessages,
  'zh-CN': defaultMessages,
  en: enMessages,
  'en-US': enMessages,
  'en-us': enMessages,
}
