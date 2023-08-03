import React from 'react'
import { RouteObject } from '../interface/index'
import { LayoutsIndex } from '../constant'
import lazyLoad from '../utils/lazyLoad'
import routePath from '@/config/routePath'

const Monday: Array<RouteObject> = [
	{
		element: <LayoutsIndex />,
		meta: {
			title: '重力失效'
		},
		children: [
			{
				path: routePath.monday.badMood,
				element: lazyLoad(React.lazy(() => import('@/views/Monday/BadMood/Index'))),
				meta: {
					title: '糟糕的周一'
				}
			}
		]
	}
]

export default Monday
