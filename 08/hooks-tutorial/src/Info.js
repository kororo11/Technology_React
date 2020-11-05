import React, { useState, useEffect } from 'react';

const Info = () => {
	const [name, setName] = useState('');
	const [nickName, setNickname] = useState('');

	useEffect(() => {
		console.log('useEffect');
		console.log(name);
		return () => {
			console.log('cleanup');
			console.log(name);
		};
	});

	const onChangeName = e => {
		setName(e.target.value);
	};
	const onChangeNickName = e => {
		setNickname(e.target.value);
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
					<div>
						<b>이름 : </b>
						{name}
					</div>
				</div>
				<div>
					<div>
						<b>닉네임 : </b>
						{nickName}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
