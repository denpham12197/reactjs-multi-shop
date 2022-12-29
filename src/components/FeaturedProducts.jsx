import React from "react";
import SectionTitle from "./SectionTitle";

export default function FeaturedProducts() {
  return (
    <>
      <div className="feature-products__container--fullscreen">
        <div className="feature-products__container--flud">
          <SectionTitle title="FEATURED PRODUCTS" />

          <div className="list-products__container">
            {/* single */}
            <div className="product__product-spacer">
              <div className="product__product-padding">
                <div className="product__product-box">
                  <div className="product-image">
                    <div className="image">
                      <img
                        src={require("./../assets/images/images/product-1.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="button-action"></div>
                  </div>
                  <div className="product-description">
                    <div className="product-name">Product Name Goes Here</div>
                    <div className="product-price">$123.00</div>
                    <div className="product-rate">rate</div>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
}
