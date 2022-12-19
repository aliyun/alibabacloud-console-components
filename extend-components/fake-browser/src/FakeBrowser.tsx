import React, { useState } from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { Location } from 'history'
import styled from 'styled-components'

const LIGHT_GRAY = 'hsl(0, 0%, 32%)'
const GRAY = 'hsl(0, 0%, 78%)'

const LeftArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="m28.3 18.3h-12.6l3.8-3.8c0.7-0.6 0.7-1.7 0-2.3s-1.7-0.7-2.3 0l-7.9 7.8 7.9 7.8c0.3 0.4 0.7 0.5 1.1 0.5s0.9-0.1 1.2-0.5c0.7-0.6 0.7-1.7 0-2.3l-3.8-3.8h12.6c1 0 1.7-0.8 1.7-1.7s-0.8-1.7-1.7-1.7z" />
  </svg>
)

const RightArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="m22.2 12.2c-0.7 0.6-0.7 1.7 0 2.3l3.8 3.8h-12.7c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.7 1.6 1.7h12.7l-3.8 3.8c-0.7 0.6-0.7 1.7 0 2.3 0.3 0.4 0.7 0.5 1.1 0.5s0.9-0.1 1.2-0.5l7.9-7.8-7.9-7.8c-0.6-0.7-1.7-0.7-2.3 0z" />
  </svg>
)

const FileCodeIcon: React.FC<{ style: React.CSSProperties }> = ({
  style,
  ...props
}) => (
  <svg
    {...props}
    fill="currentColor"
    height="1em"
    width="1em"
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid meet"
    style={{ verticalAlign: 'middle', ...style }}
  >
    <path d="m16.3 15l-6.3 6.3 6.3 6.2 2.5-2.5-3.8-3.7 3.8-3.8-2.5-2.5z m5 2.5l3.7 3.8-3.7 3.7 2.5 2.5 6.2-6.2-6.2-6.3-2.5 2.5z m6.2-15h-22.5v35h30v-27.5l-7.5-7.5z m5 32.5h-25v-30h17.5l7.5 7.5v22.5z" />
  </svg>
)

const SButton = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  font-size: 200%;
  margin-top: -3px;
  outline: none;
`

const getUserConfirmation = (
  message: string,
  callback: (ok: boolean) => void
  // eslint-disable-next-line
): void => callback(window.confirm(message))

const createPath = (location: Location) => location.pathname + location.search

const FakeBrowser: React.FC<{ memoryRouterProps?: any }> = ({
  children,
  memoryRouterProps,
  ...props
}) => {
  const [url, setUrl] = useState<null | string>(null)

  return (
    <MemoryRouter
      getUserConfirmation={getUserConfirmation}
      {...memoryRouterProps}
    >
      <Route
        render={({ history, location }) => (
          <div
            className="wind-fake-browser"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              //
              backgroundColor: 'white',
              boxShadow: '0px 5px 20px hsla(0, 0%, 0%, 0.75)',
              borderRadius: '6px',
              height: '100%',
              width: '100%',
            }}
            {...props}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                //
                backgroundColor: '#eee',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                border: 'none',
                borderBottom: 'solid 1px #ccc',
                padding: '0 10px',
              }}
              className="wind-fake-browser__address-bar"
            >
              <SButton onClick={history.goBack}>
                <LeftArrowIcon
                  height="1em"
                  width="1em"
                  style={{ verticalAlign: 'middle', marginTop: -3 }}
                />
              </SButton>
              <SButton onClick={history.goForward}>
                <RightArrowIcon
                  height="1em"
                  width="1em"
                  style={{ verticalAlign: 'middle', marginTop: -3 }}
                />
              </SButton>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  //
                  flex: '1 1 auto',
                  padding: '5px',
                  marginLeft: '-12px',
                }}
              >
                <FileCodeIcon
                  style={
                    {
                      position: 'relative',
                      zIndex: 1,
                      left: '20px',
                      color: GRAY,
                    } as const
                  }
                />
                <input
                  style={{
                    font: 'inherit',
                    width: '100%',
                    paddingLeft: '25px',
                    color: LIGHT_GRAY,
                  }}
                  type="text"
                  value={url || createPath(location)}
                  onChange={(e) => {
                    setUrl(e.target.value)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setUrl(null)
                      history.push((e.target as HTMLInputElement).value)
                    }
                  }}
                />
              </div>
            </div>
            <div
              style={{
                flex: '1 1 auto',
                padding: '20px',
                overflow: 'auto',
                position: 'relative',
              }}
              className="wind-fake-browser__content-root"
            >
              {children}
            </div>
          </div>
        )}
      />
    </MemoryRouter>
  )
}

export default FakeBrowser
