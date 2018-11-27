<template>
  <div id="app">
 <router-view></router-view>
<foot-guide v-show="$route.meta.isShow"></foot-guide>
  </div>
</template>

<script>

import footGuide from "./components/footGuide/footGuide"
import {reqAddress} from "./api"
export default {
  name: 'App',
  components:{
    footGuide
   },
  async mounted(){
    var result = await reqAddress(116.36867,40.10038)
    console.log(result)
  }


}
</script>

<style>

</style>
