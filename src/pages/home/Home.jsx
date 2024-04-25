import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { auth } from '../../config/config_firebase';

const Home = () => {
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        // Get the values of the 'oobCode' and 'apiKey' parameters
        const oobCodeval = urlParams.get('oobCode');
        const apiKey = urlParams.get('apiKey');

        const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`;
        // console.log(oobCodeval,apiKey);
        const requestOptions = {
            method: 'POST', // or 'GET', 'PUT', 'DELETE', etc.
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                oobCode: oobCodeval
            })
        };

        // console.log('here');
        const sendVerifyReq = async () => {
            const resp = await fetch(url, requestOptions);
            console.log(resp);
        }
        sendVerifyReq();
    }, [])


    return (
        <div>
            hello
        </div>
    )
}

export default Home