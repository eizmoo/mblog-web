//导入axios实例文件中方法
import { get, post, put, deletes } from './all-http';
// let bsae_api = 'http://localhost:8898/mblog'
let base_api = '/mblog'

// // //根据id获取用户信息
// // export const getUserInfoById = (id) => {
// //     return get(`${bsae_api}/web/user/${id}`);
// // }

export const login = (account, password) => {
    return post(`${base_api}/user/login`, {
        account: account,
        password: password
    });
}
//获取文章类型list
export const getTypeListHttp = () => {
    return get(`${base_api}/articles-type/`, {});
}
//新增文章类型
export const addTypeHttp = (name, description) => {
    return post(`${base_api}/articles-type/`, {
        name: name,
        description: description
    });
}
//展示指定类型的文章
export const getTypeArticleListHttp = (id) => {
    return get(`${base_api}/articles/type/${id}`, {})
}
//展示指定文章的origin
export const getArticleOriginHttp = (id) => {
    return get()
}

// 基本用法
// import API from '@/utils/api'
// getUserInfo(){
//     API.getUserInfoById('01).then((result)=>{
//      }).catch((error)=>{
//    })
//   }