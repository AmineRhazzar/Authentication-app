import React, { useState } from "react";

const Register = (props) => {
    const [loading, setLoading] = useState(false);
    const [userCreationState, setUserCreationState] = useState({
        created: false,
        notCreated: false,
    });
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        passwd: "",
    });
    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.status)
            .then((status) => {
                setLoading(false);
                if (status === 201) {
                    setUserCreationState({ created: true, notCreated: true });
                } else {
                    setUserCreationState({ created: false, notCreated: true });
                }
            })
            .catch((err) => {
                setUserCreationState({ created: false, notCreated: true });
            });
    };
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
                <button className="submit-btn" type="submit" disabled={loading}>
                    {loading ? "Creating a user" : "Register"}
                </button>
            </form>
            <p className={`message ${userCreationState.created ? "success":userCreationState.notCreated? "failed":""}`}>
                {userCreationState.created
                    ? "User has been created"
                    : userCreationState.notCreated
                    ? "An error has occured. Try again"
                    : ""}
            </p>
            <button className="show-reg" onClick={props.showLogin}>
                Have an account? Log in
            </button>
        </>
    );
};

export default Register;
