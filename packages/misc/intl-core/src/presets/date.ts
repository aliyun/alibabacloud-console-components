const date = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
} as const

const time = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
} as const

const dateTime = {
  ...date,
  ...time,
} as const

const dateTimeWithTimeZone = {
  ...dateTime,
  timeZoneName: 'long',
} as const

/** @public */
const presets = {
  date,
  time,
  dateTime,
  dateTimeWithTimeZone,
} as const

/**
 * @public
 */
export type IPreset = typeof presets

export default presets
