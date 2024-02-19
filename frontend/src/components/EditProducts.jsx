import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { editProduct } from '../Redux/products/action'

const EditProducts = () => {

    const {_id} = useParams()
    const products = useSelector((store)=>store.productsReducer.products)
    const dispatch = useDispatch()
    const [data, setData] = useState({})

    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [description, setDescription] = useState('')
    const [gender, setGender] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    useEffect(()=>{
        const product = products.find((el)=>el._id == _id)
        // setData(product)
        setName(product.name)
        setPicture(product.picture)
        setDescription(product.description)
        setGender(product.gender)
        setCategory(product.category)
        setPrice(product.price)
    },[])

    const handleEdit = (_id)=>{
      const userData = {name, picture, description, gender, category, price} 
      dispatch(editProduct(userData, _id))
    }

  return (
    <div>
      {data && (
        <>
          <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}  />
          <input type="text" placeholder='picture' value={picture} style={{width: '10%'}} onChange={(e)=>{setPicture(e.target.value)}}  />
          <input type="text" placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}  />
          {/* <input type="text" placeholder='gender' value={gender} onChange={(e)=>{setGender(e.target.value)}}  />
          <input type="text" placeholder='category' value={category} onChange={(e)=>{setCategory(e.target.value)}}  /> */}
          <select name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value='' disabled>Select Category</option>
            <option value='makeup'>makeup</option>
            <option value='skincare'>skincare</option>
            <option value='haircare'>haircare</option>
          </select>

          <select name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value='' disabled>Select Gender</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>

          <input type="text" placeholder='price' value={price} onChange={(e)=>{setPrice(e.target.value)}}  />
          <Link to='/products'><button onClick={()=>{handleEdit(_id)}}>Save</button></Link>
          <Link to='/products'><button>Cancel</button></Link>
        </>
      )}
    </div>
  )
}

export default EditProducts


// name
// "Bear shampoo"
// picture
// "https://i.pravatar.cc/300"
// description
// "for silky hair"
// gender
// "male"
// category
// "haircare"
// price
// 150