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
        loadingStatus:false,
        loadingStatus1:false,
        loadingStatus2:false
    }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect

// icon单元测试
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector('use')
    // console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    // 主观推断是否满足期待
    expect(href).to.eq('#icon-settings')
    button.$el.remove()
    button.$destroy()
}

//loading单元测试
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    button.$mount()
    // 主观推断
    let useElement = button.$el.querySelector('use')
    // console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    // 是否满足期待
    expect(href).to.eq('#icon-loading')
    button.$el.remove()
    button.$destroy()
}
//