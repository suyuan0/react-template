import Router from '@/routers/index'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import AuthRouter from '@/routers/utils/authRouter'

function App() {
	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					token: {

					}
				}}
			>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</HashRouter>
	)
}

export default App
