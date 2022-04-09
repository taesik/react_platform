import React, { useEffect, useState } from 'react';
import KeywordNewsItemInSearch from "./keyword-news-item-in-search";



const KeywordNewsListInSearch = () => {

  const[keywordArr, setkeywordArr] = useState(

  );

  useEffect(() => {
    console.log(keywordArr);
  }, []);

  return (
    <>
      <div className="cont-b">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-2">
          <KeywordNewsItemInSearch keywords={[""]}/>
          <KeywordNewsItemInSearch keywords={[""]}/>
          <KeywordNewsItemInSearch keywords={[""]}/>
          <KeywordNewsItemInSearch keywords={[""]}/>
        </div>
      </div>
    </>
  );
}

export default KeywordNewsListInSearch;
