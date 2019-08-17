import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Layout from './Layout';

type OwnProps = {
	history: RouteComponentProps;
};

const Main = (props: OwnProps) => {
	const { history } = props;

	return <Layout history={history} />;
};

export default Main;
