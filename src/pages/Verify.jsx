// styles
import { styles } from "../styles/style";
// assets
import logo from "../assets/logo.svg";

import { Loader } from "../components";

// react-hook-form
import { useForm } from "react-hook-form";

// context
import { useAuth } from "../context/useAuth";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

function Verify() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { handleSignupVerify, handleSigninVerify, loading } = useAuth();

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const onSubmit = (data) => {
    if (data.otp.length < 6) {
      toast.error("Sms kod 6 ta raqam bo'lishi shart !");
      return;
    }

    if (!type) {
      toast.error("Noto'g'ri sahifa");
    }

    if (type === "signup") {
      handleSignupVerify(data.otp);
    } else handleSigninVerify(data.otp);
    reset();
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="flex flex-col items-center gap-1 mb-6">
        <img src={logo} className="w-16 h-16" alt="logo" />
        <span className="text-xs font-bold tracking-widest text-[#1a3d2b] uppercase">
          Al Muamalat
        </span>
        <span
          className={`text-[10px] font-semibold tracking-widest ${styles.mainColor} uppercase`}
        >
          Consulting
        </span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
          Verify OTP
        </h1>
        <p className="text-sm text-gray-500 text-center mb-7">
          Emailingizga yuborilgan 6 raqamli kodni kiriting
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* OTP Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              OTP Code
            </label>
            <input
              type="text"
              maxLength={6}
              {...register("otp", {
                required: "OTP kodi majburiy!",
                minLength: {
                  value: 6,
                  message: "OTP 6 ta raqam bo'lishi kerak!",
                },
                maxLength: {
                  value: 6,
                  message: "OTP 6 ta raqam bo'lishi kerak!",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Faqat raqam kiriting!",
                },
              })}
              placeholder="123456"
              className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg 
                         text-sm text-gray-900 placeholder-gray-400 text-center 
                         tracking-[0.5em] text-lg font-semibold
                         focus:outline-none ${styles.mainFocus} 
                         focus:ring-2 focus:ring-[#009688]/10 transition
                         ${errors.otp ? "border-red-400" : "border-gray-300"}
                         `}
            />
            {errors.otp && (
              <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>
            )}
          </div>

          {/* Submit tugmasi */}
          <button
            type="submit"
            className={`w-full ${styles.mainBackColor} ${styles.hover} 
                       active:scale-[0.98] text-white font-semibold
                       text-sm py-2.5 rounded-lg transition-all duration-200`}
          >
            Tasdiqlash
          </button>
        </form>
      </div>
    </div>
  );
}

export default Verify;
