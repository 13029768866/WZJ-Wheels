import Vue from "vue";
import Router from "vue-router";

const Home = () => import('./views/home/Home')
const Category = () => import('./views/category/Category')
const Cart = () => import('./views/cart/Cart')
const Mine = () => import('./views/mine/Mine')

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/mine',
      component: Mine
    }
  ]
});
