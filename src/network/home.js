import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
export function getHomeFeaturedata(){
    return request({
        url:'/home/feature'
    })
}