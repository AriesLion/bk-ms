import { fetch, post } from '../utils/http'

// test

export const getCode = (param) => fetch('https://ad.baikemy.com/', param)

export const sendMessage = (param) => post('ad/getadcode/1002/0', param)

export const getSearchData = (param) => fetch('http://192.168.2.13:8090/', param)