import { axiosInstance } from "../../network/axios";
const token=localStorage.getItem("auth");
export const register=async(user)=> await axiosInstance.post("/register",user)
export const login=async(user)=> await axiosInstance.post("/login",user)
export const contactus=async(user)=> await axiosInstance.post("/contactus",user)
export const editProfile=async(user)=> await axiosInstance.patch("/profile",user,{Headers:{
    authorization:token.token
}})

