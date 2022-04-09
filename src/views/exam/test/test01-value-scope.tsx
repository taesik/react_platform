import React, {  useRef, useState } from "react";
import { IRootState } from '../../../shared/reducers';
import { connect } from 'react-redux';
import { test01Redux } from './test01-value-scope.reducer';

// 리덕스/액션함수를 포함하는 인터페이스
interface CustomProps { number; }
export interface IAppProps extends StateProps, DispatchProps, CustomProps {}

const func_out_const = 0;
let func_out_let = 0;                                   // Global하게 생성되는 것으로 추측되고 그로 인해 객체 내부에서 접속가능, 객체별로 값을 유지하기는 어려움
var func_out_var = 0;

const Test01ValueScope: React.FC<IAppProps> = (props: IAppProps) => {
  const func_number = props.number;                   // re-render되면 초기화되는 것은 마찬가지이나 인수값이 같다면 유지됨
  const func_in_const = 0;                            // const라 값을 변경할 수 없었음. atomic이 아니면 객체의 값은 바꾸는 것이 가능함
  let func_in_let = 0;                                // re-render 되면 초기화 됨,
  var func_in_var = 0;                                // scope 상의 var와 let은 큰차이가 없어보임. let을 쓰는 게 recommand
  const [func_in_state, setCount ] = useState(0);     // re-render 해도 이전 값을 기억하고 싶다면 Hook으로 넣는 방법 외에는 없다. re-render하지않는 Hook을 찾아볼 것
  console.log(`함수 호출[${func_number}]: ${func_out_const} ${func_out_let} ${func_out_var} / ${func_in_const} ${func_in_let} ${func_in_var} ${func_in_state}`);

  const logDiv = useRef(null);

  const addValue = () => {
    func_out_let++;
    func_out_var++;
    func_in_let++;
    func_in_var++;
    print();
  }

  const addState = () => {
    setCount(func_in_state+1);
    print();
  }

  const print = () => {
    console.log($(logDiv.current));
    const $logDiv = $(logDiv.current)
    $logDiv.html($logDiv.html() + '<br />' +
      `[props.number]: ${func_number}&nbsp;&nbsp;
        [func_out_const]: ${func_out_const}&nbsp;&nbsp;
        [func_out_let]: ${func_out_let}&nbsp;&nbsp;
        [func_out_var]: ${func_out_var}&nbsp;&nbsp;&nbsp;/&nbsp;
        [func_in_const]: ${func_in_const}&nbsp;&nbsp;
        [func_in_let]: ${func_in_let}&nbsp;&nbsp;
        [func_in_var]: ${func_in_var}&nbsp;&nbsp;
        [func_in_state]: ${func_in_state}&nbsp;&nbsp;
        [Redux-testValue]: ${props.testValue}`);
  }

  return (
    <>
      <div>
        <button onClick={addValue}>클릭 일반</button>
        <button onClick={addState}>클릭 스테이트</button>
        <button onClick={print}>클릭 출력</button>
        <button onClick={props.test01Redux}>리덕스 실행</button>
      </div>
      <div>
        <span style={{fontWeight:'bold'}}>
          [props.number]: {props.number}&nbsp;&nbsp;
          [func_out_const]: {func_out_const}&nbsp;&nbsp;
          [func_out_let]: {func_out_let}&nbsp;&nbsp;
          [func_out_var]: {func_out_var}&nbsp;&nbsp;&nbsp;/&nbsp;
          [func_in_const]: {func_in_const}&nbsp;&nbsp;
          [func_in_let]: {func_in_let}&nbsp;&nbsp;
          [func_in_var]: {func_in_var}&nbsp;&nbsp;
          [func_in_state]: {func_in_state}&nbsp;&nbsp;
          [Redux-testValue]: {props.testValue}
        </span>
      </div>
      <div ref={logDiv} style={{border:'1px black solid', height:'500px', overflowY:'scroll'}}></div>
    </>
  );
};

// 리덕스 스토어를 가지는 객체
const mapStateToProps = ({ test01 }: IRootState) => ({
  testValue: test01.testValue,
});

// 리듀스 액션 함수를 가지는 객체
const mapDispatchToProps = {
  test01Redux
};

// 스토어/액션함수 객체의 타입을 정의
// (상단 컴포넌트의 파라미터에서 받을 인터페이스에서 사용)
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

// 스토어, 액션함수를 컴포넌트에 연결
export default connect(mapStateToProps, mapDispatchToProps)(Test01ValueScope);
