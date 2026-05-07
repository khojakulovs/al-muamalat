// react-router-dom
import { Link } from "react-router-dom";
// react-hook-form
import { useForm } from "react-hook-form";

// assets
import logo from "../assets/logo.svg";

// styles
import { styles } from "../styles/style";

// context/useAuth
import { useAuth } from "../context/useAuth";
// components
import { Loader } from "../components";

function SignUp() {
  const { handleRegister, user, loading } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const payload = {
      phone_number: data.phone,
      password: data.password,
      first_name: data.name,
      last_name: data.surname,
      email: data.email,
    };

    handleRegister(payload);
    console.log(user);

    reset();
  };

  if (loading) return <Loader />;

  return (
    <section className="bg-gray-100">
      <div className="custom-container min-h-screen flex flex-col items-center justify-center px-4 py-10">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500 text-center mb-7">
              Enter your details to create a new account
            </p>

            {/* First Name + Last Name */}
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900
                         placeholder-gray-400 focus:outline-none ${styles.mainFocus}
                         focus:ring-2 focus:ring-[#009688]/10 transition`}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("surname", { required: true })}
                  className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900
                         placeholder-gray-400 focus:outline-none ${styles.mainFocus}
                         focus:ring-2 focus:ring-[#009688]/10 transition`}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="m@example.com"
                className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900
                       placeholder-gray-400 focus:outline-none ${styles.mainFocus}
                       focus:ring-2 focus:ring-[#009688]/10 transition`}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="••••••••"
                  className={`w-full px-3.5 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-900
                         placeholder-gray-400 focus:outline-none ${styles.mainFocus}
                         focus:ring-2 focus:ring-[#009688]/10 transition`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#009688] transition"
                ></button>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your phone number
              </label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="+998901234567"
                className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900
                       placeholder-gray-400 focus:outline-none ${styles.mainFocus}
                       focus:ring-2 focus:ring-[#009688]/10 transition`}
              />
            </div>

            {/* Submit */}
            <button
              className={`w-full ${styles.mainBackColor} ${styles.hover} active:scale-[0.98] text-white font-semibold
                     text-sm py-2.5 rounded-lg transition-all duration-150`}
            >
              Submit
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-gray-500 mt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className={`${styles.mainColor} font-semibold underline`}
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
