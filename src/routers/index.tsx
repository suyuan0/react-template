import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'
import Home from '@/views/home/index'
import routePath from '@/config/routePath'

// 导入所有router
const metaRouters = import.meta.globEager('./modules/*.tsx')
// 处理路由
export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach(item => {
	// @ts-ignore
	Object.keys(metaRouters[item]).forEach((key: any) => {
		// @ts-ignore
		routerArray.push(...metaRouters[item][key])
	})
})
export const rootRouter: RouteObject[] = [
	{
		path: routePath.DEFAULT_PATH,
		element: <Navigate to='/home' />
	},
	{
		path: routePath.HOME_URL,
		element: <Home />,
		meta: {
			requiresAuth: false,
			title: '首页',
			key: 'home'
		}
	},
	...routerArray,
	{
		path: '*',
		element: <Navigate to='/404' />
	}
]

const Router = () => {
	return useRoutes(rootRouter)
}

export default Router
