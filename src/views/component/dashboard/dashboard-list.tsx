import React, { useEffect, useState } from 'react';
import DashboardItem from './dashboard-item';


export interface IDashboardProps {
  keywords: string[]
}

const DashboardList = () => {

  const[keywordArr, setkeywordArr] = useState(

  );

  useEffect(() => {
    console.log(keywordArr);
  }, []);

  return (
    <>
      <div className="cont-body">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-2">
          <DashboardItem keywords={[""]}/>
          <DashboardItem keywords={[""]}/>
          <DashboardItem keywords={[""]}/>
          <DashboardItem keywords={[""]}/>
        </div>
      </div>
    </>
  );
}

export default DashboardList;
