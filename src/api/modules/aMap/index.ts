import { MAP_KEY, MAP_URL } from '@/config/config'
import axios from 'axios'
import { aMapApiFace, aMapWeather } from './interFace'

// 获取当前位置信息
export const aMapIpAPI = async (): Promise<aMapApiFace> => {
	return (await axios.get(`${MAP_URL}/v3/ip?key=${MAP_KEY}`)).data
}

// 获取当前位置的天气
export const aMapWeatherAPI = async (params: aMapWeather.requestData) => {
	return (
		await axios.get(`${MAP_URL}/v3/weather/weatherInfo?key=${MAP_KEY}`, {
			params: params
		})
	).data
}
