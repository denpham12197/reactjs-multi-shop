import React from "react";

export default function Slider() {
  return (
    <>
      <div className="slider__slider-container--full-screen">
        <div className="slider_silder-container--flud">
					<div className="left-pattern__slider-wrapper">
						<div className="slider-item__slider-item-wrapper">
							<div className="slider-item__image--background">
								<img src={require('./../assets/images/sliders/carousel-1.jpg')} alt="slider1" />
							</div>
							<div className="slider-item__content">
								<div className="slider-content__title"></div>
								<div className="slider-content__description"></div>
								<div className="slider-content__button"></div>
							</div>
						</div>
						<div className="slider-indicator__indicator-wrapper">
							<div className="indicator-item"></div>
							<div className="indicator-item"></div>
							<div className="indicator-item"></div>
						</div>
					</div>
					<div className="right-pattern__thumb-wrapper">
						<div className="thumb-item__item-wraper">
							<div className="thumb-image">
								<img src={require('./../assets/images/images/offer-1.jpg')} alt="" />
							</div>
							<div className="thumb-content">
								<div className="thumb-title"></div>
								<div className="thumb-description"></div>
								<div className="thumb-button"></div>
							</div>
						</div>
						<div className="thumb-item__item-wraper">
							<div className="thumb-image">
								<img src={require('./../assets/images/images/offer-2.jpg')} alt="" />
							</div>
							<div className="thumb-content">
								<div className="thumb-title"></div>
								<div className="thumb-description"></div>
								<div className="thumb-button"></div>
							</div>
						</div>
					</div>
				</div>
      </div>
    </>
  );
}
