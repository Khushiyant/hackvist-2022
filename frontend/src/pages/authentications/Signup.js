import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext';

import { toast } from 'react-toastify'
import { signupForm } from '../../constants/AuthForms'
import GenerateForm from '../../components/common/GenerateForm'

const Signup = () => {
    const navigate = useNavigate();
    const { setAuthTokens } = useAuthContext();

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const formBody = event.target;

        const password = formBody.password.value;
        const cnfrmPassword = formBody.confirmPassword.value;

        if (password !== cnfrmPassword) {
            toast.error("Password & Confirm Password are not same", { position: "top-left" });
            return;
        }

        const formData = new FormData(formBody);

        const credentials = {};
        formData.forEach((value, key) => {
            if (key !== "confirmPassword")
                (credentials[key] = value)
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }

        let response = await fetch("http://localhost:8000/registration/", requestOptions);
        let data = await response.json();

        console.log(response, data);

        if (response.status === 400) {
            toast.error("User Account With This Email or Phone Already Exists.", { position: "top-left" });
            return;
        }

        if (response.status === 201) {
            const { token, message } = data;
            setAuthTokens(token);
            localStorage.setItem('authTokens', JSON.stringify(token));
            formBody.reset();
            toast.success(message);

            if (credentials.user_type === "INDIVIDUAL") {
                navigate('/');
            } else if (credentials.user_type === "NGO") {
                navigate('/registration/ngo');
            } else {
                navigate("/registration/community");
            }

            return;
        }

        toast.error("Something Went Wrong! Try Registering Again.", { position: "top-left" });
    }

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <>
            <div className="h-screen flex flex-row-reverse">
                <div className="bg-gradiant h-full text-white w-full p-16 flex flex-col justify-center align-start">
                    <h1 className="font-roboto-slab text-4xl font-semibold leading-tight tracking-wide">
                        Lend A Hand<br />To Bring A Smile.
                    </h1>
                    <p className="my-8 font-roboto text-lg leading-snug">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit sed unde adipisci quia fuga libero expedita, enim dolorum neque quam. Facere debitis ex aliquid tempore reiciendis sunt unde iste inventore ut ipsam amet nam asperiores eos est, culpa illum! Quod iusto sunt modi magnam amet atque nisi ratione porro!
                    </p>
                    <button onClick={handleLoginClick} className="bg-alabaster w-max text-theme-orange font-medium py-2 px-6 font-open-sans text-lg rounded-full">Already A User</button>
                </div>
                <div className="bg-alabaster h-full w-full flex flex-col justify-center items-start p-16">
                    <h1 className="font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">Hello User,</h1>
                    <h1 className="font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">Let&apos;s Get Started</h1>
                    <form className="w-full mt-12 rounded-lg flex flex-col items-center gap-4" onSubmit={(event) => formSubmitHandler(event)}>
                        <GenerateForm formInputs={signupForm} />
                        <button type="submit" className="mt-6 w-full bg-theme-yellow text-white font-medium py-2 px-6 font-open-sans text-lg rounded-full">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup