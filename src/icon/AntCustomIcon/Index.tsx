// 阿里在线自定义图标
import { createFromIconfontCN } from '@ant-design/icons'
import React from 'react'

const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/c/font_4190212_29nixcsbt01.js'
})

interface CustomIconProps {
	type: string
	className?: string
	style?: any
}

const CustomIcon = (props: CustomIconProps) => {
	const customProps: CustomIconProps = {
		type: props.type
	}
	// 默认值
	customProps.style = props.style ? props.style : { color: '#FFF' }
	customProps.className = props.className ? props.className : ''
	return (
		<IconFont style={customProps.style} className={customProps.className ? customProps.className : ''} type={customProps.type} />
	)
}

export default CustomIcon
