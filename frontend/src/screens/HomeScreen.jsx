import React from 'react'
import Product from '../components/Product'
import data from '../data'

const HomeScreen = () => {
  return (
    <div className="row center">
          {data.products.map((product, index) => (
         <Product product={product} index={index}  key={index}/>
          ))}
        </div>
  )
}

export default HomeScreen