import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const customTheme = extendTheme({
	semanticTokens: {
		colors: {
			primary: { default: '#aa2100', _dark: '#aa2100' },
			secondary: { default: '#d926a9', _dark: '' },
			// accent: { default: '#1fb2a6', _dark: '' },
			// neutral: { default: '#2a323c', _dark: '' },
			background: { default: 'gray.900', _dark: '' },
			'base-100': { default: '#fff', _dark: '#000' },
			info: { default: '#3abff8', _dark: '' },
			success: { default: '#36d399', _dark: '' },
			warning: { default: '#fbbd23', _dark: '' },
			error: { default: '#db0202', _dark: '' },
			text: { default: 'gray.900', _dark: 'gray.100' },
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
