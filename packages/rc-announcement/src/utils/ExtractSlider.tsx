import { pick } from 'lodash'
import { ISliderOptions } from '../RcMessage'

const extractSliderOptions = (
  sliderOptions: ISliderOptions = {}
): ISliderOptions => {
  return (
    pick(sliderOptions, [
      'autoplay',
      'autoplaySpeed',
      'speed',
      'onChange',
      'animation',
    ]) || {}
  )
}

export default extractSliderOptions
