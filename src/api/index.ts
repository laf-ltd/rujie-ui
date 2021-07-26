import request from '../utils/request';

const api = {
    login: 'api/auth/login'
}

export interface loginParam {
    username: String
    password: String
}

export function login(param: loginParam):any {
    return request({
        url: api.login,
        method: 'post',
        data: param
    })
}