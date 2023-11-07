import axios from "axios";

export const APIEnpoint=axios.create({
    baseURL:"https://etechpolltesting.onrender.com/"
})