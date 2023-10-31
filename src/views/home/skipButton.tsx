import { Button, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import routePath from '@/config/routePath'

interface menuListFace {
	url?: string
	id: number
	title: string
	skipMode: 'link' | 'route'
}

const menuList: Array<menuListFace> = [
	{
		url: routePath.PRO_FILE,
		id: 1,
		title: 'Home',
		skipMode: 'route'
	},
	{
		id: 2,
		title: 'Other',
		skipMode: 'route'
	},
	{
		// url: 'https://cherry.darling0.cn',
		id: 3,
		title: 'Cherry',
		skipMode: 'route'
	},
	{
		url: '/myHere',
		id: 4,
		title: 'My Here',
		skipMode: 'route'
	},
	{
		url: '/wlfMeta60Pro',
		id: 5,
		title: '王龙飞专属',
		skipMode: 'route'
	}
]

const SkipButton: React.FC = () => {
	const navigate = useNavigate()
	const handleSkip = (item: menuListFace) => {
		switch (item.skipMode) {
			case 'link':
				// 外链
				window.open(item.url)
				break
			case 'route':
				// 路由
				navigate(item.url as string)
		}
	}
	return (
		<Space className='mb-5'>
			{menuList.map((v, i) => {
				return (
					<Button ghost className={i === 1 ? 'text-white mr-2 ml-2' : ''} onClick={() => handleSkip(v)} key={v.id}>
						{v.title}
					</Button>
				)
			})}
		</Space>
		// <div className='w-full mb-5 flex justify-center'>
		// 	{menuList.map((v, i) => {
		// 		return (
		// 			<Button ghost className={i === 1 ? 'text-white mr-2 ml-2' : ''} onClick={() => handleSkip(v)} key={v.id}>
		// 				{v.title}
		// 			</Button>
		// 		)
		// 	})}
		// </div>
	)
}
export default SkipButton
