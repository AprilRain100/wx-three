import fly from '../utils/http'
// import qs from 'qs'

export const loginMini = params => fly.post('/user/login/loginMini', params)
