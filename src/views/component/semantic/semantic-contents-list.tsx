import React, { useEffect, useState } from 'react';
import SemanticContentsItem from './semantic-contents-item';



export interface ISemanticContentsProps {
  keywords: string[]
}

const SemanticContentsList = () => {

  const[keywordArr, setkeywordArr] = useState(

  );

  useEffect(() => {
    console.log(keywordArr);
  }, []);

  return (
    <>
      <div className="cont-b">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 mb-2">
         <SemanticContentsItem keywords={[""]}/>
         <SemanticContentsItem keywords={[""]}/>
         <SemanticContentsItem keywords={[""]}/>
         <SemanticContentsItem keywords={[""]}/>
        </div>
      </div>
    </>
  );
}

export default SemanticContentsList;
