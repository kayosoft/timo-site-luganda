import React from "react";

const TutukilireInfo = () => {
  return (
    <>
      <div className="Tutukilire-info-area pb-100">
        <div className="container">
          <div className="Tutukilire-info-inner">
            <h2>
              Olina Ekyibuuzo Kyona? Tukubileko kukasimu oba Otuweleza Obubaka
            </h2>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-Tutukilire-info-box">
                  <div className="icon bg1">
                    <i className="ri-customer-service-2-line"></i>
                  </div>
                  <h3>
                    <a href="tel:+256701287396">(+256) 701287396</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-Tutukilire-info-box">
                  <div className="icon">
                    <i className="ri-earth-line"></i>
                  </div>
                  <h3>
                    <a href="mailto:hello@texap.com">kalyango88@gmail.com</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-Tutukilire-info-box">
                  <div className="icon bg2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <h3>
                    2nd Floor, Lourdel Towers, Plot 1, Lourdel Road, Nakasero.
                  </h3>
                </div>
              </div>
            </div>

            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutukilireInfo;
