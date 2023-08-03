import type { MenuProps } from 'antd'
import { Tooltip } from 'antd'
import AntCustomIcon from '@/icon/AntCustomIcon/Index'
import React from 'react'

const Items: MenuProps['items'] = [
	{
		label: (
			<Tooltip trigger='click' placement='top' title='周一：起床时感觉像被地心引力牵扯着，脚步沉重。'>
				重力失效
			</Tooltip>
		),
		key: 'monday',
		icon: <AntCustomIcon type='icon-biaoqing-qi-' />,
		children: [
			{
				label: '糟糕的心情',
				key: '/badMood'
			}
		]
	},
	{
		label: <Tooltip title='周二：工作时状态起伏不定，时而充满活力，时而感觉精神涣散'>幽灵上身</Tooltip>,
		key: 'tuesday',
		icon: <AntCustomIcon type='icon-853' />
	},
	{
		label: <Tooltip title='周三：早上觉得还有点疲劳，下午开始恢复活力，感觉像在和时间拔河'>拔河比赛</Tooltip>,
		key: 'wednesday',
		icon: <AntCustomIcon type='icon-bahe' />
	},
	{
		label: <Tooltip title='周四：感觉时间过的很快，转眼就到了周末'>时光机器</Tooltip>,
		key: 'thursday',
		icon: <AntCustomIcon type='icon-a-99' />
	},
	{
		label: <Tooltip title='周五：工作日最后一天，期待着放飞自我的周末'>翘课党</Tooltip>,
		key: 'friday',
		icon: <AntCustomIcon type='icon-myPass' />
	},
	{
		label: <Tooltip title='周六：逃离了工作的束缚，迎来自由自在的一天'>逃犯</Tooltip>,
		key: 'saturday',
		icon: <AntCustomIcon type='icon-yueliang' />
	},
	{
		label: <Tooltip title='周日：倒计时到周末结束，迎接新一周的挑战'>倒计时</Tooltip>,
		key: 'sunday',
		icon: <AntCustomIcon type='icon-taiyang' />
	}
]
export default Items
