import React, { useState } from 'react'
import { login } from '../Redux/authentication/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    
    const {token, isLoading} = useSelector((store)=>{
        return {
            token: store.authReducer.token,
            isLoading: store.authReducer.isLoading,
        }
    }, shallowEqual)

    // console.log(token);
    
    const handleClick = ()=>{
        const userData ={email, password}
        
        dispatch(login(userData))
    }
    

  return (
    <div>
        <h1>Login</h1>
        <input type="email" name='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <input type="password" name='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login