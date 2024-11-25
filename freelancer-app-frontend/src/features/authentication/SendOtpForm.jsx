import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form action="" className="space-y-5">
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
        />
        <button className="px-4 py-2 font-bold bg-primary-900 text-white w-full rounded-xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOtpForm;
