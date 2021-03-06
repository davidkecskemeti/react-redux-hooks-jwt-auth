import axios from 'axios'
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test"

const getPublicContent = () => {
    return axios.get(API_URL + "/all")
}

const getUserBoard = () => {
    console.log(API_URL + "/user" + " called")
    console.log("AUTH:"+authHeader().Authorization)
    return axios.get(API_URL + "/user", {headers: authHeader()})
}

const getModeratorBoard = () => {
    return axios.get(API_URL + "/mod", {headers: authHeader()})
}

const getAdminBoard = () => {
    return axios.get(API_URL + "/admin", {headers: authHeader()})
}

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
}