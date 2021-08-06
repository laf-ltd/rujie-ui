import { login, register } from '@/api/auth'
import storage from 'store2'
import { defineStore } from 'pinia'
import { store } from '@/store'

interface UserState {
    name?: string;
    token?: string;
    info: Object
}

export const userStore = defineStore({
    id: 'app-user',
    state: (): UserState => ({
        name: undefined,
        info: {},
        token: undefined
    }),
    getters: {
        getToken(): undefined | string {
            return this.token;
        }
    },
    actions: {
        setToken(token: string | undefined) {
            this.token = token
        },
        async loginAction(params: any): Promise<Object | null> {
            try {
                const data = await login(params);
                this.setToken(data.token);
                return data;
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
})

export function useUserStore() {
    return userStore(store)
}
