import request from './request.js'

//导航栏
export function footer(params) {
    return request({
        url: '/v1/importExcelPower/powerTrend',
        method: 'GET',
        params
    })
}
