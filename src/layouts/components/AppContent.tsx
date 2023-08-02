import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppContent: React.FC = () => {
	return (
		<Content className='pt-16'>
			<Outlet />
		</Content>
	)
}

export default AppContent
