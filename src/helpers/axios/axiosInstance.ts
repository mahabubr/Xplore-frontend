import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3MTgzZDgyLTcwMGEtNGJhMi1iMjBhLTlmOTc3NjA0ZDI0NCIsImVtYWlsIjoiemFoaWRAaG9zc2Fpbi5jb20iLCJyb2xlIjoidG91cmlzdCIsImlhdCI6MTY5NzM3MzM4MSwiZXhwIjoxNjk4MjM3MzgxfQ.jQXkJftF8mSan85CGoQZ9YykEubMPd7jta-LBJtpZeE";
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export { instance };
