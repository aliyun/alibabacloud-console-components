import React from 'react';
import { Menu, Icon, Dropdown, Message } from '@alicloud/console-components';
import { withRcIntl } from '@alicloud/console-components-intl-core'
import './index.less';
import defaultMessages from './message';
import LoggerProvider from '../Provider/LoggerProvider';

type RegionList = {
  id: string;
  name?: string;
  count?: number;
}[];

export interface IRegionGuidanceProps {
  currentRegion: string;
  currentRegionName?: string;
  regionList?: RegionList;
  onRegionClick?: (regionId: string) =>void
  globalSearchAction?: boolean;
  children?: React.ReactChild | React.ReactChildren;
  type?: 'message' | 'default';
  intl?: any;
}

const getRegionName = (regionId: string) => {
  // @ts-ignore
  const REGIONS = window?.ALIYUN_CONSOLE_CONFIG?.REGIONS || []
  const region = REGIONS.find((t: any) => {
    return t.regionId === regionId
  });

  return region?.name || regionId;
}

const FlattenRegionList = ({regionList = [], onRegionClick}: IRegionGuidanceProps) => {
  const list = regionList.map((region, index) => (
    <span key={region.id}>
      <a
        className="xconsole-rc-region-anchor"
        onClick={(value) => {onRegionClick && onRegionClick(region.id)}}
      >
          {region.name || getRegionName(region.id)}
      </a>
      <span className="xconsole-rc-region-count">
        {region.count || 0}
      </span>{ index !== regionList.length - 1 ? '、' : ''}
    </span>));
  return <>{list}</>
}

const DropDownRegionList = ({regionList = [], onRegionClick, intl}: IRegionGuidanceProps) => {
  const [iconType, setIconType] = React.useState('caret-down');
  return (
    <Dropdown
      trigger={<a className="xconsole-rc-region-anchor"> {regionList.length} {intl('unit')} <Icon type={iconType} size="xs"/></a>}
      triggerType={['click', 'hover']}
      beforeOpen={() => setIconType('caret-up')}
      beforeClose={() => setIconType('caret-down')}
    >
      <Menu style={{maxHeight: 320, overflowY: 'scroll'}} onItemClick={(value) => {onRegionClick && onRegionClick(value)}}>
        { regionList.map(region => (
            <Menu.Item key={region.id}>
              <span>
                {region.name || getRegionName(region.id)}
                <span className="xconsole-rc-region-item-count">
                  {region.count || 0}
                </span>
              </span>
            </Menu.Item>
          ))
        }
      </Menu>
    </Dropdown>
  )
}

const RegionList = (props: IRegionGuidanceProps) => {
  const { regionList = []} = props;
  if (regionList.length < 3) {
    return <FlattenRegionList {...props}/>;
  }
  return <DropDownRegionList {...props}/>;
}

const RegionGuidance = (props: IRegionGuidanceProps) => {
  const {
    currentRegion,
    currentRegionName,
    children,
    regionList,
    globalSearchAction,
    type,
    intl
  } = props;

  if (type === 'message') {
    return (
      <Message
        type='notice'
        size="medium"
        title={(
          <div className="xconsole-rc-region-message-content">
            <span>{intl('nodata', {value: currentRegionName || getRegionName(currentRegion)})}{regionList?.length? intl('comma'): intl('period')}</span>
            {regionList?.length ? <span>{intl('switch')} <RegionList {...props}/> </span> : null}
          </div>
        )}
      />
    )
  }

  return (
    <div className="xconsole-rc-region-guidance">
      <LoggerProvider regionId={currentRegion} componentName="RegionGuidance" />
      { children ? children : <div>{intl('nodata', {value: currentRegionName || getRegionName(currentRegion)})}</div>}
      
      { regionList?.length ? <div>{intl('switch')} <RegionList {...props}/> </div> : null}

      { globalSearchAction
        ? (<div>
          <a className="xconsole-rc-region-anchor">
            <Icon type="help" style={{ verticalAlign: 'bottom' }} size={"xs"}/> {intl('global_search_help')}
          </a>
        </div>)
        : null
      }
    </div>
  );
}

export const RegionGuidanceWithIntl = withRcIntl({
  componentName: 'RegionGuidance',
  defaultMessages,
  warningIfNoMessageFromCtx: false,
})(RegionGuidance);

export default React.forwardRef<{}, Partial<IRegionGuidanceProps>>((props, ref) => (
  // @ts-ignore
  <RegionGuidanceWithIntl {...props} ref={ref} />
));
