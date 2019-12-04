import React from 'react'

const docLoc = document.location.href

const NonSSRAbleDemo: React.FC = () => {
  return (
    <div>
      <p>document location title is: {docLoc}</p>
      <p>document title is: {document.title}</p>
    </div>
  )
}

export default NonSSRAbleDemo
