import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Title from '@/components/elements/Title';

type OwnProps = {
	history: RouteComponentProps;
};

const Sub = (props: OwnProps) => {
	return (
		<div>
			<Title label="Sub Page" />
			<div>world</div>
		</div>
	);
};

export default Sub;
