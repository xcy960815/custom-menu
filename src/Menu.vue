<template>
  <el-menu
    :default-active="defaultActive"
    class="layout-aside-menu"
    background-color="#001529"
    text-color="rgba(255,255,255,.65)"
    active-text-color="#fff"
    :collapse="isCollapse"
    :collapse-transition="false"
    :router="true"
  >
    <menu-item v-for="route in menuData" :route="route" :key="route.path"></menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { RouteConfig } from '../types/husky-left-menu'
import MenuItem from './menu-item.vue'
@Component({
  components: {
    MenuItem
  }
})
export default class Menu extends Vue {
  @Prop(Array)
  menuData!: Array<RouteConfig>

  @Prop(String)
  defaultActive!: String

  @Prop(Boolean)
  isCollapse!: Boolean
}
</script>

<style lang="less">
</style>
