import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import { setSettingUserUpdate } from './user.reducer';
import { IUser } from '../../../shared/model/user.model';

export interface UserModalUpdate {
  user: IUser;
  closeCallback: Function;
  okCallback: Function;
}
export interface IUserModalUpdateProps extends StateProps, DispatchProps, UserModalUpdate {}

export const UserModalUpdate = (props: IUserModalUpdateProps) => {

  const [userInfo, setUserInfo] = useState({
    userId: props.user.USER_ID,
    pass: props.user.USER_PW,
    userNm: props.user.USER_NM,
    org: props.user.ORGA_NM,
    phone: props.user.PHON_NO,
    authLevel: String(props.user.AUTH_LVL),
  });

  const userUpdate = async () => {
    await props.setSettingUserUpdate(
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
              <h2>사용자 수정</h2>
              <div className="side-btn">
                <a className="btn-close" onClick={() => props.closeCallback()}><i className="icon-close"></i></a>
              </div>
            </div>
            <div className="popup-contents none-padding">
              <div className="input-area gap-down-30 gap-up-30">
                <input type="text" placeholder="사용자 ID(최대 16자리)"
                       value={userInfo.userId} readOnly/>
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
                <a onClick={userUpdate}>완료</a>
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
  setSettingUserUpdate
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserModalUpdate);
