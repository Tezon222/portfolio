import { useEffect, useRef, useState } from 'react';

const useNavScroll = (options = { rootMargin: '10px 0px 0px 0px' }) => {
	const headerRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [headerObserver] = useState(
		() =>
			new IntersectionObserver(
				([entry]) => {
					setIsScrolled(!entry.isIntersecting);
				},
				options
			)
	);

	useEffect(() => {
		const scrollWatcher = document.createElement('span');
		scrollWatcher.dataset.scrollWatcher = '';

		headerRef.current.before(scrollWatcher);
		headerObserver.observe(scrollWatcher);

		return () => {
			scrollWatcher.remove();
			headerObserver.disconnect();
		};
	}, [headerObserver]);

	return { isScrolled, headerRef };
};

export default useNavScroll;
