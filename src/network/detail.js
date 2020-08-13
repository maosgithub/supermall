import {request} from './request'

export function getDetail(itemId){
    return request({
        url:'/detail',
        params:{
            itemId
        }
    })
}
export function getDetailRecommend() {
  return request({
    url: "/detail/recommend",
    methods: "GET"
  });
}
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.oldPrice = itemInfo.highPrice;
      this.lowNowPrice = itemInfo.lowNowPrice;
      this.price = itemInfo.lowNowPrice;
      this.discountBgColor = itemInfo.discountBgColor;
      this.discountDesc = itemInfo.discountDesc;
  
      this.columns = columns;
  
      this.services = services;
    }
  }
  
  export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo; //字符串
      this.score = shopInfo.score; //数组
      //this.fans = shopInfo.cFans;
      this.goods = shopInfo.cGoods;
      this.sells = shopInfo.cSells;
      this.name = shopInfo.name;
      this.url = shopInfo.shopUrl;
      
    }
  }
  
  export class GoodsParam {
    constructor(info, rule) {
      this.image = info.images ? info.images[0] : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
  