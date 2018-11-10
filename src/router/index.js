import Vue from 'vue'
import Router from 'vue-router'
const HomeIndex = resolve => require(['@/components/yangguan/Index'], resolve) //官网-首页

Vue.use(Router)
export default new Router({
    // 选中状态
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        // 官网移动版
        {path: '/',component: HomeIndex},
    ]
})

// 创建根实例
// new Vue({
//   el: '#example',

// })