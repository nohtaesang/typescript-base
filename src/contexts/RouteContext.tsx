import * as React from 'react';
import _ from 'lodash';
import { createBrowserHistory } from 'history';
import * as RouterDOM from 'react-router-dom';

const history = createBrowserHistory();

type valuesTypes = {
	history: any;
	hash: string;
	params: _.Dictionary<string>;
};

const Context = React.createContext<valuesTypes | null>(null);

const Provider = ({ children }) => {
	return (
		<RouterDOM.Router history={history}>
			<RouterDOM.Route
				render={({ location }) => {
					const contextValues: valuesTypes = {
						history,
						hash: location.hash,
						params: _.fromPairs(Array.from(new URLSearchParams(location.search)))
					};
					return <Context.Provider value={contextValues}>{children}</Context.Provider>;
				}}
			></RouterDOM.Route>
		</RouterDOM.Router>
	);
};

export default {
	Context,
	Provider
};
