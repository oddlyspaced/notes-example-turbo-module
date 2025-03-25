export const getRandomDate = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const randomMonth = months[Math.floor(Math.random() * 12)];
	const randomDay = Math.floor(Math.random() * 31) + 1;
	const year = 2025;

	return `${randomMonth} ${randomDay}, ${year}`;
};
