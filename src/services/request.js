import axios from "axios";

const request = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://api.al-muamalat.uz/api",
});

// Request
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error),
);

// Response
request.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem("userToken");

        const response = await axios.post(
          "https://api.al-muamalat.uz/api/auth/refresh",
          { refreshToken },
        );

        const { accessToken } = response.data;
        localStorage.setItem("userToken", accesstoken);

        error.config.headers["Authorization"] = `Bearer ${accessToken}`;
        return request(error.config);
      } 
      catch {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export { request };
