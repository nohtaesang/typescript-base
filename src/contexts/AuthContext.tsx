import * as React from 'react';

type OwnProperty = {
	children: React.ReactElement;
};

const Context = React.createContext(null);

const AuthProvider = (props: OwnProperty) => {
	const { children } = props;

	const [email, setEmail] = React.useState('');
	const [name, setName] = React.useState('');

	return (
		<Context.Provider
			value={{
				email,
				setEmail,
				name,
				setName
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default {
	Context,
	Provider: AuthProvider
};
