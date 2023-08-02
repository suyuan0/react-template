import React, { useEffect, useState } from 'react'
import { aMapIpAPI, aMapWeatherAPI } from '@/api/modules/aMap'
import { aMapApiFace, aMapWeather } from '@/api/modules/aMap/interFace'

const AMap: React.FC = (): React.ReactNode => {
	// 位置信息
	const [positionInfo, setPositionInfo] = useState<aMapApiFace>()
	// 天气信息
	const [weatherInfo, setWeatherInfo] = useState<Array<aMapWeather.livesItem>>()
	// 获取当前所在位置
	const getPostitionInfo = async () => {
		try {
			const res = await aMapIpAPI()
			setPositionInfo(res)
			const weather = await aMapWeatherAPI({ city: 370200 })
			setWeatherInfo(weather.lives)
		} catch (e) {
			console.log(e, '获取位置信息')
		}
	}
	useEffect(() => {
		getPostitionInfo()
		return () => {
			console.log(123)
		}
	}, [])
	return (
		<div>
			{JSON.stringify(positionInfo)}
			<br /><br/>
			{JSON.stringify(weatherInfo)}
		</div>
	)
}
export default AMap
