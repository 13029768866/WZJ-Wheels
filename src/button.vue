<template>
    <button class="wzj-button" :class="{[`wzj-iconPosition-${iconposition}`]:true}">
        <wzj-icon :buttonIconName="icon"></wzj-icon>
        <div class="buttonContent">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon:{},
            iconposition:{
                type:String,
                default: 'left',
                validator: function (value) {
                    console.log(value)
                    return !(value !== 'left' && value !== 'right')
                }
            }
        }
    }

</script>
<style lang="scss">
    .wzj-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-siez);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        /*vertical-align: middle;*/
        &:hover {border-color: var(--border-color-hover);}
        &:active{background-color: var(--button-active-bg);}
        &:focus {outline: none;}
    }
    .wzj-iconPosition-left{
        .icon{order: 1;margin-right: 3px;}
        .buttonContent{order: 2;}
    }
    .wzj-iconPosition-right{
        .icon{order: 2;margin-left: 3px;}
        .buttonContent{order: 1;}
    }
</style>