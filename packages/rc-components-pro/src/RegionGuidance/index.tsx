import React from 'react';
import { Menu, Icon, Dropdown } from '@alicloud/console-components';

type RegionList = {
  id: string;
  name?: string;
  count?: number;
}[];

export interface IEmptyProps {
  currentRegion: string;
  currentRegionName?: string;
  regionList?: RegionList;
  onRegionClick?: (regionId: string) =>void
  globalSearchAction?: boolean;
  children?: React.ReactChild | React.ReactChildren;
}

const getRegionName = (regionId: string) => {
  // @ts-ignore
  const REGIONS = window?.ALIYUN_CONSOLE_CONFIG?.REGIONS || []
  const region = REGIONS.find((t: any) => {
    return t.regionId === regionId
  });

  return region?.name || regionId;
}

const S_Anchor = {color: 'var(--color-link-1, #0064C8)', cursor: 'pointer'};

const FlattenRegionList = ({regionList = [], onRegionClick}: IEmptyProps) => {
  const list = regionList.map((region, index) => (
    <span key={region.id}>
      <a style={S_Anchor} onClick={(value) => {onRegionClick && onRegionClick(region.id)}}> {region.name || getRegionName(region.id)}</a>
      <span
        style={{
          borderRadius: 2,
          backgroundColor: '#EFEFEF',
          padding: "2px 4px"
      }}>
        {region.count || 0}
      </span>{ index !== regionList.length - 1 ? '、' : ''}
    </span>));
  return <>{list}</>
}

const DropDownRegionList = ({regionList = [], onRegionClick}: IEmptyProps) => {
  const [iconType, setIconType] = React.useState('button_down');
  return (
    <Dropdown
      trigger={<a style={S_Anchor}> 3 个<Icon type='button_down'/></a>}
      triggerType={['click', 'hover']}
      afterOpen={() => setIconType('button_up')}
      afterClose={() => setIconType('button_down')}
    >
      <Menu onItemClick={(value) => {onRegionClick && onRegionClick(value)}}>
        { regionList.map(region => (
            <Menu.Item key={region.id}>
              <span style={{width: ""}}>
                {region.name || getRegionName(region.id)}
                <span
                  style={{
                    marginLeft: 12,
                    borderRadius: 2,
                    backgroundColor: '#EFEFEF',
                    padding: "0px 4px",
                    float: "right",
                    lineHeight: '18px',
                    height: 18,
                    marginTop: 8
                }}>
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

const RegionList = (props: IEmptyProps) => {
  const { regionList = []} = props;
  if (regionList.length < 3) {
    return <FlattenRegionList {...props}/>;
  }
  return <DropDownRegionList {...props}/>;
}

const EmptyContent = (props: IEmptyProps) => {
  const { currentRegion, currentRegionName, children, regionList, globalSearchAction } = props;
  return (<div style={{color: '#333', lineHeight: '20px'}}>
    { children ? children : <div>当前地域 {currentRegionName || getRegionName(currentRegion)}暂时无数据</div>}
    
    { regionList?.length ? <div>您可以切换至以下有资源的地域<RegionList {...props}/> </div> : null}

    { globalSearchAction
      ? (<div>
        <a type="primary" href="#">
          <Icon type="help" style={{ verticalAlign: 'bottom' }} size={"xs"}/> 没有找到想要的实例？
        </a>
      </div>)
      : null
    }
  </div>);
}

export default EmptyContent;
