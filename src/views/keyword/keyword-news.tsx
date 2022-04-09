import React, { useEffect, useState } from 'react';
import { IRootState } from '../../shared/reducers';
import { connect } from 'react-redux';
import NewsList,{ INewsListProps } from '../component/news/news-list';
import KeywordRcmdList from '../component/keyword/keyword-rcmd-list'
import {getUserKeyword,
        getKeywordNewsList,
        getRcmdKeyword
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
  COMMUNITY,
} from '../../views/img';
import { INews } from '../../shared/model/news.model';
import { KeywordSbcrbList } from '../component/keyword/keyword-sbcrb-list';


export interface IMainProps extends StateProps, DispatchProps {

}

export const KeywordNews = (props: IMainProps) => {

  const [orderedList, setOrderedList] = useState([]);
  const [keywords, setKeywords ] = useState([""])
  const [myWords,setMyWords]=useState(["0000","100","20","30","40","50","60"]);
  const MyWordsCallBack = (Arr: string[]) => {
    setMyWords(Arr);
  }


  useEffect(() => {
    //recommend keyword가 있을경우 page
    getRcmdKeyword();
    getUserKeyword();

    if(typeof props.rcmdkeywords === 'undefined' || props.rcmdkeywords === null){
      console.log('rcmdkeywords  not loading');
      return;
    }

    if(typeof props.myKeyword === 'undefined' || props.myKeyword === null){
      console.log('mykeyword  not loading');
      return;
    }
    // setKeywords([...props.rcmdkeywords,...props.myKeyword]);

    getKeywordNewsList(keywords);

  }, [keywords]);


  useEffect(() => {
    if(typeof props.newsList === 'undefined' || props.newsList === null)
      return;

    if( props.newsList.length == 0 )
      return;

    const origin = new Array<INews>(...props.newsList);
    const list = origin.sort( (a : INews, b : INews ) => { return a.date > b.date ? -1 : 1 });

    setOrderedList(list);
  }, [props.newsList]);

  return (
    <>
      <div className="bg-primary-1">
        <div className="container">
          <div className="sub-top">
            <div className="sub-title">
              <h2>키워드 뉴스<span className="sub-title-en">Keyword News</span></h2>
              {/*<div className="dropdown d-inline-block f-rifgt">*/}
              {/*  <a className="dropdown-toggle" href="#" id="check_dropdown" role="button" data-bs-toggle="dropdown"*/}
              {/*     aria-haspopup="true" aria-expanded="false">*/}
              {/*    <i className="bi bi-check2-square va-middle"></i>*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sub-top-list">
          <div className="row">
            <KeywordSbcrbList keywords={myWords} MyWrdsFunc={MyWordsCallBack} />
            <KeywordRcmdList keywords={["타인","의","키워드"]} myWrds={myWords} MyWrdsFunc={MyWordsCallBack}  />
          </div>
        </div>
      </div>

      {/*<KeywordRcmdList keywords={keywords}/>*/}
      <div className="container">
        <div className="cont">
          <div className="cont-head">
            <div className="row">
              <div className="col-12">
                <h5 className="cont-title">키워드 뉴스</h5>
                <span className="cont-title-en">Keyword News</span>
                <ul className="cont-icon-list">
                  <li><img src={YOUTUBE} /><span>유튜브</span></li>
                  <li><img src={FACEBOOK} /><span>페이스북</span></li>
                  <li><img src={INSTAGRAM} /><span>인스타그램</span></li>
                  <li><img src={TWITTER} /><span>트위터</span></li>
                  <li><img src={NAVER} /><span>네이버</span></li>
                  <li><img src={BLOG} /><span>블로그</span></li>
                  <li><img src={NEWS} /><span>뉴스</span></li>
                  <li><img src={COMMUNITY} /><span>커뮤니티</span></li>
                </ul>
              </div>
            </div>
          </div>
          {/*<NewsList newsList={orderedList}/>*/}
          <NewsList myKeywords={myWords} MyWrdsFunc={MyWordsCallBack} newsList={[
            {
              id : "id",
              title : "title",
              content : "content",
              date : "string",
              media : "string",
              channel : "string",
              url : "string",
              entities : ["1","20","3","4"],
            },{
              id : "id",
              title : "title",
              content : "content",
              date : "string",
              media : "string",
              channel : "string",
              url : "string",
              entities : ["1","20","3","4"],
            },{
              id : "id",
              title : "title",
              content : "content",
              date : "string",
              media : "string",
              channel : "string",
              url : "string",
              entities : ["1","20","3","4"],
            },{
              id : "id",
              title : "title",
              content : "content",
              date : "string",
              media : "youtube",
              channel : "string",
              url : "string",
              entities : ["1","20","3","4"],
            },
          ]}/>

        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ api }: IRootState) => ({
  newsList: api.newsList,
  rcmdkeywords: api.rcmdKeywords,
  isLoading: api.loading,
  myKeyword: api.myKeywords,
});

const mapDispatchToProps = {
  getRcmdKeyword,
  getUserKeyword,
  getKeywordNewsList,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(KeywordNews);
