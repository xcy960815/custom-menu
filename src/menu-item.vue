<template>
  <!-- 递归组件 -->
  <el-submenu v-if="route && route.children && route.children.length > 0" :index="route.name">
    <template slot="title">
      <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
      <span>{{ route.meta.menuName }}</span>
    </template>
    <template v-for="childRoute in route.children">
      <menu-items :route="childRoute" :key="childRoute.name"> </menu-items>
    </template>
  </el-submenu>
  <el-menu-item v-else-if="route && route.meta.link" index>
    <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
    <template slot="title">
      <a :target="route.meta.target" class="link-dom" :href="route.meta.link">{{
        route.meta.menuName
      }}</a>
    </template>
  </el-menu-item>
  <el-menu-item v-else-if="route && route.path" :index="route.path">
    <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
    <template slot="title">
      <span>{{ route.meta.menuName }}</span>
    </template>
  </el-menu-item>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { RouteConfig } from '../types/husky-left-menu'
@Component({
  name: 'MenuItems',
})
export default class MenuItems extends Vue {
  @Prop(Object)
  route!: RouteConfig
  redirectRoute(redirectOptions: string | Function) {
    if (typeof redirectOptions === 'function') {
      redirectOptions = redirectOptions.call(this, this.$route)
    }
    return redirectOptions
  }
  @Prop({
    type: Boolean,
    default: false,
  })
  collapse!: boolean
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
.link-dom {
  display: block;
  text-decoration: none; //去掉默认下滑线
  color: #fff; //设置默认颜色
}
.custom-el-menu-item {
  overflow: hidden;
  .custom-el-menu-tooltip {
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap;
  }
}
</style>