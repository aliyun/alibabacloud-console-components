import React, { Component } from 'react'
import { Step, Button } from '@alicloud/console-components'

const { Item: StepItem } = Step;
const { Group: ButtonGroup } = Button;

export default class StepDemo6 extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          currentStep: 3
      };
  }
  next = () => {
      const s = this.state.currentStep + 1;

      this.setState({
          currentStep: s > 6 ? 6 : s
      });
  }
  prev = () => {
      const s = this.state.currentStep - 1;

      this.setState({
          currentStep: s < 0 ? 0 : s
      });
  }
  /*
  *   这里Step有readOnly属性  StepItem绑定的click事件并不触发，
      如果业务不需要，可以去掉绑定事件。   
  */
  onClick = (currentStep) => {
      this.setState({
          currentStep: currentStep
      });
  }
  render() {
    const {currentStep} = this.state;

    return (
      <div>
        <div>
        	<div style={{display: 'inline-block'}}>
            <Step current={currentStep} shape="dot" readOnly>
              <StepItem onClick={this.onClick} />
              <StepItem onClick={this.onClick} />
              <StepItem onClick={this.onClick} />
              <StepItem onClick={this.onClick} />
              <StepItem onClick={this.onClick} />
              <StepItem onClick={this.onClick} />
            </Step>
          </div>
          <div style={{marginTop:"20px"}}>
            <ButtonGroup>
              <Button style={{marginRight: "10px"}} onClick={this.prev} type="primary" disabled={currentStep === 0}>上一步</Button>
              <Button onClick={this.next} type="primary" disabled={currentStep === 6}>下一步</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}