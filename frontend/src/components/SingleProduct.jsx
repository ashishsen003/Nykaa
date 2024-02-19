import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductsCard from './ProductsCard'


const SingleProduct = () => {

    const [data, setData] = useState({})
    const {_id} = useParams()
    const products = useSelector((store)=>store.productsReducer.products)

    // console.log(_id, products);

    useEffect(()=>{
        const singleProduct = products.find((el, i)=> el._id == _id)
        setData(singleProduct)
    },[])

  return (
    <div>
        {<ProductsCard {...data} />}
    </div>
  )
}

export default SingleProduct