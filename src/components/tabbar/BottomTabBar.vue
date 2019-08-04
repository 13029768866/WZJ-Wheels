<template>
     <tab-bar>      
      <tab-bar-item path='/home' activeColor='red'>
        <i slot="item-icon" class="iconfont iconzhuye"></i>
        <div slot='item-text'>首页</div> 
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='yellow'>
        <i slot="item-icon" class="iconfont iconfenlei"></i>
        <div slot='item-text'>分类</div> 
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='skyblue'>
        <i slot="item-icon" class="iconfont iconicon01"></i>
        <div slot='item-text'>购物车</div> 
      </tab-bar-item>
      <tab-bar-item path='/mine' activeColor='pink'>
        <i slot="item-icon" class="iconfont iconwode"></i>
        <div slot='item-text'>我的</div> 
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
    name: 'BottomTabBar',
    components: {
        TabBar,
        TabBarItem
    }
    
}
</script>

<style lang="scss" scoped>

</style>