import Vue, { ComponentOptions, AsyncComponent } from 'vue'
import { RedirectOption } from 'vue-router'
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

export interface RouteConfig {
  path: string
  name?: string
  component?: Component
  redirect?: RedirectOption
  children?: Array<RouteConfig>
  meta: {
    needChild?: boolean
    menuName: string
    showInLeftMenu?: boolean
    // showInHeaderMenu?: boolean
    // 左侧菜单栏高亮的菜单
    highLightActive?: string
    // 外部链接
    link?: string
    // 跳转外部链接的方式
    target?: '_blank' | '_self' | '_parent' | '_top'
    menuIcon?: string
    permisson?: string | Array<string>
  }
}
export declare class HuskyLeftMenu extends Vue {
  menuData: Array<RouteConfig>
  defaultActive: string
  isCollapse: boolean
}
