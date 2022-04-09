import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Test02FireMethodChild from './test02-fire-method-child';

// 리덕스/액션함수를 포함하는 인터페이스 (명명규칙: I + 컴포넌트명 + Porps)
export interface ITemplateProps extends StateProps, DispatchProps {}

// props 에 리덕스/액션함수의 기능이 포함되어 있다.
export const Test02FireMethodParent = (props: ITemplateProps) => {

  const childRef = useRef(null);

  const fireChildMethod = () => {
    let user = childRef.current?.focus();
    console.log('Test02FireMethodParent - user: ', user);
  }

  return (
    <>
      <br /><br />
      <h1>[ 소스와 console.log 같이 확인이 필요함 ]</h1><br /><br /><br /><br />
      <button onClick={fireChildMethod}>자식 메소드 수행</button><br /><br />
      <Test02FireMethodChild ref={childRef} />
    </>
  );
}


// =================================
// 아래의 코드는 대부분의 컴포넌트가 비슷한 형식으로 가지게 될 예정

// 리덕스 스토어를 가지는 객체
const mapStateToProps = ({  }: IRootState) => ({
  // isAuthenticated: authentication.isAuthenticated,
  // isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
});

// 리듀스 액션 함수를 가지는 객체
const mapDispatchToProps = {
  // getSession
};

// 스토어/액션함수 객체의 타입을 정의
// (상단 컴포넌트의 파라미터에서 받을 인터페이스에서 사용)
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

// 스토어, 액션함수를 컴포넌트에 연결
export default connect(mapStateToProps, mapDispatchToProps)(Test02FireMethodParent);
