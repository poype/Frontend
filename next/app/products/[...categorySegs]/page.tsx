import React from 'react'

interface Props {
  params: {
    categorySegs: string[]
  }
}

const ProductPage = ({ params: { categorySegs } }: Props) => {

  return (
    <div>
      ProductPage
      <ul>
        {categorySegs.map((category) => <li>{category}</li>)}
      </ul>
    </div>
  )
}

export default ProductPage