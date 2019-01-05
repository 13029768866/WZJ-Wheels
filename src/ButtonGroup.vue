<template>
    <div class="wzj-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            //查看组件加载完成时的所有子元素
            console.log(this.$el.children);
            for(let el of this.$el.children){
                let elName = el.nodeName.toLocaleLowerCase()
                if(elName != 'button'){
                    console.warn(`wzj-button-group的子元素应该都wzj-button,但你写的${elName}并不符合要求`)
                }
            }
        }
    }
</script>
<style lang="scss">
    .wzj-button-group {
        display: inline-flex;
        vertical-align: middle;
        .wzj-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{z-index: 1;}
        }
    }
</style>