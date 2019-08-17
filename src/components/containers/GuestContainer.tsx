import * as React from 'react';
import Navbar from '@/components/layouts/navbar';
import GuestRouter from '@/components/routers/GuestRouter';

type OwnProps = {};

const GuestContainer = (props: OwnProps) => {
	return (
		<>
			<Navbar />
			<GuestRouter />
		</>
	);
};

export default GuestContainer;
