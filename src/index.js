import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';

render(
	(
		<AppContainer>
			<App />
		</AppContainer>
	),
	document.getElementById('app')
);

// validation for react-hot-loader
if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app');
    render(
      <App />,
      document.getElementById('app')
    );
  });
}
