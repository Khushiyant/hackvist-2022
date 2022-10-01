import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {

    const setUserDetails = async () => {
        const authTokens = JSON.parse(localStorage.getItem('authTokens'));

        if (!authTokens) {
            setUser(null);
            return;
        }

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
        }

        let response = await fetch("http://localhost:8000/user-details/", requestOptions);
        let data = await response.json();

        setUser(data);
    }

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => {
        const authTokens = JSON.parse(localStorage.getItem('authTokens'));

        if (!authTokens) {
            return null;
        }

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
        }

        fetch("http://localhost:8000/user-details/", requestOptions)
            .then((response) => (response.json()))
            .then((data) => {
                setUser(data);
            })
    })

    const contextDataValue = {
        authTokens,
        user,
        setAuthTokens,
        setUser,
        setUserDetails,
    }
    return (
        <AuthContext.Provider value={contextDataValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState