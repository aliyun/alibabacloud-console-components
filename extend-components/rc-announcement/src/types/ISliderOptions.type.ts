
/**
 * 轮播属性
 * @public
 */
export interface ISliderOptions {
  /**
   * 是否自动播放
   * @defaultValue `true`
   */
  autoplay?: boolean
  /**
   * 自动播放速度
   * @defaultValue `3000`
   */
  autoplaySpeed?: number
  /**
   * 切换速度
   * @defaultValue `600`
   */
  speed?: number
  /**
   * 轮播切换的回调函数
   */
  onChange?: (index: number) => void
  /**
   * 轮播切换动画
   * @defaultValue `slide`
   */
  animation?: 'fade' | 'slide'
}