import Info from './Info'
import Title from './Title'
import Content from './Content'

/**
 * @public
 */
export type IInfo = typeof Info & {
  Title: typeof Title
  Content: typeof Content
}

/**
 * @public
 */
const ExportedInfo: IInfo = Object.assign(Info, {
  Title,
  Content,
})

export default ExportedInfo

export { Title, Content, Info }
export * from './Info'
export * from './Title'
export * from './Content'
