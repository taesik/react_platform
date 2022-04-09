import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from './../../../shared/reducers';
import { setSettingUserAdd } from './user.reducer';

export interface UserModalAdd {
  closeCallback: Function;
  okCallback: Function;
}
export interface IUserModalAddProps extends StateProps, DispatchProps, UserModalAdd {}

export const UserModalAdd = (props: IUserModalAddProps) => {

  const [userInfo, setUserInfo] = useState({
    userId: '',
    pass: '',
    userNm: '',
    org: '',
    phone: '',
    authLevel: '4',
  });

  const userAdd = async () => {
    await props.setSettingUserAdd(
      userInfo.userId,
      userInfo.pass,
      userInfo.userNm,
      userInfo.org,
      userInfo.phone,
      userInfo.authLevel,
    );
    await props.okCallback();
  }

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="layer-wrap input-form w400 round">
        <div className="popup-wrapper">
          <div className="popup-container ">
            <div className="title-area mint">
              <h2>사용자 추가</h2>
              <div className="side-btn">
                <a className="btn-close" onClick={() => props.closeCallback()}><i className="icon-close"></i></a>
              </div>
            </div>
            <div className="popup-contents none-padding">
              <div className="input-area gap-down-30 gap-up-30">
                <input type="text" placeholder="사용자 ID(최대 16자리)"
                       value={userInfo.userId} onChange={(e) => setUserInfo({...userInfo, userId: e.target.value})}/>
                <input type="password" placeholder="비밀번호(최대 32자리)"
                       value={userInfo.pass} onChange={(e) => setUserInfo({...userInfo, pass: e.target.value})}/>
                <input type="text" placeholder="사용자명(최대 20자리)"
                       value={userInfo.userNm} onChange={(e) => setUserInfo({...userInfo, userNm: e.target.value})}/>
                <input type="text" placeholder="기관명" style={{marginTop: '10px'}}
                       value={userInfo.org} onChange={(e) => setUserInfo({...userInfo, org: e.target.value})}/>
                <input type="text" placeholder="전화번호"
                       value={userInfo.phone} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}/>
              </div>
              <div className="submit-area">
                <a className="btn-close" onClick={() => props.closeCallback()}>취소</a>
                <a onClick={userAdd}>완료</a>
              </div>
            </div>
          </div>
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
  setSettingUserAdd
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserModalAdd);
