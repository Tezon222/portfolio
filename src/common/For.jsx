function For({ each, render }) {
	const mappedElements = each.map((item, index) => render(item, index));

	return mappedElements;
}

export default For;
