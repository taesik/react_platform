import { useState } from "react";

const func_out_const = 0;
let func_out_let = 0;									// Global하게 생성되는 것으로 추측되고 그로 인해 객체 내부에서 접속가능, 객체별로 값을 유지하기는 어려움
var func_out_var = 0;

const ValueScope = ( props : any ) => {
	const func_number = props.number;					// re-render되면 초기화되는 것은 마찬가지이나 인수값이 같다면 유지됨
	const func_in_const = 0;							// const라 값을 변경할 수 없었음. atomic이 아니면 객체의 값은 바꾸는 것이 가능함
	let func_in_let = 0;								// re-render 되면 초기화 됨, 
	var func_in_var = 0;								// scope 상의 var와 let은 큰차이가 없어보임. let을 쓰는 게 recommand
	const [func_in_state, setCount ] = useState(0);		// re-render 해도 이전 값을 기억하고 싶다면 Hook으로 넣는 방법 외에는 없다. re-render하지않는 Hook을 찾아볼 것
	console.log(`함수 호출[${func_number}]: ${func_out_const} ${func_out_let} ${func_out_var} / ${func_in_const} ${func_in_let} ${func_in_var} ${func_in_state}`);


	const addValue = () => {
		func_out_let++;
		func_out_var++;
		func_in_let++;
		func_in_var++;
	}

	const addState = () => {
		setCount(func_in_state+1);
	}

	const print = () => {
		console.log(`클릭 호출[${func_number}]: ${func_out_const} ${func_out_let} ${func_out_var} / ${func_in_const} ${func_in_let} ${func_in_var} ${func_in_state}`);
	}

	return (
		<>
			<div>
				<button onClick={addValue}>클릭 일반</button>
				<button onClick={addState}>클릭 스테이트</button>
				<button onClick={print}>클릭 출력</button>
			</div>
		</>
	);
}

const ValueScopes = () => {
	return (
		<>
			<ValueScope number="1"></ValueScope>
			<ValueScope number="2"></ValueScope>
			<ValueScope number="3"></ValueScope>
			<ValueScope number="4"></ValueScope>
		</>
	);
}

export default ValueScopes;