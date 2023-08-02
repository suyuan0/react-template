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
}
