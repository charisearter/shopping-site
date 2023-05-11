import categoriesData from '../../components/categories-data/categories.json';
import Directory from '../../components/directory/directory.component';

const Home = () => {
	const categories = categoriesData;
	return <Directory categories={categories} />;
};

export default Home;
