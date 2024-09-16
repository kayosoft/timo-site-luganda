// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from "react";
import Link from "next/link";

const FooterStyleTwo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area footer-style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/about/logo-2.png" alt="logo" />
                  </a>
                </Link>

                <p>Tuli Kampuni Etunda Etaka Lya Mailo.</p>
                <p>Tel: (+256) 701287396</p>
                <p>Email: kalyango88@gmail.com</p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.messenger.com/" target="_blank">
                      <i className="ri-messenger-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-8">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/about-modern">
                      <a>Ebitukwatako</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/estates">
                      <a>Esiteeti Zafe</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact">
                      <a>Endagililo</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>
                <p>Checkout our blog.</p>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
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
      </div>
    </>
  );
};

export default FooterStyleTwo;
