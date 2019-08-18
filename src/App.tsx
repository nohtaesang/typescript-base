import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RouterDOM from 'react-router-dom';
import * as HotLoader from 'react-hot-loader';
import { GlobalStyles } from '@/assets/theme';
import AuthContext from '@/contexts/AuthContext';
import RouteContext from '@/contexts/RouteContext';
import GuestContainer from '@/components/containers/GuestContainer';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AuthContext.Provider>
				<RouteContext.Provider>
					<GuestContainer />
				</RouteContext.Provider>
			</AuthContext.Provider>
		</>
	);
};

export default process.env.NODE_ENV === 'development' ? HotLoader.hot(module)(App) : App;
