import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../assets/css/style.scss";

export default function BottomToolBar() {
  return (
    <>
      <div className="bottom-toolbar__container">
        <div className="toolbar__wrapper-toolbar--flud-center">
          <div className="bottom-toolbar__menu-pattern--left-side">
            <div className="left-pattern__categories--dropdown">
							<FontAwesomeIcon icon="fa-solid fa-bars" />
							<h6 className="dropdown-title">
								Categories
							</h6>
						</div>
          </div>
          <div className="bottom-toolbar__menu-pattern--right-side">
            <div className="right-pattern__menu-item--left-side">xx</div>
            <div className="right-pattern__menu-item--right-side">
              <div className="right-pattern__item"></div>
              <div className="right-pattern__item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
