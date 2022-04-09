import React, { useEffect, useState } from "react";
import Test01ValueScope from './test01-value-scope';
import moment from 'moment';

const Test01 = () => {

  const [nowSecond, setNowSecond] = useState(moment().format('ss'));

  useEffect(() => {
    // setInterval(updateNowSecond, 3 * 1000);
  }, []);

  const updateNowSecond = () => {
    setNowSecond(moment().format('ss'));
  }

  return (
    <>
      <div className="contents-area">
        <section className="contents-header">
          <h2>ReRender에 따른 변수 라이프사이클 확인</h2>
        </section>
        <div className="container">
          <Test01ValueScope number={nowSecond} /> <br /><br />
          <Test01ValueScope number={parseInt(nowSecond) + 10} />
        </div>
      </div>
    </>
  );
}

export default Test01;
