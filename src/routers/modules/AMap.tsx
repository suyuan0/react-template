import { RouteObject } from '../interface/index'
import AMap from '@/views/AMap/Index'
import routePath from "@/config/routePath";

const AMapRoute: Array<RouteObject> = [
	{
		element: <AMap />,
		path: routePath.MAP_PATH,
		meta: {
			title: '地图'
		}
	}
]

export default AMapRoute
