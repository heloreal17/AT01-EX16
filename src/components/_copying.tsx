/** @format */

interface props {
	people: [
		{
			name: string;
			rm: number;
		}
	];
}

export default function ({ people }: any) {
	let str_copyleft: string = ``;
	let year = new Date().getFullYear;

	for (let i = 0; i < people.length; i++) {
		str_copyleft = `${str_copyleft} ${people[i].name},`;
		if (i + 1 == people.length) {
			str_copyleft = str_copyleft.slice(0, -1);
		}
	}

	return (
		<>
			<p className="text-center padding">Copyright © {str_copyleft}.</p>
			{year}
		</>
	);
}
