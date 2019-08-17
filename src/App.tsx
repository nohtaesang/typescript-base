import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlobalStyles } from '@/assets/theme';
import RouteContext from '@/contexts/RouteContext';
import GuestContainer from '@/components/containers/GuestContainer';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<RouteContext.Provider>
				<GuestContainer />
			</RouteContext.Provider>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
