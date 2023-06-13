import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const customTheme = extendTheme({
	semanticTokens: {
		colors: {
			error: 'red.500',
			text: {
				default: 'gray.700',
				_dark: 'gray.50',
			},
			brand: {
				default: 'purple.600',
				_dark: 'gray.50',
			},
		},
	},
});
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={customTheme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
