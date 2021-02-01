import request from '@/utils/request'

export function login(username, password, code, uuid) {
    return request({
        url: '/login/login',
        method: 'post',
        data: {
            username,
            password,
            code,
            uuid
        }
    })
}

export function getInfo() {
    return request({
        url: '/login/info',
        method: 'get'
    })
}

export function getCodeImg() {
    return request({
        url: '/login/code',
        method: 'get'
    })
}

export function logout(){
    return request({
        url: '/login/logout',
        method: 'delete'
    })
}
