import React from 'react'
import Login from '../../components/loginSignup/Login';
import Signup from '../../components/loginSignup/Signup';
import { useState } from 'react';

const Authentication = () => {
    const [loginSignupToggle, setLoginSignupToggle] = useState(true);

    return (
        <div>
            {loginSignupToggle ? <Signup />: <Login />  }
            {loginSignupToggle ? <div>Already have account? <button onClick={e=>setLoginSignupToggle(prev => !prev)}>SignIn</button></div> : <div>Don't have an account? <button onClick={e=>setLoginSignupToggle(prev => !prev)}>Signup</button></div>}
        </div>
    )
}

export default Authentication