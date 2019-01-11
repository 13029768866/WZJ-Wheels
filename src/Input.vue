<template>
    <div
            class="wrapper"
            :class="{error}"
    >
        <input
                :value = "value"
                :disabled="disabled"
                :readonly ="readonly"
                type="text"
        >
        <template v-if="error">
            <icon class="error_icon" buttonIconName="error"></icon>
            <span class="error_msg">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import Icon from './Icon'
    export default {
        name: "WzjInput",
        components:{Icon},
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default: false
            },
            error:{
                type:String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:14px;
    $red:#F1453D;
    .wrapper{display: inline-flex;font-size:$font-size;align-items: center;
        *:not(:last-child){margin-right:5px;}
        >input{
            height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding:  0 8px;
            &:hover{border: 1px solid $border-color-hover;}
            &[disabled]{border-color:#bbb;color:#bbb;cursor: not-allowed;}
        }
    }
    .error{
        >input{border-color: $red;}
        .error_icon{font-size: 1.5em;fill: $red;}
        .error_msg{color: $red;}

    }
</style>