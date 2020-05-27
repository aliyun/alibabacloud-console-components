import React, { useEffect, useState } from 'react'

const DocList: React.FC = () => {
  const data = useDocList()
  if (!data) return <p>Loading...</p>
  const { root, files } = data
  if (!Array.isArray(files) || files.length === 0)
    return (
      <p>
        No <code>*.md|mdx</code> file is found under <code>{root}</code>.
      </p>
    )
  return (
    <ul>
      {files.map(filePath => {
        return (
          <li>
            <a href={`docs?path=/${filePath}`}>{filePath}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default DocList

function useDocList() {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    ;(async () => {
      const response = await fetch('/api/docs')
      setData(await response.json())
    })()
  }, [])
  return data
}
