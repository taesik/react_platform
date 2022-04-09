import React from 'react';
import { IKeywordNewsProps as IProps} from './keyword-news-list';


const KeywordNewsItem: React.FC<IProps> = () => {



  return (
    <>

      <div className="col-12">
        <div className="cont-list-item">
          <img className="item-img" src="img/icon/fb"/>
          <div className="item-info">
            <h5 className="item-title">Google Play 앱</h5>
            <ul className="item-desc">
              <span><i className="bi bi-clock"></i></span>
              <li>2020-12-31 23:57:14</li>
            </ul>
            <ul className="item-desc">
              <span><i className="bi bi-link-45deg"></i></span>
              <li>한국일보</li>
            </ul>
            <p className="item-text">
              개인화 이벤트 제공 - 손쉽게 보다 안전한 간편 로그인</p>
          </div>
        </div>
      </div>

    </>
  );

}

export default KeywordNewsItem;

