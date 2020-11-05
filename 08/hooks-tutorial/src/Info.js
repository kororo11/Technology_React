import React, { useState, useEffect } from 'react';

const Info = () => {
	const [name, setName] = useState('');
	const [nickName, setNickName] = useState('');

	useEffect(() => {
		console.log('마운트될 때만 실행됩니다.');
	}, []);
	const onChangeName = e => {
		setName(e.target.value);
	};

	const onChangeNickName = e => {
		setNickName(e.target.value);
	};

	return (
		<div>
			<div>
				<input type="text" value={name} onChange={onChangeName} />
				<input
					type="text"
					value={nickName}
					onChange={onChangeNickName}
				/>
			</div>
			<div>
				<div>
					<b>이름: </b>
					{name}
				</div>
				<div>
					<b>닉네임: </b>
					{nickName}
				</div>
			</div>
		</div>
	);
};

export default Info;
