import { useEffect, useState } from 'react';

const mobileQuery = window.matchMedia('(max-width: 767px)');
const tabletQuery = window.matchMedia('(min-width: 768px)');
const desktopQuery = window.matchMedia('(min-width: 1000px)');

const useMediaQuery = (screenSizeQuery) => {
	const [isScreenSize, setIsScreenSize] = useState(screenSizeQuery.matches);

	useEffect(() => {
		const handleMediaQueryChange = () => setIsScreenSize(screenSizeQuery.matches);

		screenSizeQuery.addEventListener('change', handleMediaQueryChange);

		return () => screenSizeQuery.removeEventListener('change', handleMediaQueryChange);
	}, [screenSizeQuery]);

	return isScreenSize;
};

export const useMobileQuery = () => useMediaQuery(mobileQuery);

export const useTabletQuery = () => useMediaQuery(tabletQuery);

export const useDesktopQuery = () => useMediaQuery(desktopQuery);
