import { useState } from "react";

const Logout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("login") === "true");
    const [showMessage, setShowMessage] = useState(false);

    const handleLogOut = () => {
        if (isLoggedIn) {
            localStorage.setItem("login", "false");
            setIsLoggedIn(false);
            setShowMessage(true);

            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        }
    };

    return (
        <div>
            <button onClick={handleLogOut} className="absolute right-6 top-3 border-white text-white border-2 p-1 text-xs lg:p-1.5 lg:text-base rounded">
                Logout
            </button>

            {showMessage && (
                <div className="fixed top-1/2 left-0 w-full bg-green-500 text-white text-center p-2">
                    You have been logged out successfully!
                </div>
            )}
        </div>
    );
};

export default Logout;
