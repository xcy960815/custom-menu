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
  <el-menu-item v-else-if="route && route.meta.link" :index="route.meta.link" :router="false">
    <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
    <a
      slot="title"
      :target="route.meta.target"
      class="link-dom"
      :href="route.meta.link"
    >{{ route.meta.menuName}}</a>
  </el-menu-item>
  <el-menu-item v-else-if="route && route.path" :index="route.path">
    <i v-if="route.meta.menuIcon" :class="route.meta.menuIcon"></i>
    <span slot="title">{{ route.meta.menuName}}</span>
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
  // contentWidthGtElementWidth(text: string) {
  //   // const spanNode = document.createElement('span') as HTMLSpanElement
  //   // spanNode.innerHTML = text
  //   // spanNode.className = 'getTextWidth'
  //   // ;(document.querySelector('body') as HTMLBodyElement).appendChild(spanNode)
  //   // const width = (document.querySelector('.getTextWidth') as any).offsetWidth
  //   // ;(document.querySelector('.getTextWidth') as HTMLSpanElement).remove()

  //   // const customElMenuItem: any = document.getElementsByClassName('.el-menu')
  //   // console.log('customElMenuItem', customElMenuItem)
  //   // return customElMenuItem.offsetWidth < width
  //   if (text === '实时开发实时开发实时开发实时开发实时开发实时开发') {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
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
/deep/.is-active {
  background-color: #1890ff;
}
.link-dom {
  display: block;
  text-decoration: none; //去掉默认下滑线
  color: #fff; //设置默认颜色
}
.custom-el-menu-item {
  // position: relative;
  overflow: hidden;
  // display: flex;
  .custom-el-menu-tooltip {
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap;
  }
}
</style>