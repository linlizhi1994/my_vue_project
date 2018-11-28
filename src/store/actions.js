import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from "./mutions_type"

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from "../api/index"

 export default {

   async getAddress(store){
     const {latitude,longitude} = store.state
    const result = await reqAddress(longitude,latitude)
     if(result.code === 0){
       const address = result.data
       store.commit(RECEIVE_ADDRESS,{address})
     }
  },

   async getShops(store){
     const result = await reqShops()
     if(result.code === 0){
       const shops = result.data
       store.commit(RECEIVE_SHOPS,{shops})
     }
   },

   async getCategorys(store){
     const {latitude,longitude} = store.state
     const result = await reqFoodCategorys(longitude,latitude)
     if(result.code === 0){
       const foodCategory = result.data
       store.commit(RECEIVE_CATEGORYS,{foodCategory})
     }
   },

}
