import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from '@/routers/interface'
import Home from '@/views/home/index'

// 导入所有router
// const metaRouters = import.meta.glob('./modules/*.tsx')
//
// // 处理路由
// export const routerArray: RouteObject[] = [];
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key]);
// 	});
// });

export const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/home' />
	},
	{
		path: '/home',
		element: <Home />,
		meta: {
			requiresAuth: false,
			title: '首页',
			key: 'home'
		}
	},
	{
		path: '*',
		element: <Navigate to='/404' />
	}
]

const Router = () => {
	return useRoutes(rootRouter)
}

export default Router
