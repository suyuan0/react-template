import hitoktoRequest from './index'

const hitokotoAPI = (data: { c?: string }) => {
	return hitoktoRequest.get('/', data)
}

export default hitokotoAPI
