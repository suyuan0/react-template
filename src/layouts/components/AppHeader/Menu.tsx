import type { MenuProps } from 'antd'
import { Menu, Tooltip, ConfigProvider } from 'antd'
import React, { useEffect, useState } from 'react'
import AntCustomIcon from '@/icon/AntCustomIcon/Index'
import { useNavigate } from 'react-router-dom'
// import {searchRoute} from "@/utils/util";

const items: MenuProps['items'] = [
	{
		label: <Tooltip title='周一：起床时感觉像被地心引力牵扯着，脚步沉重。'>重力失效</Tooltip>,
		key: 'monday',
		icon: <AntCustomIcon type='icon-biaoqing-qi-' />
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
type Theme = 'dark' | 'light'
const HeaderMenu: React.FC = () => {
	const navigate = useNavigate()
	const handleOnClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
		console.log(items, key)
		// const route = searchRoute(key, items)
		navigate('/amap')
	}
	// 主题
	const [theme, setTheme] = useState<Theme>()

	useEffect(() => {
		// 监听主题
		const themeMedia = window.matchMedia('(prefers-color-scheme: light)')
		const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
			if (!e.matches) {
				setTheme('dark')
			} else {
				setTheme('light')
			}
		}
		handleThemeChange(themeMedia)
		themeMedia.addEventListener('change', handleThemeChange)
		// 在组件卸载时移除事件监听器，以避免内存泄漏
		return () => {
			themeMedia.removeEventListener('change', handleThemeChange)
		}
	}, [])
	return (
		<ConfigProvider>
			<Menu onClick={handleOnClick} className='h-14' mode='horizontal' theme={theme} items={items} />
		</ConfigProvider>
	)
}

export default HeaderMenu

/**
 * 当代网友对每天的心情描述是非常多样化的，以下是一些可能更奇葩的心情描述，这些描述可能是一些幽默、夸张或者特别的感受：
 *
 * 周一："重力失效"，起床时感觉像被地心引力牵扯着，脚步沉重。
 *
 * 周二："幽灵上身"，工作状态起伏不定，时而充满活力，时而感觉精神涣散。
 *
 * 周三："拔河比赛"，早上觉得还有点疲劳，下午开始恢复活力，感觉像在和时间拔河。
 *
 * 周四："时光机器"，感觉时间过得很快，转眼就到了周末。
 *
 * 周五："翘课党"，工作日最后一天，期待着放飞自我的周末。
 *
 * 周六："逃犯"，逃离了工作的束缚，迎来自由自在的一天。
 *
 * 周日："倒计时"，倒计时到周末结束，迎接新一周的挑战。
 *
 *
 *
 *
 * 周一："冒险之旅"，开始新的一周，像是迎接一场充满未知的冒险之旅。
 *
 * 周二："反重力"，感觉轻飘飘的，仿佛可以飞起来，但又有些迷茫。
 *
 * 周三："时间拧巴"，早上感觉时间过得特别慢，下午又像被时间拧巴一样飞快。
 *
 * 周四："心思游荡"，脑海中充满各种奇怪的想法和幻想，时而高兴，时而忧郁。
 *
 * 周五："星期五疯"，无法自拔地陷入周末的节奏，感觉像放假一样疯狂。
 *
 * 周六："幸福溺死"，沉浸在快乐中，不愿醒来，希望这一天永远持续。
 *
 * 周日："时光悄悄走"，周末的最后一天总是特别宝贵，感觉时光悄悄溜走。
 */
