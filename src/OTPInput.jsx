import { useEffect, useRef, useState } from "react";

const OTPInput = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, evt) => {
    //getting value
    const value = evt.target.value;

    //check value
    if (isNaN(value)) return;
    const newOtp = [...otp];

    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    //set new otp
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit();
    }
    if (value && index < length && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1,1);
  };

  const handleKeyDown = (index, evt) => {
    if (evt.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex mt-4 gap-2">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          type="text"
          value={value}
          onChange={(evt) => handleChange(index, evt)}
          onClick={() => handleClick(index)}
          onKeyDown={(evt) => handleKeyDown(index, evt)}
          className="w-16 h-16 border-blue-400 outline-none shadow-md bg-transparent border-2 p-2 text-2xl font-semibold text-center"
        />
      ))}
    </div>
  );
};

export default OTPInput;
