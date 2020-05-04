import axios from 'axios'

const apiBot = axios.create({
    baseURL:'http://192.168.15.15:2121'// exp://192.168.15.15:19000
})

export default apiBot