import axios from "axios"

const URL="https://jsonplaceholder.typicode.com"
export const getAllUsers = async () => await axios.get(`${URL}/users`)
export const getAllProduct = async () => await axios.get(`${URL}/photos`)
export const getAllOrders = async () => await axios.get(`${URL}/photos`)


