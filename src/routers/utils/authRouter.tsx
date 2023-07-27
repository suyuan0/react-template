import { JSX } from 'react'
// import { useLocation } from 'react-router-dom'

/**
 * @description 路由守卫组件
 */
const AuthRouter = (props: { children: JSX.Element }) => {
	// const { pathname } = useLocation()
	return props.children
}

export default AuthRouter
