import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from './../shared/reducers';

// 리덕스/액션함수를 포함하는 인터페이스 (명명규칙: I + 컴포넌트명 + Porps)
export interface ITemplateProps extends StateProps, DispatchProps {}

// props 에 리덕스/액션함수의 기능이 포함되어 있다.
const Template = (props: ITemplateProps) => {

  // State 객체를 선엄
  const [user, setUser] = useState({
    age: 38,
    sex: 'M'
  });

  // State 객체의 속성을 사용하기 쉽도록 비구조화 할당
  const { age, sex } = user;

  // age, sex가 변경되면 호출될 함수
  useEffect(() => {
    setUser({
      ...user,
      age: age,
      sex: sex
    })

    // 컴포넌트가 언마운트 되거나 업데이트 되기전에 수행될 작업
    return () => {
      console.log('user 객체가 변경되기 전에 작업 수행');
    };

  }, [age, sex]);

  // 컴포넌트 렌더링이 되면 수행할 함수 (한번만 수행된다)
  useEffect(() => {
    // Init Code

    // 컴포넌트가 언마운트 될 때 한번만 수행된다.
    return () => {
      console.log('컴포넌트 언마운트');
    };
  }, []);

  return (
    <>
    {/*  HTML 및 컴포넌트 코드가 들어감*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(Template);
