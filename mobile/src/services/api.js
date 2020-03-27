import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://192.160.0.11:3333'
})

export default api;