import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {
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
    let [loading, setLoading] = useState(true)

    const setUserDetails = async () => {
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

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens');
    }

    let updateToken = async () => {
        if (!authTokens) {
            console.log("No User Found!");
            return;
        }

        let response = await fetch('http://localhost:8000/refresh/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
        })
        let data = await response.json()

        if (response.status === 200){
            console.log("Token Updated");
            setAuthTokens(data.token)
            setUserDetails();
            localStorage.setItem('authTokens', JSON.stringify(data.token))
        }else{
            console.log("Something Went Wrong");
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    useEffect(() => {
        if(loading){
            updateToken()
        }

        let tokenRefreshTime = 1000 * 60 * 59;
        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, tokenRefreshTime)

        return ()=> clearInterval(interval)
    }, [authTokens, loading])

    const contextDataValue = {
        authTokens,
        user,
        setAuthTokens,
        setUser,
        setUserDetails,
        logoutUser,
        updateToken,
        loading,
    }

    return (
        <AuthContext.Provider value={contextDataValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState