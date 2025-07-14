export const sortByCategory = (arrayForSorting, value) => {
	const sortedArray = arrayForSorting.filter(({ category }) => category === value);

	return sortedArray;
};
