import path from 'path';
import express from 'express';
import template from './template';
import {
  webpackMiddleware,
  hotModuleMiddleware
} from './middlewares';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/app';

const isDev = process.env.NODE_ENV === 'development';
const app = express();

/**
 * Middlewares implementation for development enviroment
 */
if (isDev) {
  //middleware for run webpack from server and generate the static
  //content
  app.use(webpackMiddleware);

  //middleware for use hot module replacement for react components
  app.use(hotModuleMiddleware);

  // define static paths
  app.use(express.static(path.resolve(__dirname, 'src')));
} else {
  // define static path for production
  app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.get('/', (req, res) => {
	res.status(200).send(template(
		isDev ?
			''
			:
			renderToString(<App />)
	));
});

// server event listener
app.listen(3000, '0.0.0.0', (err) => {
	if(err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:3000');
	}
});
