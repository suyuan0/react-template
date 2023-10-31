import React from 'react'
// import imageList from './imageList'
//
import { Space, Card, Image, Layout, Button, Drawer, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { imgListAPi } from '@/api/modules/wlf'

const { Header } = Layout

interface StateProps {
	imgList: {
		fileName: string
		id: string
	}[]
	drawerOpen: boolean
}

class WlfMeta60Pro extends React.Component<any, any> {
	state: StateProps = {
		imgList: [],
		drawerOpen: false
	}

	/**
	 * @description 获取图片列表
	 */
	getImageList = async () => {
		try {
			const res: any = await imgListAPi()
			this.setState({ imgList: res })
		} catch (e) {
			console.log(e, '获取图片列表')
		}
	}

	// beforeUpload = file => {
	// 	console.log(file)
	// 	return false
	// }

	changeDrawerOpen = (value: boolean) => {
		this.setState({ drawerOpen: value })
	}

	refreshPage = () => {
		this.changeDrawerOpen(false)
		window.location.reload()
		// this.setState({ imgList: [] })
		// this.getImageList()
	}

	componentDidMount() {
		this.getImageList()
	}

	render() {
		const { imgList, drawerOpen } = this.state
		return (
			<Layout
				style={{
					background: '#FFF'
				}}
			>
				{/*表头*/}
				<Header
					style={{
						position: 'sticky',
						top: 0,
						display: 'flex',
						alignItems: 'center',
						zIndex: 1,
						width: '100%',
						background: '#bdc3c7'
					}}
				>
					<h1 style={{ margin: '10px' }}>王龙飞专属</h1>
					<Button type='primary' onClick={() => this.changeDrawerOpen(true)}>
						上传
					</Button>
					{/*	上传*/}
					<Drawer width={600} open={drawerOpen}>
						<Upload
							accept={'image/*'}
							name='files'
							action='https://www.darling0.cn/renren/api/upload-wlf'
							listType='picture-card'
							className='avatar-uploader'
							multiple
							// beforeUpload={this.beforeUpload}
						>
							<PlusOutlined />
						</Upload>
						<Button onClick={() => this.refreshPage()} type='primary'>
							上传到平头的专属图库
						</Button>
					</Drawer>
				</Header>
				<Image.PreviewGroup
					preview={{
						onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
					}}
				>
					<Space wrap>
						{imgList.map(item => {
							return (
								<Card key={item.id} hoverable>
									<Image src={`https://blogapi.darling0.cn/public/wlf-images/${item.fileName}`} height={300} />
								</Card>
							)
						})}
					</Space>
				</Image.PreviewGroup>
			</Layout>
		)
	}
}

export default WlfMeta60Pro
