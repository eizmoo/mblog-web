// import { get, post, deletes, put } from './http.js';//导入axios实例文件中方法
// // let bsae_api = process.env.BASE_API ? './' + process.env.BASE_API : '..' //获取项目api请求地址
// let bsae_api = 'http://localhost:8898/mblog'
// // //根据id获取用户信息
// // export const getUserInfoById = (id) => {
// //     return get(`${bsae_api}/web/user/${id}`);
// // }

// export const login = (account, password) => {
//     return post(`${base_api}/user/login`, {
//         account: account,
//         password: password
//     });
// }
'use strict'
export default {
    sayOk() {
        console.log('fuck')
        return 'ok'
    }
}

// 基本用法
// import API from '@/utils/api'
// getUserInfo(){
//     API.getUserInfoById('01).then((result)=>{
//      }).catch((error)=>{
//    })
//   }