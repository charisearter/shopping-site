import categoriesData from './components/categories-data/categories.json';
import Directory from './components/directory/directory.component';

const App = () => {
	const categories = categoriesData;
	return <Directory categories={categories} />;
};

export default App;
