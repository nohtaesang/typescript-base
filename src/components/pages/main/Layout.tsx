import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Title from '@/components/elements/Title';

type OwnProps = {
	history: RouteComponentProps;
};

const Main = (props: OwnProps) => {
	return (
		<div>
			<Title label="Main Page" />
			<div>hello</div>
		</div>
	);
};

export default Main;
