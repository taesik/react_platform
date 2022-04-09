import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import UserList from './user-list';
import UserUpdateList from './user-update-list';

export interface IUserMgmtProps extends StateProps, DispatchProps {}

export const UserMgmt = (props: IUserMgmtProps) => {

  useEffect(() => {
    //링크 클릭시 해당 레이어팝업 호출
    // $(".gis-parts .call-popup").click(function () {
    //   layer_open($(this).attr('data-layer'));
    // });
  }, []);

  return (
    <>
      <div className="contents-area none-aside setting">
        <section className="contents-header none-border">
          <h2>사용자 정보 관리</h2>
          {/*<ol className="route">*/}
          {/*  <li><a href=""><i className="icon-home"></i>&nbsp;온수 변전소</a></li>*/}
          {/*  <li><a href="">설정</a></li>*/}
          {/*  <li><a href="">사용자 정보 관리</a></li>*/}
          {/*</ol>*/}
        </section>
        <div className="container">
          <section className="gis-parts solo">
            <UserList />
            <UserUpdateList />
          </section>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({  }: IRootState) => ({
  // isAuthenticated: authentication.isAuthenticated,
  // isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
});

const mapDispatchToProps = {
  // getSession
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserMgmt);
