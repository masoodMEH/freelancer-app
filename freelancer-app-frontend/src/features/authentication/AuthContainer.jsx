import React, { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOtpForm from "./SendOtpForm";

const AuthContainer = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOtpForm setStep={setStep} />;
      case 2:
        return <CheckOTPForm />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
