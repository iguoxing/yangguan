import Vue from 'vue'
import Router from 'vue-router'
const HomeIndex = resolve => require(['@/components/yangguan/Index'], resolve) //官网-首页
const FeatureProject = resolve => require(['@/components/yangguan/Feature'], resolve) //官网-首页
const StudyApplication = resolve => require(['@/components/yangguan/StudyApplication'], resolve) //官网-首页

Vue.use(Router)
export default new Router({
    // 选中状态
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        // 官网移动版
        {path: '/',component: HomeIndex,alias:"/home"},
        {path: '/feature',component: FeatureProject},
        // {path: '/feature',component: FeatureProject},
        {path: '/StudyApplication',component: StudyApplication},
        
    ]
})

// 创建根实例
// new Vue({
//   el: '#example',

// })