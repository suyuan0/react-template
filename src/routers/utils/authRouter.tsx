import { JSX } from 'react'
import hitokotoAPI from '@/api/modules/hitokoto/hitokotoAPI'
import { AxiosCanceler } from '@/api/helper/axiosCancel'
import { useLocation } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
const axiosCanceler = new AxiosCanceler()
/**
 * @description 路由守卫组件
 */
const AuthRouter = (props: { children: JSX.Element }) => {
	useLocation()
	// 跳转前清空所有请求
	axiosCanceler.removeAllPending()
	hitokotoAPI({c: 'l'}).then(res => {
		document.title = `cherry - ${res.hitokoto}`
	})
	// const { pathname } = useLocation()
	return props.children
}

export default AuthRouter
