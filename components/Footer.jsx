import React from 'react';

import bitAppsBlack from '../public/assets/img/bitapps_white.png';

const Footer = (props) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className="footer-logo">
            <a className="navbar-brand" href="#">
              <img src={bitAppsBlack.src} width="80" />
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the.
            </p>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">
            <h4>About Us</h4>

            <ul className="list-unstyled">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Features item</a>
              </li>
              <li>
                <a href="#">Live streaming</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">
            <h4>About Us</h4>

            <ul className="list-unstyled">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Features item</a>
              </li>
              <li>
                <a href="#">Live streaming</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">
            <h4>Support</h4>

            <ul className="list-unstyled">
              <li>
                <a href="#">faq</a>
              </li>
              <li>
                <a href="#">Editor help</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">
            <h4>About Us</h4>

            <ul className="list-unstyled">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Features item</a>
              </li>
              <li>
                <a href="#">Live streaming</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
