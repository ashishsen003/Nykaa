import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../Redux/products/action'
import { EDIT_PRODUCT } from '../Redux/products/actionTypes'

const ProductsCard = ({_id, name, picture, description, gender, category, price}) => {

    const isAuth = useSelector(store=>store.authReducer.isAuth)
    let isEdit = useSelector(store=>store.productsReducer.isEdit)

    const dispatch = useDispatch()
    // console.log(isAuth);

    const handleEdit = ()=>{
      // isEdit = !isEdit
      dispatch({type: EDIT_PRODUCT, payload: !isEdit})
      console.log(isEdit);
    }

    const handleDelete = (_id)=>{
        console.log(_id);
        dispatch(deleteProduct(_id))
    }

  return (
    <div style={{display: 'flex', gap: '2rem',  justifyContent: 'flex-start' }}>
        <p>{name}</p>
        <Link to={`/products/${_id}`} ><img src={picture} alt="" style={{width: '10%'}} /></Link>
        <p>{description}</p>
        <p>{gender}</p>
        <p>{category}</p>
        <p>{price}</p>
        {/* {isAuth ? <Link to={`/products/${_id}`} onClick={handleEdit} >Edit</Link> : ''}
        {isAuth ? <button onClick={(e)=>handleDelete(_id)}>Delete</button> : ''} */}
        <button><Link to={`/products/${_id}`} onClick={handleEdit} style={{textDecoration: 'none'}} >Edit</Link></button>
        <button onClick={(e)=>handleDelete(_id)}>Delete</button>
    </div>
  )
}

export default ProductsCard