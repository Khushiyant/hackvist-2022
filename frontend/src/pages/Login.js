import React from 'react'

const Login = () => {
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
            <div className="app_login">
                <form className="app_loginForm" onSubmit={(event) => formSubmitHandler(event)}>
                    <div className="loginForm_formGroup">
                        <label htmlFor="userEmail" className="formGroup_label">Email</label>
                        <input type="email" name="useEmail" id="userEmail" placeholder="yourname@domain.com" required="required" className="formGroup_input" />
                    </div>
                    <div className="loginForm_formGroup">
                        <label htmlFor="userPassword" className="formGroup_label">Password</label>
                        <input type="password" name="userPassword" id="userPassword" placeholder="Password here" required="required" className="formGroup_input" />
                    </div>
                    <button type="submit" className="loginForm_submitBtn">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login