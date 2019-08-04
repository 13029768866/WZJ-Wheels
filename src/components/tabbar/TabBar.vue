<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
// 引入初始化css
// @import url();
*{
  margin 0
  padding 0
}
 #tab-bar
    display flex
    position fixed
    left 0
    right 0
    bottom 0
    background-color #eee
    box-shadow 0 -1px 1px rgba(100,100,100,0.3)    
</style>