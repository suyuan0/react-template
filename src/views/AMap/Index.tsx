import React, { useEffect, useState } from 'react'
import { aMapIpAPI, aMapWeatherAPI } from '@/api/modules/aMap'
import { aMapApiFace, aMapWeather } from '@/api/modules/aMap/interFace'
import {Button} from "antd";

const AMap: React.FC = (): React.ReactNode => {
	// 位置信息
	const [positionInfo, setPositionInfo] = useState<aMapApiFace>()
	// 天气信息
	const [weatherInfo, setWeatherInfo] = useState<Array<aMapWeather.castsItem>>()
	// 获取当前所在位置
	const getPostitionInfo = async () => {
		try {
			const res = await aMapIpAPI()
			setPositionInfo(res)
			const weather: aMapWeather.resDataAll = await aMapWeatherAPI({ city: 370200, extensions: 'all' })
			setWeatherInfo(weather.forecasts[0].casts)
		} catch (e) {
			console.log(e, '获取位置信息')
		}
	}
	useEffect(() => {
		getPostitionInfo()
		return () => {
			// TODO 销毁组件
			console.log(123)
		}
	}, [])
	return (
		<div>
			<Button type='primary'>Primary Button</Button>
			<Button type='dashed'>Primary Button</Button>
			<Button>Primary Button</Button>
			<br/>
			{JSON.stringify(positionInfo)}
			<br />
			<br />
			{JSON.stringify(weatherInfo)}
		</div>
	)
}
export default AMap
