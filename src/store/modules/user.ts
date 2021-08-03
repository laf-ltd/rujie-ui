import { login, register } from '@/api/auth'
import storage from 'store2'

const user = {
    state: {
        token: '',
        name: '',
        info: {}
    },
    mutations: {
        SET_TOKEN: (state: any, token: string) => {
            state.token = token
        },
        SET_NAME: (state: any, name: string) => {
            state.name = name
        },
        SET_INFO:(state: any, info: string) => {
            state.info = info
        }
    },
    actions:{
        //登录
        Login({ commit } : any, userInfo:Object) {

   
        }
    }

}
