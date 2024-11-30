import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const SendOtphandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // useQuery => get data
  // useMutation => post,put,delete,...

  return (
    <div>
      <form action="" className="space-y-10" onSubmit={SendOtphandler}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="شماره موبایل"
        />
        <div className="">
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SendOtpForm;
