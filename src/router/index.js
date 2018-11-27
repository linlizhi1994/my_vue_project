import VueRouter from "vue-router"
import Vue from "vue"
import msite from "../page/Msite/MSite"
import order from "../page/Order/Order"
import proflie from "../page/Proflie/Profile"
import search from "../page/Search/Search"
import login from "../page/Login/login"
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:"/msite",
      component:msite,
      meta:{
        isShow:true
      }
    },
    {
      path:"/order",
      component:order,
      meta:{
        isShow:true
      }
    },
    {
      path:"/proflie",
      component:proflie,
      meta:{
        isShow:true
      }
    },
    {
      path:"/search",
      component:search,
      meta:{
        isShow:true
      }
    },
    {
      path:"/login",
      component:login
    },
    {
      path:"/",
      redirect:"/msite"
    }
  ]
})
