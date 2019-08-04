import axios from 'axios'

// export function http1(config){
//    return new Promise((resolve, reject) => {
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//    })
// }

export function http1(config){
    //  1、创建axios实例
     const instance = axios.create({
         baseURL: 'http://123.207.32.32:8000',
         timeout: 5000
     })

    //  2、axios的拦截器
    // 2.1、请求拦截
    instance.interceptors.request.use(config => { 
        // 1、添加加载正在加载图标
        // 2、验证token并且跳转
        return config
    },err => { 

    })              
    
    // 2.2、响应拦截
    instance.interceptors.response.use(res => {

        return res.data
    },err => {

    })

     return instance(config)
       
 }
 

// export function http2(){

// }