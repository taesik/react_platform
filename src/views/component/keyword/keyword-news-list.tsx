import React, { useEffect, useState } from 'react';
import KeywordNewsItem from './keyword-news-item';
import {KeywordItem} from "./keyword-item";




export interface IKeywordNewsProps {
  keywords: string[]
}

const KeywordNewsList = () => {

  const[keywordArr, setkeywordArr] = useState(

  );

  useEffect(() => {
    console.log(keywordArr);
  }, []);

  return (
    <>
      <div className="cont-body">
        <div className="cont-list">
          <div className="row">
            <KeywordNewsItem keywords={[""]}/>
          </div>
          <KeywordItem keywords={[""]} />
        </div>
      </div>
    </>
  );
}

export default KeywordNewsList;
