<template>   
  <div 
    class="tab-bar-item" 
    :style="activeStyle"
    @click="tabClick"
  >
      <slot name='item-icon'></slot>
      <slot name='item-text'></slot>
  </div>   
</template>



<script>
export default {
    name: 'TabBarItem',
    props:{
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        tabClick(){            
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive?{color: this.activeColor}: {}
        }
    }
}
</script>

<style lang="stylus" scoped>
.tab-bar-item
    flex 1
    box-sizing border-box
    text-align center
    height 49px
    padding-top 3px
    font-size 14px
    i
        font-size 24px

</style>