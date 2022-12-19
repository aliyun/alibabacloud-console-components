import { createContext } from 'react'
import { IDataFieldsProps } from './DataFields'

export default createContext<IDataFieldsProps['dataSource']>({})
