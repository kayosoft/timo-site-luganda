import React from "react";
import Link from "next/link";

const FooterStyleFour = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-area-style-with-black-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/new-logo-2.png" alt="logo" />
                  </a>
                </Link>
                <p>
                  We are a company dedicated to selling Milo land and estate
                  development.
                </p>
                <p>Tel: (+256) 701287396</p>
                <p>Email: kalyango88@gmail.com</p>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="single-footer-widget"></div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/about-modern">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/estates">
                      <a>Our Estates</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-6"></div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>
                <p>Checkout our blog.</p>
                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <button type="submit">
                    <i className="ri-send-plane-2-line"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright &copy; {currentYear}{" "}
              <strong>Timothy Kalyango Properties</strong>. All Rights Reserved
              by{" "}
              <a href="#" target="_blank">
                KTPL
              </a>
            </p>
          </div>
        </div>

        <div className="footer-white-shape">
          <img src="/images/home-7-8-9/footer/footer-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FooterStyleFour;
