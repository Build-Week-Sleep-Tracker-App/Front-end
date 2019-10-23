import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SleepTracker from './SleepTracker';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import './icons/sleeptracker-embedded.css';

const theme = {
	fonts: {
		playfair: "'Playfair Display', 'Poppins', 'sans-serif'",
		poppins: "'Poppins', 'sans-serif'",
	},
	colors: {
		gray: "rgba(64, 63, 76, 1)",
		blue: "rgba(29, 161, 242, 1)",
		red: "rgba(248, 85, 101, 1)",
		red50: "rgba(248, 85, 101, .75)",
		yellow: "rgba(249, 220, 92, 1)",
		green: "rgba(0, 168, 120, 1)",
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<SleepTracker />
			</ThemeProvider>
		</Router>
	</Provider>,
	document.getElementById('root')
)
