import * as React from 'react';

type valuesTypes = {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

const Context = React.createContext<valuesTypes | null>(null);

const Provider = ({ children }) => {
	const [email, setEmail] = React.useState('');
	const [name, setName] = React.useState('');

	const contextValues: valuesTypes = { email, setEmail, name, setName };

	return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export default {
	Context,
	Provider
};
