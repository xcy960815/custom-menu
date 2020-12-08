import { RouteConfig } from '../types/husky-left-menu'
export const routes: Array<RouteConfig> = [
    {
        path: '/real-time-develop',
        name: '/real-time-develop',
        meta: {
            menuIcon: 'el-icon-setting',
            menuName: '实时开发',
            slotName: 'real-time-develop',
        },
    },
    {
        path: '/task-list',
        name: '/task-list',
        component: { template: `<router-view />` },
        meta: {
            menuName: '任务列表',
            menuIcon: 'el-icon-setting',
            slotName: 'task-list',
        },
        children: [
            {
                path: '/task-list/dev-task',
                name: '/task-list/dev-task',
                meta: {
                    menuName: '日常任务',
                    slotName: '/task-list/dev-task',
                },
            },
            {
                path: '/task-list/dev-job-version',
                name: '/task-list/dev-job-version',
                meta: {
                    menuName: '日常任务版本',
                    highLightActive: '/task-list/dev-task',
                    showInLeftMenu: false,
                },
            },
            {
                path: '/task-list/online-task',
                name: '/task-list/online-task',
                // 线上任务
                meta: {
                    menuName: '线上任务',
                },
            },
            {
                path: '/task-list/online-task-version',
                name: '/task-list/online-task-version',
                // 线上任务
                meta: {
                    menuName: '线上任务版本',
                    showInLeftMenu: false,
                    highLightActive: '/task-list/online-task',
                },
            },
        ],
    },
    {
        path: '/udf-manage',
        name: '/udf-manage',
        meta: {
            menuIcon: 'el-icon-setting',
            menuName: 'udf管理',
        },
    },
    {
        path: '/data-mock',
        name: '/data-mock',
        meta: {
            menuIcon: 'el-icon-setting',
            menuName: '数据MOCK',
        },
    },
    {
        path: '/table-manager',
        name: '/table-manager',
        meta: {
            menuIcon: 'el-icon-setting',
            menuName: '表管理',
        },
    },
    {
        path: '/table-add',
        name: '/table-add',
        meta: {
            menuIcon: 'el-icon-setting',
            showInLeftMenu: false,
            menuName: '新建表',
            highLightActive: '/table-manager',
        },
    },
    {
        path: '/table-copy',
        name: '/table-copy',
        meta: {
            menuIcon: 'el-icon-setting',
            showInLeftMenu: false,
            menuName: '复制表',
            highLightActive: '/table-manager',
        },
    },
    {
        path: '/table-edit',
        name: '/table-edit',
        meta: {
            menuIcon: 'el-icon-setting',
            showInLeftMenu: false,
            menuName: '编辑表',
            highLightActive: '/table-manager',
        },
    },
    {
        path: '/task-audit',
        name: '/task-audit',
        meta: {
            menuIcon: 'el-icon-setting',
            menuName: '任务审核',
        },
    },
]
