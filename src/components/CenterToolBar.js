import React from "react";
import "./../assets/css/style.scss";

export default function CenterToolBar() {
  return (
    <>
      <div className="center-toolbar__container">
        <div className="toolbar__wrapper-toolbar--flud-center">
          <div className="center-toolbar__left-side">
            <div className="left-side__logo--multi">
              <span>MULTI</span>
            </div>
            <div className="left-side__logo--shop">
              <span>SHOP</span>
            </div>
          </div>
          <div className="center-toolbar__center">
            <div className="center__search-input">
              <input placeholder="Search for product" type="text" className="center__search-input--input" />
              <button className="center__search-input--button">Search</button>
            </div>
          </div>
          <div className="center-toolbar__right-side">
            <div className="right-side__text">Custom Service</div>
            <div className="right-side__number">+0123 456 789</div>
          </div>
        </div>
      </div>
    </>
  );
}
