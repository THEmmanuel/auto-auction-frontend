const formatDate = (dateString) => {
	const options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};
	const date = new Date(dateString);
	return date.toLocaleString(undefined, options);
};

const originalDate = "2023-10-19T18:20:17.072Z";
const formattedDate = formatDate(originalDate);

console.log(formattedDate); // Output: "Oct 19, 2023, 6:20 PM"

export default formatDate;