import Vue, { ComponentOptions, AsyncComponent } from 'vue'
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent
import { RouteConfig as RouteItem } from 'vue-router'
export interface RouteConfig
    extends Pick<
        RouteItem,
        Exclude<keyof RouteItem, 'meta' | 'component' | 'path'>
    > {
    /**
     * 路由唯一标识
     */
    path: string
    children?: Array<RouteConfig>
    component?: Component
    meta: {
        menuName: string
        showInLeftMenu?: boolean
        // 左侧菜单栏高亮的菜单
        highLightActive?: string
        // 外部链接
        link?: string
        // 跳转外部链接的方式
        target?: '_blank' | '_self' | '_parent' | '_top'
        menuIcon?: string
        permission?: string | Array<string>
    }
}
export declare class HuskyLeftMenu extends Vue {
    menuData: Array<RouteConfig>
    defaultActive: string
    isCollapse: boolean
}
