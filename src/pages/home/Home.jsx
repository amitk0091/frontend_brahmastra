import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { auth } from '../../config/config_firebase';

const Home = () => {
    const location = useLocation();
    console.log(location);
    // useEffect (()=>{
    //     const sendVerifyReq = async() =>{
    //         const resp = await fetch(`https://fir-authentication-e63f1.firebaseapp.com/__/auth/action${location.search}`)
    //     }
    //     sendVerifyReq();
    // },[])


    return (
        <div>
            hello
        </div>
    )
}

export default Home