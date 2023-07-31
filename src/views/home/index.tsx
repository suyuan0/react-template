import hitokotoAPI from '@/api/modules/hitokoto/hitokotoAPI'
import { ResultData } from '@/api/modules/hitokoto'
import React, { useCallback, useEffect, useState } from 'react'
import './index.scss'
import { GithubOutlined, WechatOutlined, createFromIconfontCN } from '@ant-design/icons'
import config from '@/config'

// 阿里在线图标
const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/c/font_4190212_em2n4fr4jri.js'
})
// 随机图片
const randomImage = () => {
	// 随机数
	const random = Math.ceil(Math.random() * 3)
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
			<main className='main absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center'>
				{/*头像*/}
				{/*<Avatar src='https://blogapi.darling0.cn/public/lbxx.jpeg' size={120}/>*/}
				<img src={`${config.blogApi}/lbxx.jpeg`} className='w-32 rounded-full mb-10' />
				{/*一言*/}
				<span className='text-base text-white text-center mb-3'>
					{/*句子*/}
					{hitokoto.hitokoto}
					<br />
					{/*	作者*/}- 「<strong>{hitokoto.from}</strong>」
				</span>
				{/*	图标*/}
				<div className='icons flex items-center '>
					{/*github*/}
					<a className='mr-5' target='_blank' href='https://github.com/suyuan0' rel='noreferrer'>
						<GithubOutlined className='text-2xl' style={{ color: '#FFF' }} />
					</a>
					{/*	邮箱*/}
					<a href='mailto:c_moon_824@163.com' className='mr-5 -mb-1.5 cursor-pointer'>
						<IconFont className='text-2xl' style={{ color: '#FFF' }} type='icon-email' />
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
							style={{ color: '#FFF' }}
						/>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
