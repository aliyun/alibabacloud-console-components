const date = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

const time = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
}

const dateTime = {
  ...date,
  ...time,
}

const dateTimeWithTimeZone = {
  ...dateTime,
  timeZoneName: 'long',
}

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
