import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import { getSettingUserUpdateList } from './user.reducer';
import Pager from '../../component/pager/Pager';
import moment from 'moment';

export interface IUserUpdateListProps extends StateProps, DispatchProps {}

export const UserUpdateList = (props: IUserUpdateListProps) => {

  const listCountRef = useRef(null);

  const [pageInfo, setPageInfo] = useState({
    activePageEvent: 1,
    itemsCountPerPage: 10,
  });

  useEffect(() => {
  }, []);

  useEffect(() => {
    getUserUpdateList();
  }, [pageInfo]);

  const getUserUpdateList = () => {
    props.getSettingUserUpdateList(pageInfo.activePageEvent, pageInfo.itemsCountPerPage);
  }

  return (
    <>
      <div className="section-box gap-up-30">
        <div className="contents-table">
          <div className="contents-tabmenu gap-down-10">
            <h3>사용자 수정 이력 <span className="tag-number text-pink text-bold">{props.userUpdateList.length}</span></h3>
            <div className="obj-select option">
              <form className="select-cover">
                <div className="select-box">
                  <input type="checkbox" id="select-user-update-count" ref={listCountRef}/>
                  <label className="select small" htmlFor="select-user-update-count">{pageInfo.itemsCountPerPage}</label>
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
              <col style={{width:'10%'}}/>
              <col style={{width:'10%'}}/>
              <col style={{width:'20%'}}/>
              <col style={{width:'50%'}}/>
            </colgroup>
            <thead>
            <tr>
              <th>사용자 ID</th>
              <th>구분</th>
              <th>수정일자</th>
              <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {
              props.userUpdateList.length ?
                props.userUpdateList.map((userUpdate, index) => {
                  return (
                    <tr key={index}>
                      <td><span>{userUpdate.USER_ID}</span></td>
                      <td><span>{userUpdate.INFO}</span></td>
                      <td><span>{moment(userUpdate.TIME).format('YYYY-MM-DD HH:mm:ss')}</span></td>
                      <td><span>&nbsp;</span></td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={4}><span>데이터가 없습니다.</span></td>
                </tr>
            }
            </tbody>
          </table>
          <Pager
            handlePageChange={(newPage) => setPageInfo({...pageInfo, activePageEvent:newPage})}
            activePage={pageInfo.activePageEvent}
            totalItemsCount={props.userUpdateListTotalCount}
            itemsCountPerPage={pageInfo.itemsCountPerPage}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ user }: IRootState) => ({
  userUpdateList: user.userUpdateList,
  userUpdateListTotalCount: user.userUpdateListTotalCount,
});

const mapDispatchToProps = {
  getSettingUserUpdateList
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateList);
