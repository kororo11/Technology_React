import React from 'react';
import PropTypes from 'prop-types';

// 비구조화 할당 문법을 통해 props 내부 값 추출하기
const MyComponent = ({ name, favoriteNumber, children }) => {
	return (
		<div>
			안녕하세요, 제 이름은 {name} 입니다. <br />
			children 값은 {children}
			입니다.
			<br />
			제가 좋아하는 숫자는 {favoriteNumber} 입니다.
		</div>
	);
};

MyComponent.defaultProps = {
	name: '기본 이름',
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
