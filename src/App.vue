<template>
  <div id="app">
    <Menu
      :menu-data="menuData"
      :collapse="isCollapse"
      style="height:100%;"
      :default-active="defaultActive"
    >
      <span slot="real-time-develop" style="color:#fff;">哈哈哈</span>
      <span slot="task-list" style="color:#fff;">{{count}}</span>
      <!-- /task-list/dev-task -->
      <span slot="/task-list/dev-task" style="color:#fff;margin-right:10px;">哈哈哈111</span>
    </Menu>
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
  isCollapse: boolean = false
  count: number = 0
  // mounted() {
  //   setInterval(() => {
  //     this.count++
  //   }, 1000)
  // }
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
  width: 200px;
}
</style>