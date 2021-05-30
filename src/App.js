import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="app">
            {showLogin ? (
                <Login
                    showReg={() => {
                        setShowLogin(false);
                    }}
                />
            ) : (
                <Register
                    showLogin={() => {
                        setShowLogin(true);
                    }}
                />
            )}
        </div>
    );
}

export default App;
