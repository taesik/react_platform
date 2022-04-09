import React, { useEffect, useState } from 'react';
import { IRootState } from '../../shared/reducers';
import { INewsListProps as Props } from '../component/news/news-list';
import { connect } from 'react-redux';
import {
        getKeywordNewsList,
        } from '../../shared/reducers/api';


export interface IAdminDshbrdProps extends StateProps, DispatchProps {}

export const AdminKeyword = (props:IAdminDshbrdProps) => {

  const [kewwordOne, setKewwordOne] = React.useState("");
  const [kewwordTwo, setKewwordTwo] = React.useState("");
  const [kewwordThree, setKewwordThree] = React.useState("");
  const onchangeOne =e => { setKewwordOne(e.target.value);}
  const onchangeTwo =e => { setKewwordTwo(e.target.value);}
  const onchangeThree =e => { setKewwordThree(e.target.value);}
  const enrollAPI =() => { alert( `1: ${kewwordOne}  2: ${kewwordTwo}  3:${kewwordThree}`);}

  useEffect( () => {
    console.log(`1: ${kewwordOne}`);
    console.log(`2: ${kewwordTwo}`);
    console.log(`3: ${kewwordThree}`);
  },[kewwordOne,kewwordTwo,kewwordThree]);
  return (
    <>
      <div className="bg-primary-1">
        <div className="container">
          <div className="sub-top">
            <div className="sub-title">
              <h2>관리자<span className="sub-title-en">Admin</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cont">
          <div className="cont-head">
            <div className="row">
              <div className="col-12">
                <h5 className="cont-title">추천 키워드 설정</h5>
                <span className="cont-title-en">Write Keyword</span>
              </div>
            </div>
          </div>

          <div className="cont-body">
            <div className="row">
              <div className="col-12">
                <form>
                  <table className="set-recommand-keyword">
                    <tbody>
                    <tr>
                      <td>
                        <h6>키워드 1</h6>
                      </td>
                      <td>
                        <input type="text" placeholder="키워드를 입력하세요"
                               value={kewwordOne} onChange={onchangeOne}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>키워드 2</h6>
                      </td>
                      <td>
                        <input type="text" placeholder="키워드를 입력하세요"
                               value={kewwordTwo} onChange={onchangeTwo}/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>키워드 3</h6>
                      </td>
                      <td>
                        <input type="text" placeholder="키워드를 입력하세요"
                               value={kewwordThree} onChange={onchangeThree}/>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <div className="cont-bottom">
            <div className="button-group-two">
              {/*<button type="button" className="btn btn-cancel" data-bs-dismiss="modal">취소</button>*/}
              <button type="submit" className="btn btn-update" onClick={enrollAPI}>등록</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );

}

const mapStateToProps = ({ api }: IRootState) => ({
  newsList: api.newsList,
  rcmdKeywords: api.rcmdKeywords,
  isLoading: api.loading,
  myKeyword: api.myKeywords,
});

const mapDispatchToProps = {
  // getKeyword,
  getKeywordNewsList
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AdminKeyword);
