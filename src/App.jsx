/* eslint-disable react/jsx-boolean-value */
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import GlobalLayout from './pages/GlobalLayout';
import Home from './pages/Home';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<GlobalLayout />}>
				<Route index element={<Home />} />
				<Route path="about-us" element={<About />} />
				<Route path="contact-us" element={<Contact />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
