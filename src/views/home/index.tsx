import hitokotoAPI from '@/api/modules/hitokoto/hitokotoAPI'
import { ResultData } from '@/api/modules/hitokoto'
import React, { useCallback, useEffect, useState } from 'react'
import './index.scss'
import { GithubOutlined, WechatOutlined } from '@ant-design/icons'
import AntCustomIcon from '@/icon/AntCustomIcon/Index'
import config from '@/config'
import SkipButton from './skipButton'

// 随机图片
const randomImage = () => {
	// 随机数
	const random = Math.ceil(Math.random() * 28)
	return `${config.blogApi}/random-image/${random}.png`
}

// home组件
const Home: React.FC = () => {
	// 一言对象
	const [hitokoto, setHitokoto] = useState<ResultData>({
		commit_from: '',
		created_at: '',
		creator: '',
		creator_uid: 0,
		from: '',
		from_who: '',
		hitokoto: '',
		id: 0,
		length: 0,
		reviewer: 0,
		type: '',
		uuid: ''
	})
	const [imageUrl, setImageUrl] = useState<string>('')
	const [weChatEl, setWeChatEl] = useState<HTMLElement | null>(null)
	// 获取一言
	const getHitokoto = useCallback(async () => {
		try {
			const res = await hitokotoAPI({})
			setHitokoto(res)
		} catch (e) {
			console.log('Error fetching hitokoto:', e)
		}
	}, [])
	const handleWeChatShow = () => {
		weChatEl?.classList.remove('hidden')
	}
	const handleWeChatLeave = () => {
		weChatEl?.classList.add('hidden')
	}

	useEffect(() => {
		getHitokoto()
		setImageUrl(randomImage())
		setWeChatEl(document.querySelector('.wechat') as HTMLElement)
	}, [getHitokoto, setWeChatEl])

	return (
		<div
			className='home-wrapper relative'
			style={{ background: `url(${imageUrl}) center center/cover no-repeat rgb(102, 102, 102)` }}
		>
			<main
				className='main absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center'>
				{/*头像*/}
				{/*<Avatar src='https://blogapi.darling0.cn/public/lbxx.jpeg' size={120}/>*/}
				<img
					alt='我没K'
					src={`${config.blogApi}/random-image/avatar.png`}
					className='w-32 rounded-full mb-10 animate__animated animate__fadeInUp text-white'
				/>
				{/*一言*/}
				<span className='text-base text-white text-center mb-3 animate__animated animate__flipInX'>
					{/*句子*/}
					<a
						className='hover:text-purple-600 duration-1000 cursor-pointer'
						target='_blank'
						rel='noopener noreferrer'
						href={'https://hitokoto.cn/?uuid=' + hitokoto.uuid}
					>
						{hitokoto.hitokoto}
					</a>
					<br/>
					{/*	作者*/}- {hitokoto.from_who}「<strong>{hitokoto.from}</strong>」
				</span>
				{/*按钮导航*/}
				<SkipButton/>
				{/*	图标*/}
				<div className='icons flex items-center animate__animated animate__flipInX'>
					{/*github*/}
					<a className='mr-5 ' target='_blank' href='https://github.com/suyuan0' rel='noreferrer'>
						<GithubOutlined className='text-2xl' style={{color: '#FFF'}}/>
					</a>
					{/*	邮箱*/}
					<a href='mailto:c_moon_824@163.com' className='mr-5 -mb-1.5 cursor-pointer'>
						<AntCustomIcon type='icon-email' className='text-2xl'/>
					</a>
					{/*	微信*/}
					<div className='relative'>
						{/*二维码*/}
						<div
							className='wechat absolute bottom-8 -left-1/2 hidden'
							style={{
								background: `url(${config.blogApi}/random-image/wechat.png) center center/cover no-repeat rgb(102, 102, 102)`
							}}
						></div>
						<WechatOutlined
							onMouseLeave={handleWeChatLeave}
							onMouseOver={handleWeChatShow}
							className='text-2xl cursor-pointer'
							style={{color: '#FFF'}}
						/>
					</div>
				</div>
			</main>
			{/*	备案信息*/}
			<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" className='absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs'>京ICP备2022025012号-1</a>
		</div>
	)
}

export default Home
