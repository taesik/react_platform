import React from 'react';
import { IKeywordNewsProps as IProps} from './keyword-news-list';
// import {ReactComponent as Icon} from '../../../assets/img/icon/icon_area.svg';


const KeywordNewsItemInSearch: React.FC<IProps> = () => {



  return (
    <>
      <div className="col">
        <div className="card radius-2">
          <div className="card-b">
            <h5 className="c-title"> promotion</h5>
            <ul className="c-tag">
              <li><span>#</span>1</li>
              <li><span>#</span>COVID-19</li>
              <li><span>#</span>2022</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

}

export default KeywordNewsItemInSearch;

