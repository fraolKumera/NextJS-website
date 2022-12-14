import React from "react";
import Image from "next/image";

const Teams = () => (
  <section id="team" className="padd-section text-center">
    <div className="container" data-aos="fade-up">
      <div className="section-title text-center">
        <h2>Team Member</h2>
        <p className="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>

      <div className="row">
        <div
          className="col-md-6 col-md-4 col-lg-3"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="team-block bottom">
            <Image
              layout="responsive"
              height={336}
              width={324}
              src="/assets/img/team/1.jpg"
              className="img-responsive"
              alt="Image"
            />
            <div className="team-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
              <span>manager</span>
              <h4>Kimberly Tran</h4>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-md-4 col-lg-3"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="team-block bottom">
            <Image
              layout="responsive"
              height={336}
              width={324}
              src="/assets/img/team/2.jpg"
              className="img-responsive"
              alt="Image"
            />
            <div className="team-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
              <span>manager</span>
              <h4>Kimberly Tran</h4>
            </div>
          </div>
        </div>

        <div
          className="col-md-6 col-md-4 col-lg-3"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="team-block bottom">
            <Image
              src="/assets/img/team/3.jpg"
              className="img-responsive"
              alt="Image"
              layout="responsive"
              height={336}
              width={324}
            />
            <div className="team-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
              <span>manager</span>
              <h4>Kimberly Tran</h4>
            </div>
          </div>
        </div>

        <div
          className="col-md-6 col-md-4 col-lg-3"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="team-block bottom">
            <Image
              src="/assets/img/team/4.jpg"
              className="img-responsive"
              alt="Image"
              layout="responsive"
              height={336}
              width={324}
            />
            <div className="team-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
              <span>manager</span>
              <h4>Kimberly Tran</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Teams;
