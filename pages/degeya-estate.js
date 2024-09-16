import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import RelatedPost from "@/components/Blog/RelatedPost";
import FooterStyleTwo from "@/components/_App/FooterStyleTwo";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Kiwenda, Degeya Estate"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Kiwenda, Degeya Estate"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src="/images/banner/degeya/land-1.jpeg"
                    alt="estate-details"
                  />
                  <Link href="/degeya-estate">
                    <a className="tag">UGX 10M</a>
                  </Link>
                </div>

                <div className="article-content">
                  <p>
                    Esangabigwa kilo mita Nya (4km) mu towuni ye kiwenda, Eno ye
                    Esteeti ye Kiwenda Gegeya, Eno Nungyi ku bagala okuzimba
                    Amaka Agokusulamu no kulunda Ebisolo, Amasanyalaze na Maazi
                    weegali, Wefuni poloti Eno ku muliyoni Kumi 10m woba
                    Osasulilaeo kaashi oba miliyoni Kumi Nabili (12m) Ku
                    kyibanja mpola, Tulina Enssasula Ya kyibanja Mpola ,
                    Sasulako ebintundu Ataano Kubuli Kyikumi oweebwe paka
                    Emyaaka ebili okumalayo Balance, Bwonamalayo sente Zini, Oja
                    ku weebwa Ekyaapa kya Poloti Joguze ne Mpapula ezokukyuusa
                    Ekyapa Kyino, Kubilako tutegeke oje olambule Esteeti eno ku
                    bude bwona bwoyagalila osobole okutegeera Ekyitundu Kyino
                    Bulungyi.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img
                          src="/images/banner/degeya/land-2.jpeg"
                          alt="image"
                        />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img
                          src="/images/banner/degeya/land-3.jpeg"
                          alt="image"
                        />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img
                          src="/images/banner/degeya/land-5.jpeg"
                          alt="image"
                        />
                      </figure>
                    </li>
                  </ul>
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
