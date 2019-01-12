<template>
 <div 
    class="col"
    :class="[`col-${span}`]"
>
     <slot></slot>
</div>    
</template>
<script>
export default {
    name:'WzjCol',
    props:{
        span:{
            type:[Number,String]
        }
    }
}
</script>
<style lang="scss" scoped>
.col{
    height: 50px;
    width: 50%;
    background-color: #ccc;
    border: 1px solid red;

    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
            width: ($n / 24) * 100%;
        }
    }
}
</style>
