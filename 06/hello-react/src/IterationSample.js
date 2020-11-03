import React, { useState } from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, text: '봄' },
		{ id: 2, text: '여름' },
		{ id: 3, text: '가을' },
		{ id: 4, text: '겨울' },
	]);
	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

	const onChage = e => setInputText(e.target.value);
	const onClick = () => {
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		});
		setNextId(nextId + 1);
		setNames(nextNames);
		setInputText('');
	};

	const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

	return (
		<div>
			<input type="text" value={inputText} onChange={onChage} />
			<button onClick={onClick}>추가</button>
			<ul>{nameList}</ul>
		</div>
	);
};

export default IterationSample;
