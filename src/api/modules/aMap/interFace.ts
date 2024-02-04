// 位置信息
export interface aMapApiFace {
	adcode: string
	city: string
	info: string
	infocode: string
	province: string
	rectangle: string
	status: string
}

// 天气
export namespace aMapWeather {
	type extensionsType = 'base' | 'all'
	type outpuType = 'JSON' | 'XML'

	export interface requestData {
		city: number | string
		extensions?: extensionsType
		output?: outpuType
	}

	export interface livesItem {
		adcode: string
		city: string
		humidity: string
		humidity_float: string
		province: string
		reporttime: string
		temperature: string
		temperature_float: string
		weather: string
		winddirection: string
		windpower: string
	}

	export interface resData {
		count: string
		info: string
		infocode: string
		lives: Array<livesItem>
		length: string
		status: string
	}

	export interface castsItem {
		date: string
		daypower: string
		daytemp: string
		daytemp_float: string
		dayweather: string
		daywind: string
		nightpower: string
		nighttemp: string
		nighttemp_float: string
		nightweather: string
		nightwind: string
		week: string
	}

	export interface forecastsItem {
		adcode: string
		casts: Array<castsItem>
		city: string
		province: string
		reporttime: string
	}

	export interface resDataAll {
		count: string
		forecasts: Array<forecastsItem>
		info: string
		infocode: string
		status: string
	}
}
