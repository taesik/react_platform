import React from 'react';
import {  RouteComponentProps } from 'react-router-dom';

export interface IHeaderProps extends RouteComponentProps {}

export const Footer = (props) => {


  return (
    <>
      <footer>
        <div className="gnb-footer">
          <div className="row mx-lg-5 mx-md-3 mx-0">
            <div className="col-6">
              <h6 className="gnb-footer-text my-1">© data inovation</h6>
            </div>
            <div className="col-6">
              <h6 className="gnb-footer-text my-1 text-right">
                <a href="#">서비스테스크(업무문의)</a>
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
