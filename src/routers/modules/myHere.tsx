import { RouteObject } from '../interface/index'
import lazyLoad from '@/routers/utils/lazyLoad'
import React from 'react'

const MyHere: Array<RouteObject> = [
	{
		path: '/myHere',
		element: lazyLoad(React.lazy(() => import('@/views/MyHere/index'))),
		meta: {
			title: 'My Here'
		}
	}
]

export default MyHere
