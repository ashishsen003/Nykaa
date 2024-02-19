import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Products from '../components/Products'
import SingleProduct from '../components/SingleProduct'
import EditProducts from '../components/EditProducts'
import { useSelector } from 'react-redux'

const AllRoutes = () => {

  let isEdit = useSelector(store=>store.productsReducer.isEdit)

  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:_id' element={isEdit ? <EditProducts /> : <SingleProduct />} />
    </Routes>
  )
}

export default AllRoutes