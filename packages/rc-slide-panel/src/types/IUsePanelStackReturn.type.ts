export interface IUsePanelStackReturn {
  /**
   * 当前展示的面板（栈顶）。<br />
   * 请将它渲染到`<SlidePanelGroup>`中。当你把所有面板都出栈以后，top为undefined。
   */
  top: React.ReactElement
  /**
   * 推入新的面板（入栈）。
   */
  push: (el: React.ReactElement) => void
  /**
   * 从当前面板返回（出栈）。
   */
  pop: () => void
}
