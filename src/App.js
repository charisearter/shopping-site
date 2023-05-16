import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
	return <h1>The Shop</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				{/* Siblings - Navigation is on every page, so nest other components here
				 */}
				<Route index element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/signIn' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
