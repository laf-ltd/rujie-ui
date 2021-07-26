import axios from 'axios'
import { AxiosResponse } from 'axios'

const request = axios.create({
    // API 默认请求前缀
    baseURL: import.meta.env.VUE_APP_API_BASE_URL as string | undefined,
    // 请求超时
    timeout: 60000
})


// 异常拦截处理器
const errorHandler = (error: { message: string }) => {
    // loading.close()
    console.log(`err${error}`)
    // ElNotification({
    //     title: '请求失败',
    //     message: error.message,
    //     type: 'error'
    // })
    return Promise.reject(error)
}

request.interceptors.request.use(config => {
    const token = "";
    if (token) {
        config.headers['Access-Token'] = token
    }
    return config;
}, errorHandler);



request.interceptors.response.use((response: AxiosResponse<any>) => {

    const { data } = response;

    if (data.code != 200) {
        if (data.code == 401) {
            //登出跳转
        }

        return Promise.reject(new Error(data.msg || 'Error'))
    }

    return response;
}, errorHandler);


export default request;