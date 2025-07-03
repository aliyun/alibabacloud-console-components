import React from 'react';
import isFunction from 'lodash/isFunction';
import { wrapDisplayName } from 'recompose';
import Context from './Context';
import {
  Mode,
  ISelectionProps,
  IMapStateToPropsFuncParams,
  IUpdaterFunc,
} from './index';
import { ITableProps } from '../layout';

interface IMapStateToProps {
  (state: IMapStateToPropsFuncParams): ISelectionProps &
  ITableProps['rowSelection']
}

interface IMapUpdateToProps {
  (update: (updater: IUpdaterFunc) => void): void
}

const getMappedProps = (
  mapper: IMapStateToProps | IMapUpdateToProps,
  mapperArgs: any,
): any => (isFunction(mapper) ? mapper(mapperArgs) : {});

const connect = (
  mapStateToProps: IMapStateToProps,
  mapUpdateToProps: IMapUpdateToProps,
) => (
  WrappedComponent: React.ComponentType<
  ISelectionProps & ITableProps['rowSelection']
  >,
) => {
  const Connect: React.FC<ISelectionProps & ITableProps['rowSelection']> = (
    props,
  ) => {
    const ownerProps = props;
    return (
      <Context.Consumer>
        {(contextValue: {
          selectedRowKeys?: any[]
          rawRowSelection?: ITableProps['rowSelection']
          dataSource?: ITableProps['dataSource']
          primaryKey?: ITableProps['primaryKey']
          mode?: Mode
          update?: (updater: IUpdaterFunc) => void
        }) => {
          const { update, ...restContextValue } = contextValue;
          const stateProps = getMappedProps(mapStateToProps, restContextValue);
          const updateProps = getMappedProps(mapUpdateToProps, update);
          const newProps = {
            ...ownerProps,
            ...stateProps,
            ...updateProps,
          };
          return <WrappedComponent {...newProps} />;
        }}
      </Context.Consumer>
    );
  };
  Connect.displayName = wrapDisplayName(WrappedComponent, 'connect');
  return Connect;
};

export default connect;
