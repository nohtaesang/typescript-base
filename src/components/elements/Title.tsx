import * as React from 'react';
import Styled from 'styled-components';

const Label = Styled.h1`
    color: red;
`;
type OwnProps = {
	label: string;
};

const Title = (props: OwnProps) => {
	const { label } = props;
	return <Label>{label}</Label>;
};

export default Title;
