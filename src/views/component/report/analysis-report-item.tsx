import React from 'react';


const AnalysisReportItem = (props: { moveFunc }) => {

  const moveAnalysisReportDetail = () => {
    props.moveFunc();
  }

  return (
    <>
      <div className="col">
        <div className="card radius-2" onClick={moveAnalysisReportDetail}>

          {/*<img className="c-badge" src="img/icon/hot.png" />*/}
          <div className="c-switch">
            <input id="11" className="checkbox-toggle toggle-switch" type="checkbox"/>
            <label htmlFor="11" data-on="ON" data-off="OFF"></label>
          </div>
          <div className="card-b">
            <div className="mb-1">
              <img className="i-svg" src="img/svg/area.svg"/>
              <div className="i-desc mt-1">[범위형]</div>
            </div>

            <div className="d-inline-block">
              <h5 className="c-title">promotion</h5>
              <p className="c-desc">해지방어 키워드와 해지방어 이벤트 접속자와의 관계를 파악 평균 이벤트 접속자보다 많은 이벤트 접속자 유발</p>
                <ul className="c-desc">
                  <span><i className="bi bi-clock"></i></span>
                  <li>2021-07-01 09:00:00</li>
                </ul>
                <ul className="c-tag">
                  <li><span>#</span>K</li>
                  <li><span>#</span>COVID-19</li>
                  <li><span>#</span>2022</li>
                </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );

}

export default AnalysisReportItem;


