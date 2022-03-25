import { axiosInstance } from "../../network/axios"

// export const createConnectAccount=async (token)=>
// await axiosInstance.post("/create-connect-account",{},{
//     headers:{
//         Authorization:`Bearer ${token}`
//     }
// })

export const createConnectAccount = async (token) =>
  await axiosInstance.post(
    "/create-connect-account",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );