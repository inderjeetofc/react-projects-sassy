import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <>
      <div className="footer">
        <Link to="/">
          <div className="logo logo__footer">
            <p className="logo_span logo--hover">Movie App</p>
            <p className="footer__rights-string">
              &#169; All RIghts Resereved @Movies App
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Footer;
