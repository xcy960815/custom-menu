<template>
  <el-menu
    :default-active="defaultActive"
    class="layout-aside-menu"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :collapse="collapse"
    :collapse-transition="false"
    :router="true"
  >
    <menu-item v-for="route in menuData" :route="route" :collapse="collapse" :key="route.name"></menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { RouteConfig } from '../types/husky-left-menu'
import MenuItem from './menu-item.vue'
@Component({
  components: {
    MenuItem,
  },
})
export default class HuskyLeftMenu extends Vue {
  @Prop(Array)
  menuData!: Array<RouteConfig>

  @Prop(String)
  defaultActive!: String

  @Prop({
    type: Boolean,
    default: false,
  })
  collapse!: Boolean

  @Prop({
    type: String,
    default: '#001529',
  })
  backgroundColor!: String

  @Prop({
    type: String,
    default: 'rgba(255,255,255,.65)',
  })
  textColor!: String

  @Prop({
    type: String,
    default: '#fff',
  })
  activeTextColor!: String

  // mounted() {
  //   console.log(this.$slots)
  // }
}
</script>

<style lang="less">
.el-menu {
  border: none;
}
</style>
