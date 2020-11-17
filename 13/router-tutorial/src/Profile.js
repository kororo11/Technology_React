import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
	velopert: {
		name: '김민준',
		description: '리액트를 좋아하는 개발자',
	},
	gildong: {
		name: '홍길동',
		description: '고전 소설 홍길동전의 주인공',
	},
};

const Profile = ({ match }) => {
	// console.log('match 정보 => ', match);
	// console.log('match.params 정보 => ', match.params);
	const { username } = match.params;
	const profile = data[username];
	// console.log('profile 정보 => ', data[username]);
	if (!profile) {
		return <div>존재하지 않는 사용자 입니다.</div>;
	}
	return (
		<div>
			<h3>
				{username}({profile.name})
			</h3>
			<p>{profile.description}</p>
			<WithRouterSample />
		</div>
	);
};

export default withRouter(Profile);
