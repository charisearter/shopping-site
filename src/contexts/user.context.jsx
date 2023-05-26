import { createContext, useState } from 'react';

// context is the actual value that needs to be accessed
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// provider is the functional component
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
