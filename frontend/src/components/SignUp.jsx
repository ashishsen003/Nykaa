import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signUp} from '../Redux/authentication/action'

const SignUp = () => {

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {isLoading} = useSelector((store)=>store.authReducer.isLoading)
    const dispatch = useDispatch()

    const handleClick = ()=>{
        const userData = {
            name, avatar, email, password
        }
        // console.log(userData);
        dispatch(signUp(userData))
    }
    // console.log(isLoading);

  return (
    <div>
      <h1>Sign Up User</h1>
      
      {isLoading ? <h1>LOADING</h1> : 
      (<>
      <input type='name' placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}  />
      <input type='text' placeholder='avatar' name='avatar' value={avatar} onChange={(e)=>setAvatar(e.target.value)}  />
      <input type='email' placeholder='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
      <input type='password' placeholder='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
      <button onClick={handleClick} >Sign Up</button>
      </> )}
    </div>
  )
}

export default SignUp