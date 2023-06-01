import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				{/* Siblings - Navigation is on every page, so nest other components here
				 */}
				<Route index element={<Home />} />
				{/* Shop provider wrap here? */}
				<Route path='/shop' element={<Shop />} />
				<Route path='/auth' element={<Authentication />} />
				<Route path='/checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
