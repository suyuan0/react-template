import React from 'react'
import { RouteObject } from '../interface/index'
// import { LayoutsIndex } from '../constant'
import lazyLoad from '../utils/lazyLoad'
import routePath from '@/config/routePath'

const WlfMeta60Pro: Array<RouteObject> = [
    // {
    //     element: <LayoutsIndex />,
    //     meta: {
    //         title: '个人主页'
    //     },
    //     children: [
    //         {
    //             path: routePath.wlfMeta60Pro,
    //             element: lazyLoad(React.lazy(() => import('@/views/WlfMeta60Pro/index'))),
    //             meta: {
    //                 title: '个人主页'
    //             }
    //         }
    //     ]
    // }
    {
        path: routePath.sjrMeta60Pro,
        element: lazyLoad(React.lazy(() => import('@/views/SjrMeta60Pro/index'))),
        meta: {
            title: '个人主页'
        }
    }
]
export default WlfMeta60Pro
