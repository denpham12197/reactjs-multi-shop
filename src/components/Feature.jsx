import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Feature() {
  return (
    <>
      <div className="feature__container--full-screen">
        <div className="feature__container--flud">
          <div className="feature__feature-item--wrapper">
            <div className="feature__feature-item--box">
              <div className="feature-image">
                <FontAwesomeIcon
                  className="feature-icon"
                  icon="fa-solid fa-check"
                />
              </div>
              <div className="feature-title">Quality Product</div>
            </div>
          </div>
          <div className="feature__feature-item--wrapper">
            <div className="feature__feature-item--box">
              <div className="feature-image">
                <FontAwesomeIcon
                  className="feature-icon"
                  icon="fa-solid fa-shipping-fast"
                />
              </div>
              <div className="feature-title">Free Shipping</div>
            </div>
          </div>
          <div className="feature__feature-item--wrapper">
            <div className="feature__feature-item--box">
              <div className="feature-image">
                <FontAwesomeIcon
                  className="feature-icon"
                  icon="fa-solid fa-exchange-alt"
                />
              </div>
              <div className="feature-title">14-Day Return</div>
            </div>
          </div>
          <div className="feature__feature-item--wrapper">
            <div className="feature__feature-item--box">
              <div className="feature-image">
                <FontAwesomeIcon
                  className="feature-icon"
                  icon="fa-solid fa-phone-volume"
                />
              </div>
              <div className="feature-title">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
