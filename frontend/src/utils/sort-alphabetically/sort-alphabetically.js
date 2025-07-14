export const sortAlphabetically = (arrayForSorting) => {
	const sortedArray = arrayForSorting.slice().sort((a, b) => {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {
			return -1;
		}
		if (a.name.toLowerCase() > b.name.toLowerCase()) {
			return 1;
		}

		return 0;
	});
	return sortedArray;
};
