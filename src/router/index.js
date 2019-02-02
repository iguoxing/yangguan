import Vue from 'vue'
import Router from 'vue-router'
const HomeIndex = resolve => require(['@/components/yangguan/Index'], resolve) //官网-首页
const FeatureProject = resolve => require(['@/components/yangguan/Feature'], resolve) //官网-首页
const StudyApplication = resolve => require(['@/components/yangguan/StudyApplication'], resolve) //官网-首页
const uniqueService = resolve => require(['@/components/yangguan/uniqueService'], resolve) //官网-首页

Vue.use(Router)
export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {path: '/',component: HomeIndex,alias:"/home"},
        {path: '/feature',component: FeatureProject},
        {path: '/study',component: StudyApplication},
        {path: '/service',component: uniqueService},
        {path: '*',component: HomeIndex},
        
    ]
})