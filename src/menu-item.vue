<template>
  <!-- 递归组件 -->
  <el-submenu v-if="route && route.children && route.children.length > 0" :index="route.name || ''">
    <template slot="title">
      <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
      <span slot="title">{{ route.meta.menuName }}</span>
    </template>
    <template v-for="childRoute in route.children">
      <menu-items :route="childRoute" :key="childRoute.name"></menu-items>
    </template>
  </el-submenu>
  <el-menu-item
    v-else-if="route && (route.meta.link || route.path)"
    :index="route.meta.link ? '' : route.path"
  >
    <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
    <a
      v-if="route.meta.link"
      :target="route.meta.target"
      class="link-dom"
      :href="route.meta.link"
      slot="title"
    >{{ route.meta.menuName }}</a>
    <span v-else slot="title">{{ route.meta.menuName }}</span>
  </el-menu-item>
  <el-menu-item
    v-else-if="route && route.redirect"
    :index="route.name"
    :route="redirectRoute(route.redirect)"
  >
    <span slot="title">{{ route.meta.menuName }}</span>
  </el-menu-item>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'MenuItems'
})
export default class MenuItems extends Vue {
  @Prop({ default: null })
  route: any
  redirectRoute(redirectOptions: string | Function) {
    if (typeof redirectOptions === 'function') {
      redirectOptions = redirectOptions.call(this, this.$route)
    }
    return redirectOptions
  }
}
</script>
<style lang='less' scoped>
.el-menu-item {
  cursor: pointer;
  color: red;
  a {
    text-decoration: none; //去掉默认下滑线
    color: #ffffff; //设置默认颜色
  }
}
.el-menu-item.is-active {
  background: #1890ff !important;
}
.el-submenu .el-menu-item {
  a {
    display: block;
    text-decoration: none; //去掉默认下滑线
    color: #fff; //设置默认颜色
  }
}
</style>