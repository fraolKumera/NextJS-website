import React from "react";
import Image from "next/image";

const Blog = () => (
  <section id="blog" className="padd-section">
    <div className="container" data-aos="fade-up">
      <div className="section-title text-center">
        <h2>Latest posts</h2>
        <p className="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-md-6 col-lg-4">
          <div className="block-blog text-left">
            <a href="#">
              <Image
                src="/assets/img/blog/blog-image-1.jpg"
                alt="Image"
                layout="responsive"
                width={356}
                height={217}
              />
            </a>
            <div className="content-blog">
              <h4>
                <a href="#">
                  whats isthe difference between good and bat typography
                </a>
              </h4>
              <span>05, juin 2017</span>
              <a className="float-end readmore" href="#">
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="block-blog text-left">
            <a href="#">
              <Image
                src="/assets/img/blog/blog-image-2.jpg"
                className="img-responsive"
                alt="Image"
                layout="responsive"
                width={356}
                height={217}
              />
            </a>
            <div className="content-blog">
              <h4>
                <a href="#">
                  whats isthe difference between good and bat typography
                </a>
              </h4>
              <span>05, juin 2017</span>
              <a className="float-end readmore" href="#">
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="block-blog text-left">
            <a href="#">
              <Image
                src="/assets/img/blog/blog-image-3.jpg"
                className="Image-responsive"
                alt="Image"
                layout="responsive"
                width={356}
                height={217}
              />
            </a>
            <div className="content-blog">
              <h4>
                <a href="#">
                  whats isthe difference between good and bat typography
                </a>
              </h4>
              <span>05, juin 2017</span>
              <a className="float-end readmore" href="#">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Blog;
