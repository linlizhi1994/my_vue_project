import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from "./mutions_type"


export default {
   [RECEIVE_ADDRESS]:function(state,{address}){
    state.address = address
   },

  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },

  [RECEIVE_CATEGORYS](state,{foodCategory}){
    state.foodCategory = foodCategory
  }

}
