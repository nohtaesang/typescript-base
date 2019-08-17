import * as React from 'react';
import _ from 'lodash';
import { createBrowserHistory } from 'history';
import * as RouterDOM from 'react-router-dom';

type OwnProperty = {
	children: React.ReactElement;
};

const Context = React.createContext(null);
const history = createBrowserHistory();

const RouteProvider = (props: OwnProperty) => {
	const { children } = props;

	return (
		<RouterDOM.Router history={history}>
			<RouterDOM.Route
				render={({ location }) => {
					return (
						<Context.Provider
							value={{
								history,
								hash: location.hash,
								params: _.fromPairs(Array.from(new URLSearchParams(location.search)))
							}}
						>
							{children}
						</Context.Provider>
					);
				}}
			></RouterDOM.Route>
		</RouterDOM.Router>
	);
};

export default {
	Context,
	Provider: RouteProvider
};
