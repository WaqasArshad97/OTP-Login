import { useState } from "react";
import OTPInput from "./OTPInput";
import { countryCodes } from "./countryCodes";

const OTPLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0]);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // Concatenate country code with phone number
  const fullPhoneNumber = selectedCountryCode + " " + phoneNumber;

  const handleSubmit = (event) => {
    event.preventDefault();
    // apply regex
    const regex = /[^+0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone Number");
      return;
    }
    // handle API
    // show otp field
    setShowOtpInput(true);
  };

  const onOtpSubmit = () => {
    setLoggedIn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-44 min-w-96">
      {!showOtpInput ? (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <select
            
              className="border-gray-400 outline-none bg-transparent border-b-2 py-2 w-16 mr-2"
              onChange={(e) => setSelectedCountryCode(e.target.value)}
              value={selectedCountryCode}
            >
              {countryCodes.map((code, index) => (
                <option value={code} key={index}>
                  {code}
                </option>
              ))}
            </select>
            <input
              type="text"
              autoFocus={true}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number"
              className="border-gray-400 outline-none bg-transparent border-b-2 p-2 flex-grow"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md self-end hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Send OTP
          </button>
        </form>
      ) : (
        <div className="text-center">
          {!loggedIn ? (
            <>
              <p className="mb-4">Enter OTP sent to {fullPhoneNumber}</p>
              <OTPInput length={4} onOtpSubmit={onOtpSubmit} />
            </>
          ) : (
            <p className="text-green-500">Login Successfully</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OTPLoginForm;
