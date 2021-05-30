import React, { useState } from "react";

const Login = (props) => {
    const [values, setValues] = useState({ email: "", passwd: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };
    return (
        <>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                    }}
                />
                <input
                    name="passwd"
                    type="password"
                    placeholder="Password"
                    value={values.passwd}
                    onChange={(e) => {
                        setValues({ ...values, passwd: e.target.value });
                    }}
                />
                <button class="submit-btn" type="submit">
                    Log in
                </button>
            </form>
            <button className="show-reg" onClick={props.showReg}>Have an account? Log in</button>
        </>
    );
};

export default Login;
