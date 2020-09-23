<template>
  <div id="app">
    <Menu :menu-data="menuData" :collapse="isCollapse" :default-active="defaultActive">
      <!-- <span>hahah 我是span</span> -->
    </Menu>
    <el-button @click="isCollapse = !isCollapse">handleClick</el-button>
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
}
</script>
<style lang='less'>
html,
body,
#app {
  margin: 0;
  padding: 0;
}
#app {
  width: 200px;
}
</style>