import Vue from 'vue'
import { Menu, MenuItem, Submenu } from 'element-ui'
import App from './App.vue'

Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
