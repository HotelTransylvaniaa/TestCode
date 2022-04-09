import { axiosInstance } from "../../network/axios"



export const register=async(user)=> await axiosInstance.post("/register",user)
export const login=async(user)=> await axiosInstance.post("/login",user)
export const contactus=async(user)=> await axiosInstance.post("/contactus",user)
export const editProfile=async(user)=> await axiosInstance.patch("/profile",user)

