import { createContext, useState } from "react";
import { request } from "../services/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const defaultProvider = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  handleRegister: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);
  const navigate = useNavigate();

  // HandleRegister
  const handleRegister = (params) => {
    setLoading(true);
    request
      .post("v2/auth/signup/init", params)
      .then(() => {
        toast.success("Sms xabarnomani emailingizga yubordik!");
        localStorage.setItem("pendingEmail", params.email);
        navigate("/verify?type=signup");
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message || "Qandaydir xatolik yuz berdi!",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // HandleSignupVerify
  const handleSignupVerify = (otp) => {
    setLoading(true);
    const email = localStorage.getItem("pendingEmail");
    request
      .post("v2/auth/signup/verify", { email, otp })
      .then((response) => {
        console.log("Full data: ", response);
        console.log("Data: ", response.data);

        localStorage.setItem(
          "userToken",
          response.data.data.tokens.accessToken,
        );
        localStorage.setItem(
          "refreshToken",
          response.data.data.tokens.refreshToken,
        );
        localStorage.removeItem("pendingEmail");
        setUser(response.data.data.user);
        toast.success(response.data.data.message);
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Sms kodda xatolik!");
      })
      .finally(() => setLoading(false));
  };

  // HandleLogin
  const handleLogin = (params) => {
    setLoading(true);
    request
      .post("v2/auth/signin/init", params)
      .then(() => {
        toast.success("Emailgizga sms xabarnoma jo'natdik!");
        localStorage.setItem("pendingEmail", params.email);
        navigate("/verify?type=signin");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Sms kodda xatolik");
      })
      .finally(() => setLoading(false));
  };

  // HandleSigninVerify
  const handleSigninVerify = (otp) => {
    setLoading(true);
    const email = localStorage.getItem("pendingEmail");
    console.log("email", email);
    console.log("otp", otp);

    request
      .post("/v2/auth/signin/verify", { email, otp })
      .then((response) => {
        console.log("Login data:", response.data);

        localStorage.setItem(
          "userToken",
          response.data.data.tokens.accessToken,
        );
        localStorage.setItem(
          "refreshToken",
          response.data.data.tokens.refreshToken,
        );
        localStorage.removeItem("pendingEmail");
        setUser(response.data.data.user);
        toast.success("Xush kelibsiz!");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Sms kodda xatolik");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Logout
  const handleLogout = () => {
    request
      .post("/v2/auth/logout", {
        refreshToken: localStorage.getItem("refreshToken"),
      })
      .finally(() => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("pendingEmail");
        setUser(null);
        navigate("/login");
      });
  };

  const values = {
    user,
    loading,
    handleRegister,
    login: handleLogin,
    logout: handleLogout,
    handleSignupVerify,
    handleSigninVerify,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
