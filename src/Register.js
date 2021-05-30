import React, { useState } from "react";

const Register = (props) => {

    const [values, setValues] = useState({ fullName: "", email: "", passwd: "" });
    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name] : e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}>
                <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                <input
                    name="passwd"
                    type="password"
                    placeholder="Password"
                    value={values.passwd}
                    onChange={handleInputChange}
                />
                <button class="submit-btn" type="submit">
                    Register
                </button>
            </form>
            <button className="show-reg" onClick={props.showLogin}>No account yet? Register</button>
        </>
    );
};

export default Register;
