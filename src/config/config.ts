// ? 全局不动配置项 只做导出不做修改

// * 首页地址（默认）
export const HOME_URL: string = '/home/index'

// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址，暂时没用）
export const TABS_BLACK_LIST: string[] = ['/403', '/404', '/500', '/layout', '/login', '/dataScreen']

// * 高德地图key
export const MAP_KEY: string = '9a5a18aea1cd9885a9026995a396bc8d'
export const MAP_URL: string = import.meta.env.VITE_A_MAP_URL
