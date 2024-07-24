import React from 'react'

interface Props {
  params: {
    categorySegs: string[]
  },
  searchParams: {
    searchOrder: string;
  }
}

const ProductPage = ({ params: { categorySegs }, searchParams: { searchOrder } }: Props) => {

  return (
    <div>
      ProductPage
      <ul>
        {categorySegs && categorySegs.map((category) => <li>{category}</li>)}
      </ul>

      searchOrder: {searchOrder}
    </div>
  )
}

export default ProductPage


// url: http://localhost:3000/products/aa/bb/cc/dd?searchOrder=price