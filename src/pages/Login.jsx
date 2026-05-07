// react-router-dom
import { Link } from "react-router-dom";

// assets
import logo from "../assets/logo.svg";

// styles
import { styles } from "../styles/style";

// react
import { useForm } from "react-hook-form";
import { useAuth } from "../context/useAuth";
import { Loader } from "../components";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { user, loading, login } = useAuth();

  console.log(user);

  if (loading) return <Loader />;

  // handleSubmit
  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    login(payload);

    reset();
  };

  return (
    <section className="bg-gray-100">
      <div className="min-h-screen custom-container flex flex-col items-center justify-center px-4 py-10">
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

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
              Login
            </h1>
            <p className="text-sm text-gray-500 text-center mb-7">
              Enter your email below to login to your account
            </p>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                {...register("email", { required: true })}
                className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400
                       focus:outline-none ${styles.mainFocus} focus:ring-2 focus:ring-[#009688]/10 transition`}
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-gray-700 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password", { required: true })}
                  className={`w-full px-3.5 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 ${styles.mainFocus} focus:ring-[#009688]/10 transition`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                ></button>
              </div>
            </div>

            {/* Submit */}
            <button
              className={`w-full ${styles.mainBackColor} ${styles.hover} active:scale-[0.98] text-white font-semibold
                     text-sm py-2.5 rounded-lg transition-all duration-200`}
            >
              Submit
            </button>

            {/* Sign up */}
            <p className="text-center text-sm text-gray-500 mt-5">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className={`${styles.mainColor} font-semibold underline`}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
