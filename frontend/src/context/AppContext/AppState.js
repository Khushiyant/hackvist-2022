import React, { useEffect, useState } from 'react'
import useAuthContext from '../../hooks/useAuthContext';
import AppContext from './AppContext'

const AppState = (props) => {
    const [events, setEvents] = useState([])
    const [projects, setProjects] = useState([]);
    const [ngo, setNgo] = useState([]);

    const { loading, authTokens } = useAuthContext();

    const getAllEvents = async () => {

        const response = await fetch("http://localhost:8000/get-all-events/")
        const data = await response.json();

        setEvents(data)
    }

    const getAllProjects = async () => {

        const response = await fetch("http://localhost:8000/get-all-projects/")
        const data = await response.json();

        setProjects(data)
    }

    const getAllNgos = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
        }

        let response = await fetch("http://localhost:8000/get-all-ngos/", requestOptions);
        let data = await response.json();

        setNgo(data);
    }

    useEffect(() => {
        getAllEvents();
        getAllProjects();
        getAllNgos();
    }, [authTokens, loading])

    const contextDataValue = {
        events,
        projects,
        ngo
    }
    return (
        <AppContext.Provider value={contextDataValue}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState