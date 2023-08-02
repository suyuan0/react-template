import { Header } from 'antd/es/layout/layout'
import React from 'react'
import AppMenu from './Menu'

/**
 * 头部组件
 * @constructor
 */
const AppHeader: React.FC = () => {
	return (
		<Header className='opacity-90 fixed w-full h-14 transition-colors duration-500 bg-white dark:bg-lime-950/70 backdrop-blur-2xl supports-backdrop-blur:bg-white/95'>
			<AppMenu/>
		</Header>
	)
}

export default AppHeader
