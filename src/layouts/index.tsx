import React from 'react'
import './index.scss'
import AppHeader from '@/layouts/components/AppHeader/Index'
import AppContent from '@/layouts/components/AppContent'
import AppFooter from '@/layouts/components/AppFooter'

const LayoutContainer: React.FC = () => {
	return (
		<section className='layout-container flex flex-col min-h-full'>
			<AppHeader></AppHeader>
			<AppContent />
			<AppFooter />
		</section>
	)
}

export default LayoutContainer
