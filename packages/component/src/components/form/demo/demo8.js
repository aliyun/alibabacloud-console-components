import React from 'react'
import { Form, Input, Switch, Grid, Button, Icon, Balloon, Field } from '@alicloud/console-components'

const FormItem = Form.Item
const {Row, Col} = Grid

const style = {
  padding: '20px',
  background: '#F7F8FA',
  margin: '20px',
}
const formItemLayout = {
  labelCol: {fixedSpan: 4},
}
const label = (<span>
  name：<Balloon type="primary" trigger={<Icon type="prompt" size="small" />} closable={false}>blablablablablablablabla</Balloon>
</span>)

export default class Demo8 extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.field = new Field(this)
  }

  render() {
    const {init, getValue} = this.field
    const labelAlign = getValue('labelAlign') ? 'left' : 'top'
    return (
      <div>
        <h3>Label Position</h3>
        <Switch checkedChildren="left" unCheckedChildren="top" {...init('labelAlign', {initValue: false})} />

        <Form  style={style}>
          <Row gutter="4">
            <Col>
              <FormItem {...formItemLayout} labelAlign={labelAlign}
                label={label}
                required
               >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
              <FormItem {...formItemLayout} labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
              <FormItem {...formItemLayout} labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
            <Col>
              <FormItem {...formItemLayout} labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
              <FormItem  {...formItemLayout} labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
              <FormItem  {...formItemLayout} labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
            <Col>
              <FormItem  {...formItemLayout} labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
              <FormItem  {...formItemLayout} labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
              <FormItem  {...formItemLayout} labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'right' }}>
              <Button type="primary" style={{ marginRight: '5px' }}>Search</Button>
              <Button >Clear All</Button>
            </Col>
          </Row>
        </Form>

        <Form style={style}>
          <Row gutter="4">
            <Col>
              <FormItem {...formItemLayout} labelAlign={labelAlign}
                label={label}
                required
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
            <Col>
              <FormItem {...formItemLayout}  labelAlign={labelAlign}
                label="Long search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
            <Col>
              <FormItem {...formItemLayout} labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
            <Col>
              <FormItem {...formItemLayout}  labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
            <Col>
              <FormItem {...formItemLayout}  labelAlign={labelAlign}
                label="Search name:"
              >
                <Input placeholder="Enter a search name:"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'right' }}>
              <Button type="primary" style={{ marginRight: '5px' }}>Search</Button>
              <Button >Clear All</Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
