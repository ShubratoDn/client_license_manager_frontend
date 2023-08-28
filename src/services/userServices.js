import { axiosRequest } from "./AxiosUtils"


//user Signup service
export const userSignUp = async (data) => {
    return await axiosRequest.post("/register", data)
        .then((resp) => resp);
}


//user login service
export const userLogin = async (data) =>{
    return await axiosRequest.post("/login", data)
        .then((resp)=>resp);
}