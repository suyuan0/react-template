import ReactDOM from 'react-dom/client'
import Loading from '@/components/Loading'

let needLoadingRequestCount = 0

// * 显示loading
export const showFullScreenLoading = () => {
	// 如果当前没有正在进行的异步请求，则创建新的加载动画
	if (needLoadingRequestCount === 0) {
		// 创建一个新的div元素，用于挂载加载动画组件
		const dom = document.createElement('div')
		dom.setAttribute('id', 'loading')
		document.body.appendChild(dom)
		// 使用ReactDOM.createRoot方法将加载动画组件渲染到新创建的div中，展示加载动画
		ReactDOM.createRoot(dom).render(<Loading />)
	}
	// 增加正在进行的异步请求数量
	needLoadingRequestCount++
}

// * 隐藏loading
export const tryHideFullScreenLoading = () => {
	// 如果当前没有需要加载动画的异步请求，则无需进行隐藏操作
	if (needLoadingRequestCount <= 0) return
	// 减少正在进行的异步请求数量
	needLoadingRequestCount--
	// 当所有异步请求完成，需要隐藏加载动画时
	if (needLoadingRequestCount === 0) {
		// 从页面中移除加载动画的div元素
		document.body.removeChild(document.getElementById('loading') as HTMLElement)
	}
}
