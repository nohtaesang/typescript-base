import React from 'react';
import * as RouterDOM from 'react-router-dom';

import AuthContext from '@/contexts/AuthContext';

const PrivateRoute = props => {
	const authInfo = React.useContext(AuthContext.Context);

	const { component: InnerComponent, ...rest } = props;

	return (
		<RouterDOM.Route
			{...rest}
			render={innerProps =>
				authInfo.email && authInfo.name ? (
					<InnerComponent {...innerProps} />
				) : (
					<RouterDOM.Redirect
						to={{
							pathname: '/guest/login',
							state: { from: innerProps.location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
