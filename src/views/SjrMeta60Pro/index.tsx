import React from 'react'
import imageList from './imageList'
import { Space, Card, Image } from 'antd'

class WlfMeta60Pro extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`)
                    }}
                >
                    <Space wrap>
                        {imageList.map((item, index) => {
                            return (
                                <Card key={index} hoverable>
                                    <Image src={`https://blogapi.darling0.cn/public/sjr-images/${item}`} height={300} />
                                </Card>
                            )
                        })}
                    </Space>
                </Image.PreviewGroup>
            </div>
        )
    }
}

export default WlfMeta60Pro
