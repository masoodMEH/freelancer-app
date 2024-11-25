import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const SendOtphandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" className="space-y-10" onSubmit={SendOtphandler}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOtpForm;
