import axios from "axios";


const URL = import.meta.env.PROD ? '' : 'http://localhost:3001'


const instance = axios.create({
  baseURL: URL
})

export {instance}