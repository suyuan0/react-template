import './index.scss'
import React from 'react'
import '@amap/amap-jsapi-types'

import blockCoordinate from '@/commonData/blockCoordinate'

class MyHere extends React.Component<any, any> {
	/** map实例 */
	mapInstance: AMap.Map | null = null

	registerPlugin() {
		AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBar'], () => {})
	}

	/** 渲染地图 */
	renderMap() {
		const buildingLayer = new AMap.Buildings({
			zIndex: 130,
			merge: false,
			sort: false,
			zooms: [17, 20]
		})
		buildingLayer.setStyle(blockCoordinate)
		this.mapInstance = new AMap.Map('cherry-container', {
			// center: [120.42918, 36.150836],
			center: [116.472268, 39.995693],
			zoom: 17,
			viewMode: '3D',
			rotateEnable: true,
			pitchEnable: true,
			showIndoorMap: false,
			showLabel: false,
			// pitch:80,
			// expandZoomRange: true,
			features: ['bg', 'point', 'road'],
			layers: [new AMap.TileLayer(), buildingLayer]
			// mapStyle: 'amap://styles/macaron'
		})
		// 点标记
		new AMap.Marker({
			map: this.mapInstance,
			position: [120.42918, 36.150836],
			title: 'Hei My Here'
		})
		// 工具条
		const ToolBar = new AMap.ToolBar({
			visible: true
		})
		// 比例尺
		const scale = new AMap.Scale({})
		const Control = new AMap.ControlBar({
			position: {
				left: 1,
				top: 1
			}
		})
		;[ToolBar, scale, Control].forEach(v => {
			// @ts-ignore
			this.mapInstance.addControl(v)
		})
		// @ts-ignore
		new AMap.Polygon({
			bubble: true,
			fillOpacity: 0.4,
			strokeWeight: 1,
			path: blockCoordinate.areas[0].path,
			map: this.mapInstance
		})
	}

	/** 在组件第一次渲染后调用 */
	componentDidMount() {
		this.registerPlugin()
		this.renderMap()
	}

	/** 在组件卸载之前调用 */
	componentWillUnmount() {
		// TODO 卸载高德地图
		this.mapInstance?.destroy()
	}

	render() {
		return <div className='h-full' id='cherry-container'></div>
	}
}

export default MyHere
