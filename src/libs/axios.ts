import axios from "axios";


export const URL = import.meta.env.PROD ? 'https://skinsmania.onrender.com' : 'http://localhost:3001'


const instance = axios.create({
  baseURL: URL
})

export {instance}