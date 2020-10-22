import { User } from "../models/authModel"
import { internalAxios } from "./axios"


export interface ICredentials {
    email: string
    password: string
}

export interface IPayload {
    username: string
    email: string
    password: string
    //firstName: string
    //lastName: string
}

export const signupRequest = async (credentials: IPayload) => {
    return await internalAxios.post<Response>('/members/register', credentials)
    //console.log(response)
    //const res = [];
    //res.push(response.status)
    //res.push(response.data)
    //return res
}

export const loginRequest = async (credentials: ICredentials) => {
    const response = await internalAxios.post('/login', credentials)
    console.log(response)
    return response
}

export const registerUser = async () => {
    const response = await internalAxios.get('/register');
    console.log(response)
}
