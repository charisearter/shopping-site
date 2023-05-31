import { createContext, useState, useEffect } from 'react';

import PRODUCTS from '../shop-data.json';

// context is the actual value that needs to be accessed
export const ProductsContext = createContext({
	products: [],
	// setProducts: () => null,
});

// provider is the functional component
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };

	// useEffect(() => ({}), []);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
