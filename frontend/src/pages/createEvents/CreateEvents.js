import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext'

import GenerateForm from '../../components/common/GenerateForm'
import { projectsForm } from '../../constants/ProjectsForms'
import { toast } from 'react-toastify'

const CreateEvents = () => {
    const navigate = useNavigate();
    const { type } = useParams();
    const { authTokens } = useAuthContext();

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const formBody = event.target;

        const formData = new FormData(formBody);

        const credentials = {};
        formData.forEach((value, key) => (credentials[key] = value));

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access),
            },
            body: JSON.stringify(credentials),
        }

        let fetchUrl = "";
        if (type === "event") {
            fetchUrl = "http://localhost:8000/create-event/";
        } else {
            fetchUrl = "http://localhost:8000/create-social-project/";
        }

        let response = await fetch(fetchUrl, requestOptions)
        let data = await response.json();
        console.log(data);

        if (response.status === 201) {
            if (type === "event") {
                toast.success("Congratulations! Your Event Has Been Created Successfully.");
            } else {
                toast.success("Congratulations! Your Project Has Been Created Successfully.");
            }

            formBody.reset();
            navigate('/');
            return;
        }

        if (type === "event") {
            toast.error("Something Went Wrong! Please Try Creating Event Again.");
        } else {
            toast.error("Something Went Wrong! Please Try Creating Project Again.");
        }
    }

    return (
        <>
            <div className="bg-alabaster h-screen w-full flex flex-col justify-center items-start p-8">
                <h1 className="w-max mx-auto font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">
                    {(type === "event") ? "Host An Event" : "Create A Project"}
                </h1>
                <form className="w-11/12 mx-auto max-w-2xl bg-white p-8 mt-4 rounded-lg flex flex-col items-center gap-3" onSubmit={(event) => formSubmitHandler(event)}>
                    <button className="bg-theme-text-primary self-end px-3 py-1 -mt-4 mb-2 rounded grid font-open-sans text-start uppercase text-xs font-bold text-white" onClick={() => (navigate('/'))}>
                        {(type === "event") ? "Host Event Later" : "Create Project Later"}
                    </button>
                    <GenerateForm formInputs={projectsForm} />
                    <button type="submit" className="mt-6 w-full bg-theme-yellow text-white font-medium py-2 px-6 font-open-sans text-lg rounded-full">Submit Details</button>
                </form>
            </div>
        </>
    )
}

export default CreateEvents