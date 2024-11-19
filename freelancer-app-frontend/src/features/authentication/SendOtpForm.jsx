import { useState } from "react";

const SendOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    return (
        <div>
            <form action="" className="space-y-5">
                <div className="">
                    <label className="mb-1" htmlFor="">شماره موبایل</label>
                    <input
                        value={phoneNumber}
                        onChange={((e) => setPhoneNumber(e.target.value))}
                        id="phoneNumber"
                        className="w-full py-3 px-4 rounded-xl text-secondary-900 border border-gray-300 outline-none hover:border-primary-300
                         focus:outline-none focus:border-primary-300 focus:bg-white transition-all duration-300 ease-in-out focus:shadow-lg
                          focus:shadow-primary-200"
                        type="text"
                    />
                </div>
                <button className="px-4 py-2 font-bold bg-primary-900 text-white w-full rounded-xl transition-all duration-300 hover:bg-primary-800 shadow-lg shadow-primary-300">ارسال کد تایید</button>
            </form>
        </div>
    );
};

export default SendOtpForm;
