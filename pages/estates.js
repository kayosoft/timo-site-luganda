import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";
import Link from "next/link";
import PropertyCard from "./PropertyCard";

const BlogGrid = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Our Estates"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Our Estates"
      />

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/degeya-estate">
                    <a className="d-block">
                      <img src="/images/banner/land-5.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/degeya-estate">
                    <a className="tag">Kiwenda Degeya Estate</a>
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/degeya-estate">
                      <a>
                        50ft by 100ft plots for sale in Kiwenda Degeya Estate
                        for 10m
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/mukono-estate">
                    <a className="d-block">
                      <img src="/images/banner/land-6.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/mukono-estate">
                    <a className="tag">Mukono, Kalagi Estate</a>
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/mukono-estate">
                      <a>
                        50ft by 100ft plots for sale in Mukono, Kalagi Estate
                        for 15m
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/gayaza-estate">
                    <a className="d-block">
                      <img src="/images/banner/land-8.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/gayaza-estate">
                    <a className="tag">Gayaza Kiwenda Estate</a>
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/gayaza-estate">
                      <a>
                        50ft by 100ft plots for sale in Gayaza, Kiwenda Estate
                        for 45m
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterStyleTwo />
    </>
  );
};

export default BlogGrid;
