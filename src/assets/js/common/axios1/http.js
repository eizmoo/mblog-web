'use strict'

import axios from 'axios'
import qs from 'qs'
import querystring from 'querystring'

axios.interceptors.request.use(config => {
  // 验证登录
  if (localStorage.token) {
    //如果token是否存在，将token设置成请求头
    config.headers.Authorization = localStorage.token;
  }
  return config;
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400 || response.status === 204)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    message: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404 || res.data.success === false) {
    // this.$message.error(res.message);
  }
  // if (res.data && (!res.data.success)) {
  //   // alert(res.data.error_msg)
  //   alert(res.data.message)
  // } else {
  return (res.data)
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      // baseURL: 'http://localhost:8898/mblog',
      baseURL: '/mblog',
      url,
      // data: querystring.stringify(data),
      data: data,
      // timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get(url, params) {
    return axios({
      method: 'get',
      // baseURL: 'http://localhost:8898/mblog',
      baseURL: '/mblog',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  put(url, data) {
    return axios({
      method: 'put',
      baseURL: 'mblog',
      url,
      data: data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}