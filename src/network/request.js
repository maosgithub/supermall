import axios from 'axios'



export function request(config) {
    const instance = axios.create({
        baseURL: "https://www.wanshaohua.com",
        timeout: 5000
    })
    instance.interceptors.request.use(
        res => {

            return res
        },
        err => {
            console.log(err);
        }

    )
    instance.interceptors.response.use(
        res=>{
            return res.data
        },
        err => {
            console.log(err);
        }
    )
    return instance(config)
}