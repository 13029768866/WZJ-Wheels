import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'
import Input from './Input'
import Row from './Row.vue'
import Col from './Col.vue'

Vue.component('wzj-button',Button)
Vue.component('wzj-icon',Icon)
Vue.component('wzj-button-group',ButtonGroup)
Vue.component('wzj-input',Input)
Vue.component('wzj-row',Row)
Vue.component('wzj-col',Col)


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
import spies from 'chai-spies'
chai.use(spies)
// icon单元测试
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    vm.$mount(div)
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    // 主观推断是否满足期待
    expect(href).to.eq('#icon-settings')
    vm.$el.remove()
    vm.$destroy()
}

//loading单元测试
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    vm.$mount()
    // 主观推断
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement);
    let href = useElement.getAttribute('xlink:href')
    // 是否满足期待
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
//iconposition单元测试
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm  = new Constructor({
		propsData:{
			icon: 'settings',
			iconposition: 'right'
		}
	})
	vm.$mount(div)
	let svg = vm.$el.querySelector('svg')
	let { order } = window.getComputedStyle(svg)
	expect(order).to.eq('2')
	vm.$el.remove()
	vm.$destroy()
}
//iconposition单元测试
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm  = new Constructor({
		propsData:{
			icon: 'settings',
			iconposition: 'right'
		}
	})
	vm.$mount(div)
	let svg = vm.$el.querySelector('svg')
	let { order } = window.getComputedStyle(svg)
	expect(order).to.eq('2')
	vm.$el.remove()
	vm.$destroy()
}
//点击事件测试单元测试
{
	const Constructor = Vue.extend(Button)
	const vm  = new Constructor({
		propsData:{
			icon: 'settings'
		}
	})
	vm.$mount()
	let spy = chai.spy(function(){
		console.log(1)
	})
	vm.$on('click',spy)
	
	let button = vm.$el
	button.click()	
	// 期望spy执行
	expect(spy).to.have.been.called()
}