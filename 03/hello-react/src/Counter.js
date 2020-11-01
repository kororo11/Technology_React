import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
		};
	}

	render() {
		const { number } = this.state;

		return (
			<div>
				<h1>{number}</h1>
				<button
					// onClick 을 통해 버튼이 클릭되었을 때 호출 할 함수를 지정합니다.
					onClick={() => {
						// this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
						this.setState({ number: number + 1 });
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
