import React, { useEffect, useState } from 'react';
import { IKeywordNewsProps as IProps} from './keyword-news-list';
import { NEWS, FACEBOOK } from '../../../views/img';
// import {ReactComponent as Icon} from '../../../assets/img/icon/icon_area.svg';


const KeywordNewsItem: React.FC<IProps> = () => {

  const renderKeyword = (): JSX.Element[] => {
    // let id = keywords.keywords.length
    // return keywords.keywords.map(keyword => {
    //   return (
    //     <>
    //       <PinkSwichButton isKeyword={false} btnName={keyword} id={"reco-keyword"+id--} />
    //     </>
    //   )
    // })
    return ;
  }

  return (
    <>

      <div className="col-12">
        <div className="cont-list-item">
          <img className="item-img" src="img/icon/kb.png"/>
          <div className="item-info">
            <h5 className="item-title">국민카드 : Google Play 앱</h5>
            <ul className="item-desc">
              <span><i className="bi bi-clock"></i></span>
              <li>2020-12-31 23:57:14</li>
            </ul>
            <ul className="item-desc">
              <span><i className="bi bi-link-45deg"></i></span>
              <li>한국일보</li>
            </ul>
            <p className="item-text">
              "KB국민카드 APP만의 특징" - 빅데이터를 활용한 맞춤카드 추천기능! - 통합검색을 통한 빠른
              메뉴 이동! - 개인화 이벤트 제공 - 손쉽게 보다 안전한 간편 로그인</p>
          </div>
        </div>
      </div>

    </>
  );

}

export default KeywordNewsItem;

