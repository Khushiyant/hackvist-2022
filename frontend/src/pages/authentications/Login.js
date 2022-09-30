import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

import { toast } from 'react-toastify';
import { loginForm } from '../../constants/AuthForms'
import GenerateForm from '../../components/common/GenerateForm';

const Login = () => {
    const navigate = useNavigate();
    const { setAuthTokens } = useAuthContext();

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
            },
            body: JSON.stringify(credentials),
        }

        let response = await fetch("http://localhost:8000/login/", requestOptions);
        console.log(response);
        let data = await response.json();
        console.log(data);

        if (response.status === 404) {
            toast.error("Email or Password is not Valid");
            return;
        }

        if (response.status === 200) {
            const { token, msg } = data;
            setAuthTokens(token);
            localStorage.setItem('authTokens', JSON.stringify(token));
            formBody.reset();
            toast.success(msg);
            navigate('/');
            return;
        }

        toast.error("Something Went Wrong! Try Registering Again.");
    }

    const handleRegistrationClick = () => {
        navigate('/signup');
    }

    return (
        <>
            <div className="h-screen flex">
                <div className="bg-gradiant h-full text-white w-full p-16 flex flex-col justify-center align-start">
                    <h1 className="font-roboto-slab text-4xl font-semibold leading-tight tracking-wide">Many Are In Need</h1>
                    <h1 className="font-roboto-slab text-4xl font-semibold leading-tight tracking-wide">Of Your Helping Hand.</h1>
                    <p className="my-8 font-roboto text-lg leading-snug">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit sed unde adipisci quia fuga libero expedita, enim dolorum neque quam. Facere debitis ex aliquid tempore reiciendis sunt unde iste inventore ut ipsam amet nam asperiores eos est, culpa illum! Quod iusto sunt modi magnam amet atque nisi ratione porro!
                    </p>
                    <button onClick={handleRegistrationClick} className="bg-alabaster w-max text-theme-orange font-medium py-2 px-6 font-open-sans text-lg rounded-full">New Registration</button>
                </div>
                <div className="bg-alabaster h-full w-full flex flex-col justify-center items-start p-16">
                    <h1 className="font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">Hello User,</h1>
                    <h1 className="font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">Welcome Back</h1>
                    <form className="w-full mt-16 rounded-lg flex flex-col items-center gap-4" onSubmit={(event) => formSubmitHandler(event)}>
                        <GenerateForm formInputs={loginForm} />
                        <p className="w-max text-sm ml-auto -mt-3 cursor-pointer text-theme-text-secondary hover:text-theme-text-primary font-medium font-open-sans border-b border-b-transparent hover:border-b-theme-text-primary transition-all duration-300">Forgot Password?</p>
                        <button type="submit" className="mt-6 w-full bg-theme-yellow text-white font-medium py-2 px-6 font-open-sans text-lg rounded-full">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login