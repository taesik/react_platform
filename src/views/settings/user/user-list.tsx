import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from './../../../shared/reducers';
import { getSettingUserList } from './user.reducer';
import Pager from '../../component/pager/Pager';
import moment from 'moment';
import UserModalAdd from './user-modal-add';
import UserModalUpdate from './user-modal-update';
import { IUser } from '../../../shared/model/user.model';
import UserModalDel from './user-modal-del';

export interface IUserListProps extends StateProps, DispatchProps {}

export const UserList = (props: IUserListProps) => {

  const [isShowUserModalAdd, setIsShowUserModalAdd] = useState(false);
  const [isShowUserModalUpdate, setIsShowUserModalUpdate] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null as IUser);
  const [isShowUserModalDel, setIsShowUserModalDel] = useState(false);

  const listCountRef = useRef(null);
  const [pageInfo, setPageInfo] = useState({
    activePageEvent: 1,
    itemsCountPerPage: 10,
  });

  useEffect(() => {
  }, []);

  useEffect(() => {
    getUserList();
  }, [pageInfo]);

  const getUserList = () => {
    props.getSettingUserList(pageInfo.activePageEvent, pageInfo.itemsCountPerPage);
  }

  return (
    <>
      <div className="section-box">
        <div className="contents-table">
          <div className="contents-tabmenu gap-down-10">
            <h3>사용자 현황 <span className="tag-number text-pink text-bold">{props.userList.length}</span></h3>
            <a className="btn white narrow" onClick={() => setIsShowUserModalAdd(true)}>사용자 추가 +</a>
            <div className="obj-select option">
              <form className="select-cover">
                <div className="select-box">
                  <input type="checkbox" id="select-user-count" ref={listCountRef}/>
                  <label className="select small" htmlFor="select-user-count">{pageInfo.itemsCountPerPage}</label>
                  <div className="option small">
                    {
                      [10, 25, 50, 100].map((value, index) =>
                        <a key={index}
                           onClick={() => {
                             setPageInfo({...pageInfo, itemsCountPerPage: value});
                             listCountRef.current.checked = false;
                           }}
                        >{value}</a>
                      )
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
          <table className="table-db">
            <colgroup>
              <col style={{width:'10%'}} />
              <col style={{width:'10%'}} />
              <col style={{width:'27%'}} />
              <col/>
              <col/>
              <col/>
              <col style={{width:'70px'}} />
              <col style={{width:'70px'}} />
            </colgroup>
            <thead>
            <tr>
              <th>로그인 ID</th>
              <th>사용자명</th>
              <th>생성일자</th>
              <th>기관명</th>
              <th>전화번호</th>
              <th>권한</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {
              props.userList.length ?
                props.userList.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td><span>{user.USER_ID}</span></td>
                      <td><span>{user.USER_NM}</span></td>
                      <td><span>{moment(user.CREA_TIME).format('YYYY-MM-DD HH:mm:ss')}</span></td>
                      <td><span>{user.ORGA_NM}</span></td>
                      <td><span>{user.PHON_NO}</span></td>
                      <td><span>
                        {
                          user.AUTH_LVL === 1 ? '관리자' :
                          user.AUTH_LVL === 2 ? '운영자' :
                          user.AUTH_LVL === 3 ? '감시자' :
                          user.AUTH_LVL === 4 ? '사용자' : ''
                        }
                      </span></td>
                      <td><a className="txt-color mint text-bold"
                             onClick={() => {
                               setSelectedUser(user);
                               setIsShowUserModalUpdate(true);
                             }}>수정</a></td>
                      <td><a className="txt-color pink text-bold"
                             onClick={() => {
                               setSelectedUser(user);
                               setIsShowUserModalDel(true);
                             }}>삭제</a></td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={8}><span>데이터가 없습니다.</span></td>
                </tr>
            }
            </tbody>
          </table>
          <Pager
            handlePageChange={(newPage) => setPageInfo({...pageInfo, activePageEvent:newPage})}
            activePage={pageInfo.activePageEvent}
            totalItemsCount={props.userListTotalCount}
            itemsCountPerPage={pageInfo.itemsCountPerPage}
          />
        </div>
      </div>
      {
        isShowUserModalAdd &&
        <UserModalAdd closeCallback={() => setIsShowUserModalAdd(false)}
                      okCallback={() => {
                        setIsShowUserModalAdd(false);
                        getUserList();
                      }} />
      }
      {
        isShowUserModalUpdate &&
        <UserModalUpdate user={selectedUser}
                         closeCallback={() => setIsShowUserModalUpdate(false)}
                         okCallback={() => {
                           setIsShowUserModalUpdate(false);
                           getUserList();
                         }} />
      }
      {
        isShowUserModalDel &&
        <UserModalDel user={selectedUser}
                      closeCallback={() => setIsShowUserModalDel(false)}
                      okCallback={() => {
                        setIsShowUserModalDel(false);
                        getUserList();
                      }} />
      }
    </>
  );
}

const mapStateToProps = ({ user }: IRootState) => ({
  userList: user.userList,
  userListTotalCount: user.userListTotalCount,
});

const mapDispatchToProps = {
  getSettingUserList
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
