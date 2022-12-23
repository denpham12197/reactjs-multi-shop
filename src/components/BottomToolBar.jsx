import React from "react";
import { useState, useRef } from "react";
import { useClickOutside } from "../commons/function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BottomToolBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const refDropdownCategories = useRef(null);
  useClickOutside(refDropdownCategories, setShowDropdown);
  return (
    <>
      <div className="bottom-toolbar__container">
        <div className="toolbar__wrapper-toolbar--flud-center">
          <div
            className="bottom-toolbar__menu-pattern--left-side"
            ref={refDropdownCategories}
          >
            <div
              className="left-pattern__categories--dropdown"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
              <h6 className="dropdown-title">Categories</h6>
            </div>
            {showDropdown && (
              <div className="left-pattern__dropdown-panel">
                <ul className="dropdown-panel__container">
                  <li className="dropdown-panel__item dropdown-panel__item--dropright arrow-right">
										Dresses
										<ul className="dropright-panel__container">
											<li className="dropright-panel__item">Women Dress's</li>
											<li className="dropright-panel__item">Baby Dress's</li>
										</ul>	
									</li>
                  <li className="dropdown-panel__item">Shirts</li>
                  <li className="dropdown-panel__item">Jeans</li>
                  <li className="dropdown-panel__item">Swimwear</li>
                  <li className="dropdown-panel__item">Sleepwear</li>
                  <li className="dropdown-panel__item">Jumpsuits</li>
                  <li className="dropdown-panel__item">Blazers</li>
                  <li className="dropdown-panel__item">Jackets</li>
                  <li className="dropdown-panel__item">Shoes</li>
                </ul>
              </div>
            )}
          </div>
          <div className="bottom-toolbar__menu-pattern--right-side">
            <ul className="right-pattern__menu-item--left-side">
              <li>
                <Link
                  className="menu-pattern__menu-item--link menu-pattern__menu-item--active"
                  to={"#"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="menu-pattern__menu-item--link" to={"#"}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="menu-pattern__menu-item--link" to={"#"}>
                  Shop Detail
                </Link>
              </li>
              <li className="menu-pattern__menu-item--wrapper">
                <Link className="menu-pattern__menu-item--link menu-pattern__menu-item--dropdown arrow-down--white" to={"#"}>
                  Pages
                </Link>
                <ul className="menu-item__dropdown-box--hover">
                  <li className="menu-item__dropdown-item--link">Shopping Cart</li>
                  <li className="menu-item__dropdown-item--link">Checkout</li>
                </ul>
              </li>
              <li>
                <Link className="menu-pattern__menu-item--link" to={"#"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="right-pattern__menu-item--right-side">
              <div className="right-pattern__item">
                <FontAwesomeIcon className="right-pattern__icon" icon="fa-solid fa-heart" />
                <span className="right-pattern__number">0</span>
              </div>
              <div className="right-pattern__item">
                <FontAwesomeIcon className="right-pattern__icon" icon="fa-solid fa-shopping-cart" />
                <span className="right-pattern__number">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
