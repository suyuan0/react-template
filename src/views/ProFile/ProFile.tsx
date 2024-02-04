import React from 'react'

const arr = [
	1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1,
	2, 3, 4, 5, 6
]
const ProFile: React.FC = () => {
	return (
		<div>
			{arr.map((v, k) => {
				return <div key={k}>{v}</div>
			})}
		</div>
	)
}

export default ProFile
