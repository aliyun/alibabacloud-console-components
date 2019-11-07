import React, { Component } from 'react'
import { Step, Button, Select } from '@alicloud/console-components'
import './demo8.less'

const { Item: StepItem } = Step;
const { Group: ButtonGroup } = Button;

export default class StepDemo8 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 3,
      stepType: 'circle',
      stepAnimation: true,
    };

    this.onClick = this.onClick.bind(this);
  }

  next() {
    const s = this.state.currentStep + 1;

    this.setState({
        currentStep: s > 6 ? 6 : s
    });
  }

  prev() {
    const s = this.state.currentStep - 1;

    this.setState({
      currentStep: s < 0 ? 0 : s
    });
  }

  onClick(currentStep) {
    this.setState({
      currentStep: currentStep
    });
  }

  onStepTypeChange(value) {
    this.setState({ stepType: value });
  }

  onStepAnimation(value) {
    this.setState({ stepAnimation: value });
  }

  render() {
    const {currentStep} = this.state;
    return (
      <div>
        <div className="custom-step-option">
          <Select placeholder="选择展示类型" onChange={this.onStepTypeChange.bind(this)} className="custom-select">
          {
              ['circle', 'arrow', 'dot'].map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)
          }
          </Select>

          <Select placeholder="是否开启动效" onChange={this.onStepAnimation.bind(this)} className="custom-select">
          {
              [true, false].map((item, index) => <Select.Option value={item} key={index}>{item ? '开启动效' : '关闭动效'}</Select.Option>)
          }
          </Select>
        </div>

        <Step current={currentStep} shape={this.state.stepType} animation={this.state.stepAnimation}>
          <StepItem title="步骤1" onClick={this.onClick} />
          <StepItem title="步骤2" onClick={this.onClick} />
          <StepItem title="步骤3" onClick={this.onClick} />
          <StepItem title="步骤4" onClick={this.onClick} />
          <StepItem title="步骤5" onClick={this.onClick} />
          <StepItem title="步骤6" onClick={this.onClick} />
        </Step>
        <br />
        <br />
        <ButtonGroup>
          <Button style={{marginRight: "10px"}} onClick={this.prev.bind(this)} type="primary" disabled={currentStep === 0}>上一步</Button>
          <Button onClick={this.next.bind(this)} type="primary" disabled={currentStep === 6}>下一步</Button>
        </ButtonGroup>
      </div>
    );
  }
}