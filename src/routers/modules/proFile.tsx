import React from 'react'
import { RouteObject } from '../interface/index'
import { LayoutsIndex } from '../constant'
import lazyLoad from '../utils/lazyLoad'
import routePath from '@/config/routePath'

const ProFile: Array<RouteObject> = [
	{
		element: <LayoutsIndex />,
		meta: {
			title: '个人主页'
		},
		children: [
			{
				path: routePath.PRO_FILE,
				element: lazyLoad(React.lazy(() => import('@/views/ProFile/ProFile'))),
				meta: {
					title: '个人主页'
				}
			}
		]
	}
]
export default ProFile
