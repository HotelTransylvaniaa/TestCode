import { axiosInstance } from "../../network/axios";

let authToken = ""
if (localStorage.getItem("auth")) {
  authToken = JSON.parse(localStorage.getItem("auth"));
  console.log(authToken.token);
}

export const register = async (user) =>
  await axiosInstance.post("/register", user);
export const login = async (user) => await axiosInstance.post("/login", user);
export const contactus = async (user) =>
  await axiosInstance.post("/contactus", user);
export const editProfile = async (user) =>
  await axiosInstance.put("/profile", user, {
    headers: {
      authorization: user.token,
    },
  });
