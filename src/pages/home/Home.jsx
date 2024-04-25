import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { auth } from '../../config/config_firebase';

const Home = () => {
    const location = useLocation();

    auth.onAuthStateChanged(userCred =>{
        console.log(userCred);
    })


    return (
        <div>
            hello
        </div>
    )
}

export default Home