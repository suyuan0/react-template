import './styles/tailwindcss.css'
import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import { store, persistor } from '@/redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StyleProvider } from '@ant-design/cssinjs'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<StyleProvider hashPriority='high'>
				<App />
			</StyleProvider>
		</PersistGate>
	</Provider>
)
