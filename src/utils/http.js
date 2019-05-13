import axios from 'axios'
import qs from 'qs'
// axios配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = ''

// 拦截器，axios.interceptors.request.use发送请求前处理
// POST传参数序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post' || config.method === 'put' || config.method === 'get') {
        config.data = qs.stringify(config.data)
        return config
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// axios.interceptors.response.use接受返回后，回调之前处理处理
axios.interceptors.response.use((res) => {
    // if (!res.data.success) {
    //   return Promise.reject(res)
    // }
    return res
}, (error) => {
    return Promise.reject(error)
})

// 封装get方法
export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        alert ('params=' + JSON.stringify(params)  )
        axios.get(url, {params: qs.stringify(params)}).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}

// 封装post方法
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data) ).then(response => {
            resolve(response, qs.stringify(data))
        }, err => {
            reject(err)
        })
    })
}

// 封装patch请求
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}

// 封装put请求
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        })
    })
}