import React, { useEffect, useState } from 'react';
import { IKeywordNewsProps as IProps} from './keyword-news-list';
import { NEWS, FACEBOOK } from '../../../views/img';
// import {ReactComponent as Icon} from '../../../assets/img/icon/icon_area.svg';


const KeywordNewsItemInSearch: React.FC<IProps> = () => {

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
      <div className="col">
        <div className="card radius-2">
          <div className="card-b">
            <h5 className="c-title">국민카드 해지방어 프로모션</h5>
            <ul className="c-tag">
              <li><span>#</span>KB국민카드</li>
              <li><span>#</span>COVID-19</li>
              <li><span>#</span>2022년도 경제전망</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

}

export default KeywordNewsItemInSearch;

