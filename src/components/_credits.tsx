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
	let str_credit: string = ``;

	for (let i = 0; i < people.length; i++) {
		str_credit = `${str_credit} ${people[i].name} - ${people[i].rm} |`;
		if (i + 1 == people.length) {
			str_credit = str_credit.slice(0, -1);
		}
	}

	return (
		<>
			<h2 className="subtitle">{str_credit}</h2>
		</>
	);
}
