import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOTP] = useState("");
  return (
    <div>
      <form className="space-y-5">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOTP}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="submit" {...props} />}
          containerStyle="flex flex-row-reverse justify-center p-5"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
          //   inputStyle={{
          //     border: "1px solid transparent",
          //     borderRadius: "8px",
          //     width: "54px",
          //     height: "54px",
          //     fontSize: "12px",
          //     color: "#000",
          //     fontWeight: "400",
          //     caretColor: "blue",
          //   }}
          //   focusStyle={{
          //   border: "1px solid #CFD3DB",
          //   outline: "none"
          // }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
