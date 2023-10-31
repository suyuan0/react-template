import RequestHttp from '@/api'
// import {ImgList} from './interface'

/**
 * @description 获取图片列表
 */
export const imgListAPi = () => {
    return RequestHttp.get('/api/wlf-images')
}
