import React, { useEffect, useRef  } from 'react';
import { Link, RouteComponentProps, useHistory, useLocation } from 'react-router-dom';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import { IRootState } from '../../../shared/reducers';
import { getKeywordNewsList, getRcmdKeyword, getSearchPlaceholder } from '../../../shared/reducers/api';
import { connect } from 'react-redux';

export interface IHeaderProps extends StateProps, DispatchProps, RouteComponentProps {}

export const Header = (props:IHeaderProps) => {

  const history = useHistory();
  const location = useLocation();

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef,false);
  const onClick = () => setIsActive(!isActive);

  useEffect(()=>{
    // console.log('header reducer : '+ JSON.stringify(props.rcmdKeywords));
  })

  const isCurrentMain =():boolean=>{
    // console.log("curr path : "+location.pathname);
    if (location.pathname ==="/main"){
      return true;
    }else {
      return false;
    }
  }

  function nav_open() {
    document.getElementById("side_nav").style.width = "100%";
  }

  function nav_close() {
    document.getElementById("side_nav").style.width = "0";
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-md-flex navbar-lg-none">

        <div className="side-navbar">
          <i className="bi bi-side-open" onClick={nav_open}/>
        </div>

        <div className="navbar-logo">
          <Link to="/main">
          </Link>
        </div>

        {
          isCurrentMain() ?
            <></>
            :
            <div className="nav-search">
              <form className="search">
                <input type="search" className="form-control"/>
              </form>
            </div>
        }

        <div className="navbar-right">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="" aria-current="page" to="/keyword-news">키워드뉴스</Link>
            </li>
            <li className="nav-item">
              <Link className="" aria-current="page" to="/dashboard">대시보드</Link>
            </li>
            <li className="nav-item">
              <Link className="" aria-current="page" to="/analysis-report">분석보고서</Link>
            </li>
            <li className="nav-item">
              <Link className="" aria-current="page" to="">시멘틱검색</Link>
            </li>
          </ul>


          <div className="dropdown">
            <button onClick={onClick} type="button" id="comm-dropdown1" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="my-img"></span>
            </button>

            <div ref={dropdownRef} className={`dropdown-menu ${isActive ? "active":"inactive"} dropdown-menu-end`} aria-labelledby="comm-dropdown">
              <div className="row">
                <div className="col-12">
                  <div className="my-info">
                    <span className="my-img"></span>
                    <h5>MS00000</h5>
                  </div>
                </div>

                <div className="col-12">
                  <div className="my-box">
                    <h5>나의 키워드<span className="edit">edit</span></h5>
                    <div className="keyword-box">
                      <span>#</span><span>19</span><span></span><span>#</span><span>#</span>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="my-list">
                    <h5>좋아요 표시한 콘텐츠</h5>
                    <ul>
                      <li><a href="#">대시보드</a></li>
                      <li><a href="#">분석보고서</a></li>
                      <li><a href="#">키워드 뉴스</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-12">
                  <div className="my-list">
                    <h5>구독한 콘텐츠</h5>
                    <ul>
                      <li><a href="#">대시보드</a></li>
                      <li><a href="#">분석보고서</a></li>
                      <li><a href="#">키워드 뉴스</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-12">
                  <div className="my-list border-0">
                    <h5>관리자</h5>
                    <ul>
                      <li><a href="#">추천 키워드 설정</a></li>
                      <li><a href="#">뉴스 콘텐츠 관리</a></li>
                      <li><a href="#">시맨틱 콘텐츠 관리</a></li>
                      <li><a href="#">대시보드 작성</a></li>
                      <li><a href="#">보고서 작성</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>


        <div id="side_nav" className="side-nav">

          <div className="search-box">
            <form className="side-search" action="">
              <input type="text" placeholder="" name="search" />
                <button className="side-search-submit" type="submit"><i className="bi bi-search"></i></button>
            </form>
          </div>

          <div className="side-list">
            <a href="#">키워드 뉴스</a>
            <a href="#">분석 보고서</a>
            <a href="#">대시보드</a>
            <a href="#">시맨틱 검색</a>
          </div>
        </div>


      </nav>

      <div className="navbar-p navbar navbar-light navbar-md-none">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-3 col-xl-3 col-xxl-3">
              <div className="navbar-logo">
                <Link to="/main">
                </Link>
              </div>
            </div>

            {
              isCurrentMain() ?
                <div className="col-lg-4 col-xl-5 col-xxl-6">
                </div>
                :
                <div className="col-lg-4 col-xl-5 col-xxl-6">
                  <div className="nav-search">
                    <form className="example" action="">
                      <input type="text" placeholder="" name="search" />
                      <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                  </div>
                  <h4 className="search-desc">문장이나 단락을 통해 의도를 이해하는 <b>시맨틱 검색</b>을 경험해 보세요</h4>
                </div>
            }

            <div className="col-lg-5 col-xl-4 col-xxl-3">
              <div className="navbar-right">
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link className="" aria-current="page" to="/keyword-news">키워드뉴스</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="" aria-current="page" to="/dashboard">대시보드</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="" aria-current="page" to="/analysis-report">분석보고서</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="" aria-current="page" to="">시멘틱검색</Link>
                  </li>
                </ul>

                <div className="dropdown">
                  <button onClick={onClick} type="button" id="comm-dropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="my-img"></span>
                  </button>

                  <div ref={dropdownRef} className={`dropdown-menu ${isActive ? "active":"inactive"} dropdown-menu-end`} aria-labelledby="comm-dropdown">
                  <div className="row">
                      <div className="col-12">
                        <div className="my-info">
                          <span className="my-img"></span>
                          <h5>MS00000</h5>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="my-box">
                          <h5>나의 키워드<span className="edit">edit</span></h5>
                          <div className="keyword-box">
                            <span>#</span><span>1</span><span>2</span><span>#</span><span>#</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="my-list">
                          <h5>좋아요 표시한 콘텐츠</h5>
                          <ul>
                            <li><a href="#">대시보드</a></li>
                            <li><a href="#">분석보고서</a></li>
                            <li><a href="#">키워드 뉴스</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="my-list">
                          <h5>구독한 콘텐츠</h5>
                          <ul>
                            <li><a href="#">대시보드</a></li>
                            <li><a href="#">분석보고서</a></li>
                            <li><a href="#">키워드 뉴스</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="my-list border-0">
                          <h5>관리자</h5>
                          <ul>
                            <li><a href="#">추천 키워드 설정</a></li>
                            <li><a href="#">뉴스 콘텐츠 관리</a></li>
                            <li><a href="#">시맨틱 콘텐츠 관리</a></li>
                            <li><a href="#">대시보드 작성</a></li>
                            <li><a href="#">보고서 작성</a></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );

}

const mapStateToProps = ({ api }: IRootState) => ({
  isLoading: api.loading,
  rcmdKeywords: api.rcmdKeywords,
  newsList: api.newsList,
  myKeywords : api.myKeywords,
});

const mapDispatchToProps = {
  getRcmdKeyword,
  getKeywordNewsList,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Header);

