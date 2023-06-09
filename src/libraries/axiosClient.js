// import axios from "axios";
// import { API_URL } from "../constants/URLS";

// const axiosClient = axios.create({
//   baseURL: API_URL,
// });

// // REQUEST
// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = window.localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] =
//         "Bearer " + window.localStorage.getItem("token");
//     }

//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// // RESPONSE
// // interceptors là middleware ở phía client
// // interceptors.respeonse tất cả những gì response trả về nó sẽ chui vào middleware này
// axiosClient.interceptors.response.use(
//   async (response) => {
//     const { token, refreshToken } = response.data;
//     // LOGIN
//     if (token) {
//       window.localStorage.setItem("token", token);
//     }
//     if (refreshToken) {
//       window.localStorage.setItem("refreshToken", refreshToken);
//     }

//     return response;
//   },
//   async (error) => {
//     if (error?.response?.status !== 401) {
//       return Promise.reject(error);
//     }

//     const originalConfig = error.config;

//     if (error?.response?.status === 401 && !originalConfig.sent) {
//       console.log("Error 🚀", error);
//       originalConfig.sent = true;
//       try {
//         // Trường hợp không có token thì chuyển sang trang LOGIN
//         const token = window.localStorage.getItem("token");
//         if (!token) {
//           // window.location.href = "/account";
//           return Promise.reject(error);
//         }

//         const refreshToken = window.localStorage.getItem("refreshToken");
//         if (refreshToken) {
//           const response = await axiosClient.post("/customers/refresh-token", {
//             refreshToken: refreshToken,
//           });

//           const { token } = response.data;
//           window.localStorage.setItem("token", token);

//           originalConfig.headers = {
//             ...originalConfig.headers,
//             authorization: `Bearer ${token}`,
//           };

//           return axiosClient(originalConfig);
//         } else {
//           return Promise.reject(error);
//         }
//       } catch (err) {
//         return Promise.reject(err);
//       }
//     }
//   }
// );

// export { axiosClient };
