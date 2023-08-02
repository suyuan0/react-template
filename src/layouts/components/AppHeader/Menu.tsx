import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React from 'react'

const items: MenuProps['items'] = [
	{
		label: '周一',
		key: 'monday'
	},
	{
		label: '周二',
		key: 'tuesday'
	},
	{
		label: '周三',
		key: 'wednesday'
	},
	{
		label: '周四',
		key: 'thursday'
	},
	{
		label: '周五',
		key: 'friday'
	},
	{
		label: '周六',
		key: 'saturday'
	},
	{
		label: '周日',
		key: 'sunday'
	}
]

const handleOnClick: MenuProps['onClick'] = e => {
	console.log(e.key)
}
const HeaderMenu: React.FC = () => {
	return <Menu onClick={handleOnClick} className='h-14' mode='horizontal' theme='dark' items={items} />
}

export default HeaderMenu
