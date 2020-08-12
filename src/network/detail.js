import {request} from './request'

export function getItemdata(itemId){
    return request({
        url:'/detail',
        params:{
            itemId
        }
    })
}