import { useState } from "react";
import OTPLoginForm from "./OTPLoginForm";

const App = () => {
    const [loginViaPhone, setLoginViaPhone] = useState(false);
    
    const handleButton = () => {
        setLoginViaPhone((prev) => !prev);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            {!loginViaPhone ? (
                <button 
                    onClick={handleButton} 
                    className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Login Via Phone
                </button>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-6">Login with Phone</h1>
                    <OTPLoginForm />
                </div>
            )}
        </div>
    );
};

export default App;
