import axios from "axios";


export const URL = import.meta.env.PROD ? '' : 'http://localhost:3001'


const instance = axios.create({
  baseURL: URL
})

export {instance}