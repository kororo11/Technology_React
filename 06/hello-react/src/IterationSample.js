import React from 'react';

const IterationSample = () => {
	const names = ['봄', '여름', '가음', '겨울'];
	const nameList = names.map((name, index) => <li key={index}>{name}</li>);

	return (
		<div>
			<ul>{nameList}</ul>
		</div>
	);
};

export default IterationSample;
