import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import routePath from '@/config/routePath'

interface menuListFace {
	url?: string
	id: number
	title: string
	skipMode: string
}

const menuList: Array<menuListFace> = [
	{
		url: routePath.PRO_FILE,
		id: 1,
		title: '首页',
		skipMode: 'route'
	},
	{
		id: 2,
		title: '其他',
		skipMode: 'route'
	},
	{
		url: 'https://cherry.darling0.cn',
		id: 3,
		title: 'cherry',
		skipMode: 'link'
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
		<div className='w-full mb-5 flex justify-center'>
			{menuList.map((v, i) => {
				return (
					<Button className={i === 1 ? 'text-white mr-2 ml-2' : 'text-white'} onClick={() => handleSkip(v)} key={v.id}>
						{v.title}
					</Button>
				)
			})}
		</div>
	)
}
export default SkipButton
