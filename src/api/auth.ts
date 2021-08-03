import request from '@/utils/request';

const api = {
    login: '/auth/login',
    register: '/auth/register'
}


export function login(data: any):any {
    return request({
        url: api.login,
        method: 'post',
        data
    })
}


export function register(data: any):any {
    return request({
        url: api.register,
        method: 'post',
        data
    })
}