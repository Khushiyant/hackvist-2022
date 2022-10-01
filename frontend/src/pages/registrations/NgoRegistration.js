import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { ngoRegistration } from '../../constants/RegistrationForms';
import GenerateForm from '../../components/common/GenerateForm';

/*========== 'NgoRegistration' function Starts Here ==========*/
const NgoRegistration = () => {
    const navigate = useNavigate();
    const [states, setStates] = useState([]);

    const getAllNgoStates = () => {
        fetch("http://localhost:8000/get-all-ngo-states/")
            .then((response) => (response.json()))
            .then((data) => {
                setStates(data.states);
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    useEffect(() => {
        getAllNgoStates()
    }, [])

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formBody = event.target;
        const formData = new FormData(formBody);

        const credentials = {};
        formData.forEach((value, key) => (credentials[key] = value));
        console.log(credentials);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }

        fetch("http://localhost:8000/ngo-register/", requestOptions)
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    if (states) {
        return (
            <>
                <div className="bg-alabaster h-screen w-full flex flex-col justify-center items-start p-16">
                    <h1 className="w-max mx-auto font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">NGO Registration Form</h1>
                    <form className="w-11/12 mx-auto max-w-2xl bg-white p-8 mt-8 rounded-lg flex flex-col items-center gap-4" onSubmit={(event) => formSubmitHandler(event)}>
                        <button className="bg-theme-text-primary self-end px-3 py-1 -mt-4 mb-2 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white" onClick={() => (navigate('/'))}>Skip For Now</button>
                        <GenerateForm formInputs={ngoRegistration} />
                        <button type="submit" className="mt-6 w-full bg-theme-yellow text-white font-medium py-2 px-6 font-open-sans text-lg rounded-full">Submit Details</button>
                    </form>
                </div>
            </>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default NgoRegistration