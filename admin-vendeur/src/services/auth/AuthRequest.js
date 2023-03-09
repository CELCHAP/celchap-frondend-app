import { BASE_URL } from "../BaseUrl"
import axios from "axios"

export const signIn = async (values) => {
    return await axios.post(BASE_URL("api/login"), values)
}

export const signUp = async (values) => {
    return await axios.post(BASE_URL("api/register"), values)
}

export const resetPassword = async(values)=>{
    return await axios.post(BASE_URL("reinitialiserpassword"), values)
}