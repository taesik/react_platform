import React, { useEffect, useState } from 'react';
import { IRootState } from '../../shared/reducers';
import { INewsListProps as Props } from '../component/news/news-list';
import { connect } from 'react-redux';
import NewsList,{ INewsListProps } from '../component/news/news-list';
import {
        getKeywordNewsList,
        } from '../../shared/reducers/api';
import {
  KB_LOGO,
  KB,
  YOUTUBE,
  FACEBOOK,
  INSTAGRAM,
  TWITTER,
  NAVER,
  BLOG,
  NEWS,
  COMMUNITY, CHANNEL_IMG,
} from '../../views/img';
import NewsDetailModal from "../component/popup/news-contents-view";
import KeywordsModal from "../component/popup/keywords-modal";
import EnrollDshBrdModal from "../component/popup/enroll-dashboard-modal";

export interface IAdminDshbrdProps extends StateProps, DispatchProps {

}

export const AdminDashBrd = (props:IAdminDshbrdProps) => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <h5 className="cont-title">대시보드 작성</h5>
                <span className="cont-title-en">Write Dashboard</span>
              </div>
            </div>
          </div>
          <div className="cont-body">
            <div className="cont-top-box">
              <div className="pr-1 w-md-85 w-lg-90">
                <form className="search-group">
                  <input type="text" placeholder="대시보드 검색" name="search"/>
                    <button className="submit" type="submit">
                      <i className="bi bi-search"/></button>
                </form>
              </div>
              <div className="w-md-15 w-lg-10">
                <button className="btn btn-write" type="submit"
                        onClick={() => {setShow(!show)}}

                >신규등록</button>
              </div>
            </div>
            <div className="cont-box">
              <div className="dash-list-close">
                <button className="btn-x">
                  <i className="bi bi-x"/>
                </button>
              </div>
              <div className="cont-box-list">
                <i className="bi-xy bi-mark-down"/>
              </div>
              <span className="dash-list-title">신규 사용자 추이</span>
              <div className="dash-list-desc">
                <span>데이터혁신부 홍길동 차장</span>
                <ul className="item-desc">
                  <span><i className="bi bi-clock"/></span>
                  <li>2020-12-31</li>
                </ul>
                <p className="tag">
                  <span>#KB국민카드</span><span>#KB국민카드</span>
                </p>
              </div>
            </div>
          </div>
          <div className="cont-bottom">
            <div className="row">
              <div className="col-12">
                <div className="button-group-one">
                  <button className="btn btn-sm">more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnrollDshBrdModal isShow={show} closeFunc={handleClose}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashBrd);
