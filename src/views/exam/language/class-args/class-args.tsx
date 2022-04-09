import { useState } from "react";

const ClassScope = ( props : ClassScopeProps ) => {
	const data : ScopeTest = props.scopeTest;
	const [count, setCount] = useState(0);

	const addValue = () => {
		data.count++;
	}

	const addState = () => {
		setCount(count+1);
	}

	const print = () => {
		console.log(`클릭 호출: count[${count}] data.count[${data.count}]`);
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

interface ClassScopeProps
{
	scopeTest : ScopeTest,
	children? : React.ReactNode,
}
class ScopeTest
{
	count : number = 0;
}

export const ClassArgs = () => {
	const [scope1, setScope1] = useState(new ScopeTest());
	const [scope2, setScope2] = useState(new ScopeTest());
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount(count+1);
		console.log(`ClassArgs 갱신 : count[${count}]`);
	}

	const printStatus = () => {
		console.log(`printStatus in ClassArgs`);
		console.log(count);
		console.log(scope1);
		console.log(scope2);
	}

	return (
		<>
			<div style={{height:"50px"}}></div>
			<button onClick={updateCount}>부모 갱신</button>
			<button onClick={printStatus}>scope 보기</button>

			<ClassScope scopeTest={scope1}></ClassScope>
			<ClassScope scopeTest={scope2}></ClassScope>
		</>
	);
}