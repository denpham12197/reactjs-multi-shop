import React from "react";
import { useState, useEffect } from "react";

export default function Slider() {
  const listSlider = [
    {
      name: "Men Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      image: "carousel-1.jpg",
    },
    {
      name: "Women Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      image: "carousel-2.jpg",
    },
    {
      name: "Kids Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      image: "carousel-3.jpg",
    },
  ];
  const [slider, setSlider] = useState(0);
  useEffect(() => {
    const length = listSlider.length;
    const sliderLoop = setInterval(() => {
      if (slider < length - 1) {
        setSlider(slider + 1);
      } else {
        setSlider(0);
      }
    }, 8000);
    return () => {
      clearInterval(sliderLoop);
    };
  }, [slider, listSlider.length]);
  return (
    <>
      <div className="slider__slider-container--full-screen">
        <div className="slider_silder-container--flud">
          <div className="left-pattern__slider-wrapper">
            {listSlider.map((sliderItem, index) => {
              return (
                <div style={{
                  overflow: 'hidden'
                }} key={index}>
                  {index === slider && (
                    <div className="slider-item__slider-item-wrapper">
                      <div className="slider-item__image--background">
                        <img
                          src={require(`./../assets/images/sliders/${sliderItem.image}`)}
                          alt={sliderItem.name}
                        />
                      </div>
                      <div className="slider-item__content">
                        <div className="slider-content__title">
                          <h1>{sliderItem.name}</h1>
                        </div>
                        <div className="slider-content__description">
                          {sliderItem.description}
                        </div>
                        <div className="slider-content__button">
                          <button className="slider-button">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="slider-indicator__indicator-wrapper">
              <div className="indicator-item"></div>
              <div className="indicator-item"></div>
              <div className="indicator-item"></div>
            </div>
          </div>
          <div className="right-pattern__thumb-wrapper">
            <div className="thumb-item__item-wraper">
              <div className="thumb-image">
                <img
                  src={require("./../assets/images/images/offer-1.jpg")}
                  alt=""
                />
              </div>
              <div className="thumb-content">
                <div className="thumb-title">
                  <h6>SAVE 20%</h6>
                </div>
                <div className="thumb-description">Specical Offer</div>
                <div className="thumb-button">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
            <div className="thumb-item__item-wraper">
              <div className="thumb-image">
                <img
                  src={require("./../assets/images/images/offer-2.jpg")}
                  alt=""
                />
              </div>
              <div className="thumb-content">
                <div className="thumb-title">
                  <h6>SAVE 20%</h6>
                </div>
                <div className="thumb-description">Specical Offer</div>
                <div className="thumb-button">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
