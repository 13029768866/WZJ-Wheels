import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'

Vue.component('wzj-button',Button)
Vue.component('wzj-icon',Icon)
Vue.component('wzj-button-group',ButtonGroup)


new Vue({
    el:'#app',
    data:{
        loddingStatus:false,
        loddingStatus1:false,
        loddingStatus2:false
    }
})