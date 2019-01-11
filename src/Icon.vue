<template>
    <svg v-if="buttonIconName" class="icon">
        <use  :xlink:href="`#icon-${buttonIconName}`"></use>
    </svg>
</template>
<script>
    export default {
        name:'WzjIcon',
        props:['buttonIconName']
    }
</script>
<style>
    .icon{ width: 1em; height: 1em;}
</style>