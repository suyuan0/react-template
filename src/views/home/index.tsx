import hitokotoAPI from '@/api/modules/hitokoto/hitokotoAPI'
import { ResultData } from '@/api/modules/hitokoto'
import { useEffect, useState } from 'react'
import { Button } from 'antd'

// home组件
const Home = () => {
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
	const getHitokoto = async () => {
		try {
			const res = await hitokotoAPI({})
			setHitokoto(res)
		} catch (e) {
			console.log('Error fetching hitokoto:', e)
		}
	}

	useEffect(() => {
		getHitokoto()
	}, [])

	return (
		<div>
			<span>{hitokoto.hitokoto}</span>
			<Button onClick={getHitokoto}>换句子</Button>
		</div>
	)
}

export default Home
