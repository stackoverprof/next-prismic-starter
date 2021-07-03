import React from 'react';
import Head from 'next/head';
import ProgressBar from 'nextjs-progressbar';
import ContextProvider from '@core/contexts';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import '@core/styles/tailwind.css';
import '@core/styles/typefaces.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>Hybrid</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#1D1D1D"/>
			</Head>
			<ProgressBar
				color="#1D1D1D"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				options={{showSpinner: false}}
			/>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
};

export default App;
