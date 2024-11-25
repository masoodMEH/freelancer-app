// import CheckOTP from "../features/authentication/CheckOTPForm";
import SendOtpForm from "../features/authentication/SendOtpForm";

const Auth = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOtpForm />
        {/* <CheckOTP /> */}
      </div>
    </div>
  );
};

export default Auth;
