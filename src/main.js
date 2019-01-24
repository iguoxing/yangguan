// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
Vue.use(ElementUI);
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

// Vue.use(VueResource)
// const app = new Vue({
//   router,
//   store,
//   ...App
// }).$mount('#app')