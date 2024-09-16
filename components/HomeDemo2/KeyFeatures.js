import React from "react";
import Link from "next/link";

const KeyFeatures = () => {
  return (
    <>
      <div className="features-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-content">
                <h2>Lambula ofune</h2>
                <p>
                  Zuula etaka elyenjawulo mu Esiteeti Zafe eligwa mu ekyo
                  kyenyini kyolubilila okukola okuva ku taka elili ewala mu
                  kyaalo, mu bunene bweweetaga eligwa mu buli bageti yo, Tulina
                  etaka kubuli luguudo olufuluma ekyibuga, Tuyambako abaguzi
                  okusalawo obulungyi, Twesige mu lugendo lwo olwwo kugula
                  Etaka, toja kwejusa.
                </p>

                <div className="btn-box">
                  <Link href="estates">
                    <a className="link-btn">Esiteeti Zafe</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="features-lists">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="ri-eye-line"></i>
                    </div>
                    <h5>Buying and selling Land</h5>
                    <p></p>
                  </li>
                  <li>
                    <div className="icon bg5">
                      <i className="ri-cloud-line"></i>
                    </div>
                    <h5>Property management</h5>
                    <p></p>
                  </li>
                  <li>
                    <div className="icon bg3">
                      <i className="ri-leaf-line"></i>
                    </div>
                    <h5>Free land consultation</h5>
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
