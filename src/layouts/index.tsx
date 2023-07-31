import React from 'react'
import { Layout } from 'antd'
import './index.scss'
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const LayoutContainer: React.FC = () => {
	return (
		<section className='layout-container flex flex-col h-full'>
			<Header>Header</Header>
			<Content className='overflow-scroll'>
				<Outlet ></Outlet>
			</Content>
			<Footer>Footer</Footer>
		</section>
	)
}

export default LayoutContainer
