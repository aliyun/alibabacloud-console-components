import React, { Component } from 'react'
import axios from 'axios'
import { 
  Button, 
  Input, 
  Grid, 
  Form,
 } from '@alicloud/console-components'
import { getSecToken, getUmid, getCollina } from '../../utils'
import searchParamsInterceptor from '../searchParamsInterceptor'
import messages from './messages'

const { Col, Row } = Grid
const ItemLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(searchParamsInterceptor)


interface IProps {
  options?: {
    codeType?: string;
    verifyType?: string;
    verifyDetail?: any;
    isVerifyCodeValid?: any;
  },
  setVerifyCode?: (value: any ) => void;
  setRequestId?: (id: string) => void;
  onError?: (value: any) => void; 
  risk: any;
}

interface IState {
  isCountdownStarted?: boolean;
  countdown?: number;
}

class VerifyForm extends Component<IProps, IState> {
  timer: number;
  verifyUrl: { [key: string]: string;};
  constructor(props: IProps) {
    super(props)
    this.timer = null
    this.state = {
      isCountdownStarted: false,
      countdown: 0,
    }
    this.verifyUrl = props.risk.url
    this.onInputChange = this.onInputChange.bind(this)
    this.onGenerateVerifyCode = this.onGenerateVerifyCode.bind(this)
    this.startCountdownTimer = this.startCountdownTimer.bind(this)
    this.updateCountdown = this.updateCountdown.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  onInputChange(value) {
    this.props.setVerifyCode(value.trim())
  }

  async onGenerateVerifyCode() {
    this.startCountdownTimer()

    const { 
      options: { 
        codeType, 
        verifyType,
      }, 
      setRequestId,
     } = this.props
    const reqData = {
      codeType,
      verifyType,
      sec_token: getSecToken(),
      umid: getUmid(),
      collina: getCollina(),
    }

    try {
      const res = await axiosInstance({
        method: 'post',
        url: this.verifyUrl.generateVerificationCode,
        data: reqData,
        timeout: 15000,
      })

      const { data: { data: resData } } = res
      if (!resData) {
        throw new Error('[generateVerifyCode] failed')
      }

      setRequestId(resData.requestId) // 保存发送验证码请求的 requestId
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('[onGenerateVerifyCode] failed: ', e.message)
      // this.props.onError(e)
      // setRequestId('Fake requestId')
    }
  }

  startCountdownTimer() {
    this.updateCountdown(60)
    this.timer = window.setInterval(() => {
      if (this.state.countdown <= 0) {
        this.clearTimer()
        return
      }
      let _countdown = this.state.countdown
      this.updateCountdown(--_countdown) // eslint-disable-line
    }, 1000)
  }

  updateCountdown(value) {
    this.setState({
      countdown: value,
      isCountdownStarted: value !== 0,
    })
  }

  clearTimer() {
    clearInterval(this.timer)
  }

  render() {
    const {
      options: { verifyType, verifyDetail, isVerifyCodeValid },
    } = this.props

    const verifyMessages = {
      ...messages[verifyType],
      ...messages.others,
    }

    const {
      isCountdownStarted,
      countdown,
    } = this.state


    return (
      <Form style={{ width: '400px' }}>
        <Form.Item label={verifyMessages.detailDescription} {...ItemLayout}>
          <div className="next-form-text-align">
            <span>{verifyDetail} </span>
            <a
              href={this.verifyUrl.changeVerificationMethod}
              rel="noopener noreferrer"
              target="_blank"
            >
              {verifyMessages.changeDescription}
            </a>
          </div>
        </Form.Item>
        <Form.Item
          label={verifyMessages.settingLabel}
          {...ItemLayout}
          validateState={!isVerifyCodeValid ? 'error' : 'success'}
          help={!isVerifyCodeValid ? verifyMessages.codeInvalid : ''}
        >
          <Row>
            <Col>
              <Input onChange={this.onInputChange} style={{ width: 80 }} />
            </Col>
            {
              verifyType !== 'ga' ?
                <Col>
                  {
                    isCountdownStarted ?
                      <Button disabled>
                        {`${verifyMessages.reSend.replace('{s}', countdown)}`}
                      </Button> :
                      <Button onClick={this.onGenerateVerifyCode}>
                        {verifyMessages.sendCode}
                      </Button>
                  }
                </Col> :
                null
            }
          </Row>
        </Form.Item>
      </Form>
    )
  }
}

export default VerifyForm