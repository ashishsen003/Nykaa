import React, { useEffect, useState } from "react";
import { getProducts, postProduct } from "../Redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";
import { EDIT_PRODUCT, ADD_PRODUCT } from "../Redux/products/actionTypes";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {

  const [name, setName] = useState('')
  const [picture, setPicture] = useState('')
  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch();
  const {products, isAdd} = useSelector((store) => {
    return {
      products: store.productsReducer.products,
      isAdd: store.productsReducer.isAdd
    }
  });

  const paramsObj = {
    params:{
      gender: searchParams.get('gender'),
      category: searchParams.get('category'),
      sort: searchParams.get('sort')
    }
  }

  useEffect(() => {
    dispatch({type: EDIT_PRODUCT, payload: false})
    dispatch(getProducts(paramsObj));
    
  }, [products, searchParams]);
  // console.log(products);

  const AddProduct = ()=>{
    const userData = {name, picture, description, gender, category, price} 
    dispatch(postProduct(userData))
    dispatch({type: ADD_PRODUCT, payload: false})
  }

  return (
    <>
      <div style={{ display: "flex", gap: "2rem", justifyContent: 'flex-start' }}>
        <h3>Name</h3>
        <h3>Picture</h3>
        <h3>Description</h3>
        <h3>Gender</h3>
        <h3>Category</h3>
        <h3>Price</h3>
      </div>
      {isAdd ? <button onClick={(e)=>{dispatch({type: ADD_PRODUCT, payload: false})}}>Cancel</button> : 
      <button onClick={(e)=>{dispatch({type: ADD_PRODUCT, payload: true})}}>Add Product</button>}
      {
        isAdd && (
        <>
          <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}  />
          <input type="text" placeholder='picture' value={picture} style={{width: '10%'}} onChange={(e)=>{setPicture(e.target.value)}}  />
          <input type="text" placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}}  />
          {/* <input type="text" placeholder='gender' value={gender} onChange={(e)=>{setGender(e.target.value)}}  /> */}
          {/* <input type="text" placeholder='category' value={category} onChange={(e)=>{setCategory(e.target.value)}}  /> */}
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
          <button onClick={AddProduct}>Save</button>
        </>
        )
      }
      <div>
        {products.length > 0 &&
          products.map((el, i) => {
            return <ProductsCard key={i} {...el} />;
          })}
      </div>
    </>
  );
};

export default Products;
