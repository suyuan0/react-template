import { JSX } from 'react'
import hitokotoAPI from '@/api/modules/hitokoto/hitokotoAPI'
// import { useLocation } from 'react-router-dom'

/**
 * @description 路由守卫组件
 */
const AuthRouter = (props: { children: JSX.Element }) => {
	hitokotoAPI({}).then(res => {
		document.title = `cherry - ${res.hitokoto}`
	})
	// const { pathname } = useLocation()
	return props.children
}

export default AuthRouter
