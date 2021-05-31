import React, { useState } from "react";

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({ email: "", passwd: "" });

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => {
                console.log(res.headers["authorization"]);
                return res.json();
            })
            .then((resJSON) => {
                setLoading(false);
                props.setUserInfo(resJSON);
            })
            .catch((e) => console.log(e));
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
                <button className="submit-btn" type="submit" disabled={loading}>
                    {loading? "Loggin in":"Log in"}
                </button>
            </form>
            <button className="show-reg" onClick={props.showReg}>
                No account yet? Register
            </button>
        </>
    );
};

export default Login;
