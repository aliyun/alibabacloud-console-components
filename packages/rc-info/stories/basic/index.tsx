import React from 'react'
import { Button } from '@alicloud/console-components'
import Info from '@alicloud/console-components-info'

const BasicDemo: React.FC<{}> = () => {
  return (
    <>
      <Info>
        <Info.Title value="信息区块1" extra="副标题"></Info.Title>
        <Info.Content>
          混乱不是深渊。混乱是阶梯。很多人想往上爬
          却失败了，且永无机会再试。失败毁了他们。有人本有机会攀爬，但他们拒绝了。他们守着王国不放，守着诸神，守着爱情。尽皆幻想。唯有阶梯才是真实的。努力攀爬才是一切。
        </Info.Content>
      </Info>
      <Info title="信息区块2" extra="Little Finger">
        混乱不是深渊。混乱是阶梯。很多人想往上爬
        却失败了，且永无机会再试。失败毁了他们。有人本有机会攀爬，但他们拒绝了。他们守着王国不放，守着诸神，守着爱情。尽皆幻想。唯有阶梯才是真实的。努力攀爬才是一切。
        <div>
          <Button type="primary">Game of Thrones</Button>
        </div>
      </Info>
    </>
  )
}

export default BasicDemo
