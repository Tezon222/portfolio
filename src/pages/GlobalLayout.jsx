import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

function GlobalLayout() {
	return (
		<>
			<ScrollRestoration />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
export default GlobalLayout;
