import Vue from 'vue'
import { Menu, MenuItem, Submenu, Tooltip } from 'element-ui'
import App from './App.vue'

Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
Vue.component(Tooltip.name, Tooltip)
Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
