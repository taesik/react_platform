import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import { IUser } from '../../../shared/model/user.model';
import { setSettingUserDel } from './user.reducer';

export interface UserModalDel {
  user: IUser;
  closeCallback: Function;
  okCallback: Function;
}
export interface IUserModalDelProps extends StateProps, DispatchProps,UserModalDel {}

export const UserModalDel = (props: IUserModalDelProps) => {

  useEffect(() => {
  }, []);

  const userDel = async () => {
    await props.setSettingUserDel(props.user.USER_ID);
    await props.okCallback();
  }

  return (
    <>
      <div className="layer-wrap w400 round confirm">
        <div className="popup-wrapper">
          <div className="popup-container ">
            <div className="title-area mint">
              <h2>사용자 삭제</h2>
              <div className="side-btn">
                <a className="btn-close" onClick={() => props.closeCallback()}><i className="icon-close"></i></a>
              </div>
            </div>
            <div className="popup-contents none-padding">
              <div className="input-area gap-down-60 gap-up-30">
                <p>선택한 {props.user.USER_ID} 사용자를 정말로 삭제하시겠습니까?</p>
              </div>
              <div className="submit-area">
                <a className="btn-close" onClick={() => props.closeCallback()}>취소</a>
                <a onClick={userDel}>삭제</a>
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
  setSettingUserDel
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserModalDel);
