
import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'http://localhost:5000'
})

export default newsApi