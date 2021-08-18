<template>
  <div id="app">
    <Menu
      class="menu"
      :menu-data="menuData"
      :collapse="isCollapse"
      style="height: 100%"
      :default-active="defaultActive"
    >
    </Menu>
    <button @click="isCollapse = !isCollapse">展开收起</button>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import Menu from './menu.vue'

import { routes } from './mock'
@Component({
  components: { Menu },
})
export default class App extends Vue {
  menuData = routes
  defaultActive: string = ''
  isCollapse: boolean = true
  count: number = 0
}
</script>
<style lang='less'>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  display: flex;
}
</style>