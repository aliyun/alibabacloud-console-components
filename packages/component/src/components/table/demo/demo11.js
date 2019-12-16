import React, { useState } from 'react'
import { Table, Button } from '@alicloud/console-components'
import styled from 'styled-components'

const dataSource = [
  {
    price: 'US $2.45',
    status: 0,
    id: 1,
    product: [
      {
        title:
          "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
        avatar:
          'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
      },
    ],
    children: [
      {
        price: 'US $2.5',
        status: 1,
        id: 2,
        product: [
          {
            title:
              'Free shipping women Casual dresses lady dress plus size 2014',
            avatar:
              'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
          },
        ],
      },
      {
        price: 'US $2.5',
        status: 1,
        id: 3,
        product: [
          {
            title:
              'Free shipping women Casual dresses lady dress plus size 2014',
            avatar:
              'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
          },
        ],
      },
    ],
  },
  {
    price: 'US $2.5',
    status: 1,
    id: 4,
    product: [
      {
        title: 'Free shipping women Casual dresses lady dress plus size 2014',
        avatar:
          'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
      },
    ],
    children: [
      {
        price: 'US $2.5',
        status: 1,
        id: 5,
        product: [
          {
            title:
              'Free shipping women Casual dresses lady dress plus size 2014',
            avatar:
              'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
          },
        ],
      },
    ],
  },
]
const productRender = product => {
  return (
    <SMedia>
      <img src={product[0].avatar} className="media-side" />
      <div className="media-content">{product[0].title}</div>
    </SMedia>
  )
}

const priceRender = price => {
  return <b>{price}</b>
}

const statusRender = status => {
  if (status) {
    return 'Already Priced'
  }
  return 'No Priced'
}

const operRender = () => {
  return <a href="javascript:;">View</a>
}

const groupHeaderRender = record => {
  return <div>{record.product[0].title}</div>
}

const rowSelection = {
  onChange(selectedKeys) {
    console.log(selectedKeys)
  },
}

const Demo11 = () => {
  const [hasSelection, setHasSelection] = useState(false)

  const toggleGroupSelection = () => {
    setHasSelection(!hasSelection)
  }

  return (
    <div>
      <p>
        <Button onClick={toggleGroupSelection}>
          Toggle GroupHeader Selection
        </Button>
      </p>
      <Table dataSource={dataSource} rowSelection={rowSelection}>
        <Table.GroupHeader
          cell={groupHeaderRender}
          hasChildrenSelection={hasSelection}
        />
        <Table.GroupFooter cell={groupHeaderRender} />
        <Table.Column
          cell={productRender}
          title="Product Details"
          dataIndex="product"
        />
        <Table.Column
          cell={priceRender}
          title="Price"
          dataIndex="price"
          width={120}
        />
        <Table.Column
          cell={statusRender}
          title="Status"
          dataIndex="status"
          width={100}
        />
        <Table.Column cell={operRender} title="" width={100} />
      </Table>
    </div>
  )
}

export default Demo11

export const demoMeta = {
  zhName: `分组列表`,
  zhDesc: `分组列表展现`,
}

const SMedia = styled.div`
  overflow: hidden;
  .media-side {
    width: 48px;
    height: 48px;
    float: left;
    margin-right: 10px;
  }
  .media-content {
    overflow: hidden;
    vertical-align: top;
  }
`
