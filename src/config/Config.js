import axios from "axios";
 export const APIEnpoint = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_URL
})

