import React from "react";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isInt } from "./../commons/function";

export default function FeaturedProducts() {
  const listProduct = [
    {
      image: "product-1.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 5,
        rateCount: 99,
      },
    },
		{
      image: "product-2.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 4.5,
        rateCount: 99,
      },
    },
		{
      image: "product-3.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 3.5,
        rateCount: 99,
      },
    },
		{
      image: "product-4.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 3,
        rateCount: 99,
      },
    },
		{
      image: "product-5.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 5,
        rateCount: 99,
      },
    },
		{
      image: "product-6.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 4.5,
        rateCount: 99,
      },
    },
		{
      image: "product-7.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 3.5,
        rateCount: 99,
      },
    },
		{
      image: "product-8.jpg",
      productName: "Product Name Goes Here",
      price: {
        salePrice: "$123.00",
        grossPrice: "$123.00",
      },
      rate: {
        rateStart: 3,
        rateCount: 99,
      },
    }
  ];
  return (
    <>
      <div className="feature-products__container--fullscreen">
        <div className="feature-products__container--flud">
          <SectionTitle title="FEATURED PRODUCTS" />

          <div className="list-products__container">
            {listProduct.map((product, index) => {
              return (
                <div key={index} className="product__product-spacer">
                  <div className="product__product-padding">
                    <div className="product__product-box">
                      <div className="product-image">
                        <div className="image">
                          <img
                            src={require(`./../assets/images/images/${product.image}`)}
                            alt=""
                          />
                        </div>
                        <div className="action-group">
                          <div className="action-box">
                            <div className="action-button">
                              <FontAwesomeIcon icon="fa-solid fa-shopping-cart" />
                            </div>
                            <div className="action-button">
                              <FontAwesomeIcon icon="far fa-heart" />
                            </div>
                            <div className="action-button">
                              <FontAwesomeIcon icon="fa-solid fa-sync-alt" />
                            </div>
                            <div className="action-button">
                              <FontAwesomeIcon icon="fa-solid fa-search" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-description">
                        <div className="product-name">
                          {product.productName}
                        </div>
                        <div className="product-price">
                          <span className="price">
                            {product.price.salePrice}
                          </span>
                          <del className="sale-off">
                            {product.price.grossPrice}
                          </del>
                        </div>
                        <div className="product-rate">
                          <div className="rate-star">
                            {Array.from(
                              Array(Math.floor(product.rate.rateStart)),
                              () => {
                                return (
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                );
                              }
                            )}

                            {!isInt(product.rate.rateStart) && (
                              <FontAwesomeIcon icon="fa-solid fa-star-half-alt" />
                            )}
                            {Array.from(
                              Array(5 - Math.ceil(product.rate.rateStart)),
                              () => {
                                return <FontAwesomeIcon icon="far fa-star" />;
                              }
                            )}
                          </div>
                          <div className="rate-count">
                            <small>({product.rate.rateCount})</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
