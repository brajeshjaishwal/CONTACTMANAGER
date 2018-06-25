import Axios from "axios";

export const client = Axios.create( {
    baseURL: 'http://localhost:3030',
    headers: { "Content-Type": "application/json" }
})