import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

function App() {
    const [userInfo, setUserInfo] = useState(undefined);
    const [showLogin, setShowLogin] = useState(true);
    const [accessToken, setAccessToken] = useState("");

    return (
        <div className="app">
            {userInfo ? (
                <Profile {...userInfo} accessToken={accessToken }/>
            ) : showLogin ? (
                <Login
                    showReg={() => {
                        setShowLogin(false);
                    }}
                    setUserInfo={setUserInfo}
                    setAccessToken={setAccessToken}
                />
            ) : (
                <Register
                    showLogin={() => {
                        setShowLogin(true);
                    }}
                    setUserInfo={setUserInfo}
                />
            )}
        </div>
    );
}

export default App;
