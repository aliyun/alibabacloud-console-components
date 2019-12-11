import React from 'react'
import {
  Form,
  Input,
  Switch,
  Grid,
  Button,
  Icon,
  Balloon,
  Field,
} from '@alicloud/console-components'

const FormItem = Form.Item
const { Row, Col } = Grid

const style = {
  padding: '20px',
  background: '#F7F8FA',
  margin: '20px',
}
const formItemLayout = {
  labelCol: { fixedSpan: 4 },
}
const label = (
  <span>
    name：
    <Balloon
      type="primary"
      trigger={<Icon type="prompt" size="small" />}
      closable={false}
    >
      blablablablablablablabla
    </Balloon>
  </span>
)

const Demo8 = () => {
  const myFiled = Field.useField()
  const { init, getValue } = myFiled
  const labelAlign = getValue('labelAlign') ? 'left' : 'top'
  return (
    <div>
      <h3>Label Position</h3>
      <Switch
        checkedChildren="left"
        unCheckedChildren="top"
        {...init('labelAlign', { initValue: false })}
      />

      <Form style={style}>
        <Row gutter="4">
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label={label}
              required
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Long search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Long search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Long search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Button type="primary" style={{ marginRight: '5px' }}>
              Search
            </Button>
            <Button>Clear All</Button>
          </Col>
        </Row>
      </Form>

      <Form style={style}>
        <Row gutter="4">
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label={label}
              required
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Long search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              {...formItemLayout}
              labelAlign={labelAlign}
              label="Search name:"
            >
              <Input placeholder="Enter a search name:" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Button type="primary" style={{ marginRight: '5px' }}>
              Search
            </Button>
            <Button>Clear All</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Demo8

export const demoMeta = {
  zhName: '自定义布局',
  zhDesc: `配合 \`Row\` \`Col\` 控制表单内元素布局 (注意：FormItem非Form直接子元素需要不能直接直接在Form上设置布局)`,
}
