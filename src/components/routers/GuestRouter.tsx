import * as React from 'react';
import * as RouterDOM from 'react-router-dom';
import Main from '@/components/pages/main';
import Sub from '@/components/pages/sub';

const Router = () => {
	return (
		<>
			<RouterDOM.Switch>
				<RouterDOM.Route exact={true} path="/" component={Main} />
				<RouterDOM.Route path="/main" component={Main} />
				<RouterDOM.Route path="/sub" component={Sub} />
				<RouterDOM.Route component={() => <RouterDOM.Redirect to="/" />} />
			</RouterDOM.Switch>
		</>
	);
};

export default Router;
