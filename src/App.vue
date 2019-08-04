<template>
  <div id="app">
    <router-view></router-view>
    <bottom-tab-bar></bottom-tab-bar>
  </div>
</template>
<style lang="stylus">

</style>
 
<script>
import BottomTabBar from './components/tabbar/BottomTabBar'
export default {
  name:'App',
  components:{
    BottomTabBar
  }
}
</script>

