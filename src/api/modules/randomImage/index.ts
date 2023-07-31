import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ResultData {
	code: string
	height: string
	imgurl: string
	width: string
}

const config = {
	// 默认请求地址，可在 .env 开头中修改
	baseURL: import.meta.env.VITE_RANDOM_IMAGE_API,
	// 设置超时时间（10s）
	timeout: import.meta.env.VITE_TIME_OUT,
	// 跨域时候允许携带凭证
	withCredentials: true
}

class randomImageHttp {
	service: AxiosInstance

	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config)

		// 请求拦截器
		this.service.interceptors.request.use(
			// @ts-ignore
			(config: AxiosRequestConfig) => {
				return config
			},
			(error: AxiosError) => {
				return Promise.reject(error)
			}
		)
		//  响应拦截器
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				return response.data
			},
			(error: AxiosError) => {
				return Promise.reject(error)
			}
		)
	}

	get(url: string, params?: object, _object = {}): Promise<ResultData> {
		return this.service.get(url, { params, ..._object })
	}
}

export default new randomImageHttp(config)
