import React from 'react'
import { useNavigate } from 'react-router-dom';

import { GrMail } from 'react-icons/gr'
import { HiLockClosed } from 'react-icons/hi'

const Login = () => {
    const navigate = useNavigate();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formBody = event.target;

        const credentials = {
            email: formBody.userEmail.value,
            password: formBody.userPassword.value,
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }

        fetch("http://localhost:8000/login/", requestOptions)
            .then((response) => (response.json()))
            .then((data) => {
                console.log(data);
                formBody.reset();
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    return (
        <>
            <div className="app_login h-screen flex">
                <div className="login_infoContainer bg-gradiant h-full text-white w-full p-16 flex flex-col justify-center align-start">
                    <h1 className="infoContainer_tagLine font-roboto-slab text-4xl font-semibold leading-tight tracking-wide">Many Are In Need</h1>
                    <h1 className="infoContainer_tagLine font-roboto-slab text-4xl font-semibold leading-tight tracking-wide">Of Your Helping Hand.</h1>
                    <p className="infoContainer_infoPara my-8 font-roboto text-lg leading-snug">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit sed unde adipisci quia fuga libero expedita, enim dolorum neque quam. Facere debitis ex aliquid tempore reiciendis sunt unde iste inventore ut ipsam amet nam asperiores eos est, culpa illum! Quod iusto sunt modi magnam amet atque nisi ratione porro!
                    </p>
                    <button onClick={() => navigate('/signup')} className="infoContainer_registrationBtn authRedirectBtns w-max bg-alabaster text-theme-orange font-medium py-2 px-6 font-open-sans text-lg rounded-full">New Registration</button>
                </div>
                <div className="login_loginFormContainer bg-alabaster h-full w-full flex flex-col justify-center items-start p-16">
                    <h1 className="loginFormContainer_welcomeHeading font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">Hello User,</h1>
                    <h1 className="loginFormContainer_welcomeHeading font-roboto-slab border-b-2 border-b-theme-text-primary text-4xl font-semibold leading-tight text-theme-text-primary">Welcome Back</h1>
                    <form className="app_loginForm w-full mt-16 rounded-lg flex flex-col items-center gap-4" onSubmit={(event) => formSubmitHandler(event)}>
                        <div className="loginForm_formGroup bg-white w-full flex items-center gap-0 font-roboto outline outline-1 outline-[#545454]/30 hover:outline-[#545454]/60 focus:outline-[#545454] transition-all duration-400 rounded-sm">
                            <span className="formGroup_groupIconContainer w-12 h-max grid place-content-center border-r-2 border-r-[#545454]/40 text-2xl text-[#545454]/60 transition-all duration-400">
                                <GrMail />
                            </span>
                            <input type="email" name="userEmail" id="userEmail" placeholder="Email Here" required="required" autoComplete='off' className="formGroup_input w-full p-2 focus:outline-none" />
                        </div>
                        <div className="loginForm_formGroup bg-white w-full flex items-center gap-0 font-roboto outline outline-1 outline-[#545454]/30 hover:outline-[#545454]/60 focus:outline-[#545454] transition-all duration-400 rounded-sm">
                            <span className="formGroup_groupIconContainer w-12 h-max grid place-content-center border-r-2 border-r-[#545454]/40 text-2xl text-[#545454]/60 transition-all duration-400">
                                <HiLockClosed />
                            </span>
                            <input type="password" name="userPassword" id="userPassword" placeholder="Password Here" required="required" className="formGroup_input w-full p-2 focus:outline-none" />
                        </div>
                        <p className="loginForm_forgetPasstext w-max text-sm ml-auto -mt-3 cursor-pointer text-theme-text-secondary hover:text-theme-text-primary font-medium font-open-sans border-b border-b-transparent hover:border-b-theme-text-primary transition-all duration-300">Forgot Password?</p>
                        <button type="submit" className="loginForm_submitBtn auththenticationBtns mt-6 w-full bg-theme-yellow text-white font-medium py-2 px-6 font-open-sans text-lg rounded-full">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login