/**
 * @title 场景2
 */

import React from "react";
import { Table } from "@alicloud/console-components";
import { RegionGuidance } from "@alicloud/console-components-pro";

// @ts-ignore
window.ALIYUN_CONSOLE_CONFIG = {
   REGIONS: [{"name":"华北2（北京）","physicalList":[{"id":"cn-beijing-btc-a01"}],"regionId":"cn-beijing","zoneList":[{"name":"北京 可用区F","zoneId":"cn-beijing-f"},{"name":"北京 可用区 idca","zoneId":"cn-beijing-idca-cb"},{"name":"北京 可用区E","zoneId":"cn-beijing-e"},{"name":"北京 可用区H","zoneId":"cn-beijing-h"},{"name":"北京 可用区G","zoneId":"cn-beijing-g"},{"name":"北京 可用区B","zoneId":"cn-beijing-b"},{"name":"北京 可用区A","zoneId":"cn-beijing-a"},{"name":"北京 可用区D","zoneId":"cn-beijing-d"},{"name":"北京 可用区C","zoneId":"cn-beijing-c"},{"name":"北京 可用区J","zoneId":"cn-beijing-j"},{"name":"北京 可用区I","zoneId":"cn-beijing-i"},{"name":"北京 可用区 L","zoneId":"cn-beijing-l"},{"name":"北京 可用区K","zoneId":"cn-beijing-k"}]},{"name":"华北6（乌兰察布）","physicalList":[{"id":"cn-wulanchabu"}],"regionId":"cn-wulanchabu","zoneList":[{"name":"乌兰察布 可用区B","zoneId":"cn-wulanchabu-b"},{"name":"乌兰察布 可用区A","zoneId":"cn-wulanchabu-a"},{"name":"乌兰察布 可用区C","zoneId":"cn-wulanchabu-c"}]},{"name":"印度（孟买）","physicalList":[{"id":"ap-south-1"}],"regionId":"ap-south-1","zoneList":[{"name":"孟买 可用区B","zoneId":"ap-south-1b"},{"name":"孟买 可用区A","zoneId":"ap-south-1a"}]},{"name":"阿里政务云","physicalList":[{"id":"cn-haidian-cm12-c01"}],"regionId":"cn-haidian-cm12-c01","zoneList":[{"name":"阿里云政务云可用区A","zoneId":"cn-haidian-a"}]},{"name":"华北 2 阿里政务云1","physicalList":[{"id":"cn-north-2-gov-1"}],"regionId":"cn-north-2-gov-1","zoneList":[{"name":"华北2 阿里政务云1 可用区D","zoneId":"cn-north-2-gov-1d"},{"name":"华北2 阿里政务云1 可用区C","zoneId":"cn-north-2-gov-1c"},{"name":"华北 2 阿里政务云1 可用区B","zoneId":"cn-north-2-gov-1b"},{"name":"华北 2 阿里政务云1 可用区A","zoneId":"cn-north-2-gov-1a"}]},{"name":"华东2 网商云","physicalList":[{"id":"cn-shanghai-mybk"}],"regionId":"cn-shanghai-mybk","zoneList":[{"name":"华东2 网商云 可用区Z","zoneId":"cn-shanghai-mybk-z"},{"name":"华东2 网商云 可用区K","zoneId":"cn-shanghai-mybk-k"}]},{"name":"华北1（青岛）","physicalList":[{"id":"cn-qingdao-cm5-a01"}],"regionId":"cn-qingdao","zoneList":[{"name":"青岛可用区B","zoneId":"cn-qingdao-finance-b"},{"name":"青岛 可用区B","zoneId":"cn-qingdao-b"},{"name":"青岛 可用区C","zoneId":"cn-qingdao-c"}]},{"name":"华东2（上海）","physicalList":[{"id":"cn-shanghai-eu13-a01"}],"regionId":"cn-shanghai","zoneList":[{"name":"上海 可用区H","zoneId":"cn-shanghai-h"},{"name":"上海 可用区 J","zoneId":"cn-shanghai-j"},{"name":"上海 可用区L","zoneId":"cn-shanghai-l"},{"name":"上海 可用区M","zoneId":"cn-shanghai-m"},{"name":"上海 可用区 N","zoneId":"cn-shanghai-n"},{"name":"上海 可用区A","zoneId":"cn-shanghai-a"},{"name":"上海 可用区B","zoneId":"cn-shanghai-b"},{"name":"上海 可用区C","zoneId":"cn-shanghai-c"},{"name":"上海 可用区D","zoneId":"cn-shanghai-d"},{"name":"上海 可用区E","zoneId":"cn-shanghai-e"},{"name":"上海 可用区F","zoneId":"cn-shanghai-f"},{"name":"上海 蚂蚁可用区K","zoneId":"cn-shanghai-k-alipay"},{"name":"上海 可用区G","zoneId":"cn-shanghai-g"},{"name":"上海 云展可用区Z","zoneId":"cn-shanghai-z-smarthosting"}]},{"name":"华东 2 金融云","physicalList":[{"id":"cn-shanghai-finance-1"}],"regionId":"cn-shanghai-finance-1","zoneList":[{"name":"华东2 金融云 可用区Z","zoneId":"cn-shanghai-finance-1z"},{"name":"华东2 金融云 可用区K","zoneId":"cn-shanghai-finance-1k"},{"name":"华东 2 金融云可用区 F","zoneId":"cn-shanghai-finance-1f"},{"name":"华东2 金融云 可用区G","zoneId":"cn-shanghai-finance-1g"},{"name":"华东 2金融云 可用区B","zoneId":"cn-shanghai-finance-1b"},{"name":"华东 2金融云 可用区A","zoneId":"cn-shanghai-finance-1a"}]},{"name":"中国（香港）","physicalList":[{"id":"cn-hongkong-am4-c04"}],"regionId":"cn-hongkong","zoneList":[{"name":"香港 可用区D","zoneId":"cn-hongkong-d"},{"name":"香港 可用区C","zoneId":"cn-hongkong-c"},{"name":"香港 可用区B","zoneId":"cn-hongkong-b"}]},{"name":"华南2（河源）","physicalList":[{"id":"cn-heyuan"}],"regionId":"cn-heyuan","zoneList":[{"name":"河源 可用区B","zoneId":"cn-heyuan-b"},{"name":"河源 可用区A","zoneId":"cn-heyuan-a"},{"name":"河源 可用区 huidu","zoneId":"cn-heyuan-huidu-cb"}]},{"name":"张北SPE","physicalList":[{"id":"cn-zhangjiakou-spe"}],"regionId":"cn-zhangjiakou-spe","zoneList":[{"name":"集团云化张家口SPE可用区A","zoneId":"cn-zhangjiakou-spe-a"}]},{"name":"德国（法兰克福）","physicalList":[{"id":"eu-central-1"}],"regionId":"eu-central-1","zoneList":[{"name":"法兰克福 可用区A","zoneId":"eu-central-1a"},{"name":"法兰克福 可用区B","zoneId":"eu-central-1b"}]},{"name":"华北3（张家口）","physicalList":[{"id":"cn-zhangjiakou"}],"regionId":"cn-zhangjiakou","zoneList":[{"name":"张家口 可用区D","zoneId":"cn-zhangjiakou-d"},{"name":"张家口 可用区A","zoneId":"cn-zhangjiakou-a"},{"name":"张家口 可用区C","zoneId":"cn-zhangjiakou-c"},{"name":"张家口 可用区B","zoneId":"cn-zhangjiakou-b"}]},{"name":"美国（硅谷）","physicalList":[{"id":"us-west-ot7-a01"}],"regionId":"us-west-1","zoneList":[{"name":"硅谷 可用区A","zoneId":"us-west-1a"},{"name":"硅谷 可用区B","zoneId":"us-west-1b"}]},{"name":"cn-hangzhou-onebox-nebula","physicalList":[{"id":"cn-hangzhou-onebox-nebula"}],"regionId":"cn-hangzhou-onebox-nebula","zoneList":[{"name":"cn-hangzhou-onebox-nebula-b","zoneId":"cn-hangzhou-onebox-nebula-b"},{"name":"cn-hangzhou-onebox-nebula-a","zoneId":"cn-hangzhou-onebox-nebula-a"}]},{"name":"华南1（深圳）","physicalList":[{"id":"cn-shenzhen-st3-a01"}],"regionId":"cn-shenzhen","zoneList":[{"name":"深圳 可用区A","zoneId":"cn-shenzhen-a"},{"name":"深圳 可用区 E","zoneId":"cn-shenzhen-e"},{"name":"深圳 可用区D","zoneId":"cn-shenzhen-d"},{"name":"深圳 可用区C","zoneId":"cn-shenzhen-c"},{"name":"深圳 可用区B","zoneId":"cn-shenzhen-b"},{"name":"深圳 可用区 F","zoneId":"cn-shenzhen-f"}]},{"name":"越南（胡志明）蚂蚁云","physicalList":[{"id":"ap-hochiminh-ant"}],"regionId":"ap-hochiminh-ant","zoneList":[{"name":"越南（胡志明）蚂蚁云可用区A","zoneId":"ap-hochiminh-ant-a"}]},{"name":"华东5（南京-本地地域）","physicalList":[{"id":"cn-nanjing"}],"regionId":"cn-nanjing","zoneList":[{"name":"南京 可用区A","zoneId":"cn-nanjing-a"}]},{"name":"英国（伦敦）","physicalList":[{"id":"eu-west-1"}],"regionId":"eu-west-1","zoneList":[{"name":"伦敦 可用区B","zoneId":"eu-west-1b"},{"name":"伦敦 可用区A","zoneId":"eu-west-1a"}]},{"name":"cn-hangzhou-test-307","physicalList":[{"id":"cn-hangzhou-test-307"}],"regionId":"cn-hangzhou-test-307","zoneList":[{"name":"cn-hangzhou-test-307-a","zoneId":"cn-hangzhou-test-307-a"}]},{"name":"华北2 金融云","physicalList":[{"id":"cn-beijing-finance-1"}],"regionId":"cn-beijing-finance-1","zoneList":[{"name":"华北2 金融云 可用区L","zoneId":"cn-beijing-finance-1l"},{"name":"华北2 金融云 可用区K","zoneId":"cn-beijing-finance-1k"}]},{"name":"华南 1 金融云","physicalList":[{"id":"cn-shenzhen-finance-1"}],"regionId":"cn-shenzhen-finance-1","zoneList":[{"name":"深圳金融可用区A","zoneId":"cn-shenzhen-finance-1a"},{"name":"深圳金融可用区B","zoneId":"cn-shenzhen-finance-1b"},{"name":"华南1 金融云 可用区D","zoneId":"cn-shenzhen-finance-1d"},{"name":"华南1 金融云 可用区E","zoneId":"cn-shenzhen-finance-1e"}]},{"name":"日本（东京）","physicalList":[{"id":"ap-northeast-1"}],"regionId":"ap-northeast-1","zoneList":[{"name":"东京 可用区A","zoneId":"ap-northeast-1a"},{"name":"东京 可用区B","zoneId":"ap-northeast-1b"}]},{"name":"阿联酋（迪拜）","physicalList":[{"id":"me-east-1"}],"regionId":"me-east-1","zoneList":[{"name":"迪拜 可用区A","zoneId":"me-east-1a"}]},{"name":"呼和浩特星云","physicalList":[{"id":"cn-huhehaote-nebula-1"}],"regionId":"cn-huhehaote-nebula-1","zoneList":[{"name":"呼和浩特星云 可用区A","zoneId":"cn-huhehaote-nebula-1a"}]},{"name":"西南1（成都）","physicalList":[{"id":"cn-chengdu"}],"regionId":"cn-chengdu","zoneList":[{"name":"成都 蚂蚁可用区Z","zoneId":"cn-chengdu-z-alipay"},{"name":"成都 可用区A","zoneId":"cn-chengdu-a"},{"name":"成都 可用区B","zoneId":"cn-chengdu-b"},{"name":"成都 蚂蚁可用区Y","zoneId":"cn-chengdu-y-alipay"}]},{"name":"cn-hangzhou-test-306","physicalList":[{"id":"cn-hangzhou-test-306"}],"regionId":"cn-hangzhou-test-306","zoneList":[{"name":"et2sqa","zoneId":"et2sqa"},{"name":"cn-hangzhou-test-306-ipv6","zoneId":"cn-hangzhou-test-306-ipv6"},{"name":"cn-hangzhou-test-306-izone-1","zoneId":"cn-hangzhou-test-306-izone-1"}]},{"name":"弹内生产环境-上海","physicalList":[{"id":"cn-shanghai-et2-b01"}],"regionId":"cn-shanghai-et2-b01","zoneList":[{"name":"上海可用区A","zoneId":"cn-shanghai-inner-a"}]},{"name":"华南3（广州）","physicalList":[{"id":"cn-guangzhou"}],"regionId":"cn-guangzhou","zoneList":[{"name":"广州 可用区A","zoneId":"cn-guangzhou-a"},{"name":"广州 可用区B","zoneId":"cn-guangzhou-b"}]},{"name":"宁波移动云展专区（宁波）","physicalList":[{"id":"cn-ningbo-smt-nbyd"}],"regionId":"cn-ningbo-smt-nbyd","zoneList":[{"name":"宁波移动云展 可用区A","zoneId":"cn-ningbo-smt-nbyd-a"}]},{"name":"新加坡","physicalList":[{"id":"ap-southeast-os30-a01"}],"regionId":"ap-southeast-1","zoneList":[{"name":"新加坡 可用区A","zoneId":"ap-southeast-1a"},{"name":"新加坡 可用区 lzdvn","zoneId":"ap-southeast-1-lzdvn-cb"},{"name":"新加坡 可用区C","zoneId":"ap-southeast-1c"},{"name":"新加坡 可用区B","zoneId":"ap-southeast-1b"}]},{"name":"澳大利亚（悉尼）","physicalList":[{"id":"ap-southeast-2"}],"regionId":"ap-southeast-2","zoneList":[{"name":"悉尼 可用区B","zoneId":"ap-southeast-2b"},{"name":"悉尼 可用区A","zoneId":"ap-southeast-2a"}]},{"name":"马来西亚（吉隆坡）","physicalList":[{"id":"ap-southeast-3"}],"regionId":"ap-southeast-3","zoneList":[{"name":"吉隆坡 可用区A","zoneId":"ap-southeast-3a"},{"name":"吉隆坡 可用区B","zoneId":"ap-southeast-3b"}]},{"name":"华北5（呼和浩特）","physicalList":[{"id":"cn-huhehaote"}],"regionId":"cn-huhehaote","zoneList":[{"name":"呼和浩特 可用区A","zoneId":"cn-huhehaote-a"},{"name":"呼和浩特 可用区B","zoneId":"cn-huhehaote-b"}]},{"name":"印度尼西亚（雅加达）","physicalList":[{"id":"ap-southeast-5"}],"regionId":"ap-southeast-5","zoneList":[{"name":"雅加达 可用区A","zoneId":"ap-southeast-5a"},{"name":"雅加达 可用区C","zoneId":"ap-southeast-5c"},{"name":"雅加达 可用区B","zoneId":"ap-southeast-5b"}]},{"name":"美国（弗吉尼亚）","physicalList":[{"id":"us-east-1"}],"regionId":"us-east-1","zoneList":[{"name":"弗吉尼亚 可用区A","zoneId":"us-east-1a"},{"name":"弗吉尼亚 可用区B","zoneId":"us-east-1b"}]},{"name":"福建","physicalList":[{"id":"cn-fujian-ck-c02"}],"regionId":"cn-fujian","zoneList":[{"name":"福建可用区A","zoneId":"cn-fujian-a"}]},{"name":"成都云展POC","physicalList":[{"id":"cn-chengdu-smarthosting-1"}],"regionId":"cn-chengdu-smarthosting-1","zoneList":[{"name":"成都云展POC 可用区A","zoneId":"cn-chengdu-smarthosting-1a"},{"name":"成都云盒az","zoneId":"cn-chengdu-smarthosting-1-t1-cb"}]},{"name":"菲律宾（马尼拉）","physicalList":[{"id":"ap-southeast-6"}],"regionId":"ap-southeast-6","zoneList":[{"name":"马尼拉 可用区A","zoneId":"ap-southeast-6a"}]},{"name":"华东1（杭州）","physicalList":[{"id":"cn-hangzhou-dg-a01"}],"regionId":"cn-hangzhou","zoneList":[{"name":"华东 1 金融云 可用区 D","zoneId":"cn-hangzhou-finance-d"},{"name":"杭州 可用区B","zoneId":"cn-hangzhou-b"},{"name":"华东1金融云可用区B","zoneId":"cn-hangzhou-finance-b"},{"name":"杭州 可用区D","zoneId":"cn-hangzhou-d"},{"name":"杭州 可用区E","zoneId":"cn-hangzhou-e"},{"name":"杭州 可用区F","zoneId":"cn-hangzhou-f"},{"name":"杭州 可用区G","zoneId":"cn-hangzhou-g"},{"name":"杭州 可用区H","zoneId":"cn-hangzhou-h"},{"name":"杭州 可用区I","zoneId":"cn-hangzhou-i"},{"name":"华东1 金融云 可用区H","zoneId":"cn-hangzhou-finance-h"},{"name":"华东1 金融云 可用区I","zoneId":"cn-hangzhou-finance-i"},{"name":"杭州 可用区J","zoneId":"cn-hangzhou-j"},{"name":"华东1 金融云 可用区J","zoneId":"cn-hangzhou-finance-j"},{"name":"杭州 可用区K","zoneId":"cn-hangzhou-k"},{"name":"华东1 金融云 可用区K","zoneId":"cn-hangzhou-finance-k"}]}],
}
 const Demo1: React.FC<{}> = (props) => {
   const [visible, setVisible] = React.useState(false)
   return (
     <>
        <Table emptyContent={<RegionGuidance currentRegion="cn-hangzhou"/>}>
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={(
            <RegionGuidance
              currentRegion="cn-hangzhou"
              onRegionClick={(value) => alert(value)}
              regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}]}
            />
          )}>
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={
            <RegionGuidance currentRegion="cn-hangzhou" globalSearchAction regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}]}/>
          }
        >
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={(
            <RegionGuidance
              currentRegion="cn-hangzhou"
              globalSearchAction
              onRegionClick={(value) => alert(value)}
              regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}, {id: 'ap-southeast-5', count: 1}]}/>
          )}
        >
          <Table.Column title="实例ID"></Table.Column>
        </Table>

        <div style={{margin: "20px 0px"}}/>

        <Table
          emptyContent={(
            <RegionGuidance
              currentRegion="cn-hangzhou"
              regionList={[{id: 'cn-shanghai', count: 29}, {id: 'cn-beijing', count: 20}, {id: 'ap-southeast-5', count: 1}]}
            >
              <>当前地域下无资源栈，请选择其他地域或 <a href="#">创建资源栈</a></>
            </RegionGuidance>
          )}
        >
          <Table.Column title="实例ID"></Table.Column>
        </Table>
     </>
   )
 };
 
 export default Demo1;
 