import React from "react";
import { useState, useRef } from "react";
import "./../assets/css/style.scss";
import {useClickOutside} from './../commons/function';

export default function TopToolBar() {
  const refAuthor = useRef(null);
  const refMoneyUnit = useRef(null);
  const refLanguage = useRef(null);
  const [showAuthorOption, setShowAuthorOption] = useState(false);
  const [showMoneyUnitOption, setShowMoneyUnitOption] = useState(false);
  const [showLanguageOption, setShowLanguageOption] = useState(false);
  useClickOutside(refAuthor, setShowAuthorOption);
  useClickOutside(refMoneyUnit, setShowMoneyUnitOption);
  useClickOutside(refLanguage, setShowLanguageOption);
  return (
    <>
      <div className="top-toolbar__toolbar-container">
        <div className="toolbar__wrapper-toolbar--flud-center">
          <div className="top-toolbar__toolbar-pattern--left-side">
            <ul className="top-toolbar__toolbar-left--wrapper">
              <li className="toolbar__toolbar-item toolbar__toolbar-item--text">
                About
              </li>
              <li className="toolbar__toolbar-item toolbar__toolbar-item--text">
                Contact
              </li>
              <li className="toolbar__toolbar-item toolbar__toolbar-item--text">
                Help
              </li>
              <li className="toolbar__toolbar-item toolbar__toolbar-item--text">
                FAQs
              </li>
            </ul>
          </div>
          <div className="top-toolbar__toolbar-pattern--right-side">
            <ul className="toolbar__toolbar-right--wrapper">
              <li
                ref={refAuthor}
                className="toolbar__toolbar-item toolbar__toolbar-item--relative"
              >
                <button
                  onClick={() => setShowAuthorOption(!showAuthorOption)}
                  className={`right-menu__button-dropdown ${
                    showAuthorOption && "right-menu__button-dropdown-focus"
                  }`}
                >
                  My Account
                </button>
                {showAuthorOption && (
                  <div className="right-menu__dropdown-box">
                    <div className="dropdown-item">Sign in</div>
                    <div className="dropdown-item">Sign up</div>
                  </div>
                )}
              </li>
              <li
                ref={refMoneyUnit}
                className="toolbar__toolbar-item toolbar__toolbar-item--relative"
              >
                <button
                  onClick={() => setShowMoneyUnitOption(!showMoneyUnitOption)}
                  className={`right-menu__button-dropdown ${
                    showMoneyUnitOption && "right-menu__button-dropdown-focus"
                  }`}
                >
                  USD
                </button>
                {showMoneyUnitOption && (
                  <div className="right-menu__dropdown-box">
                    <div className="dropdown-item">EUR</div>
                    <div className="dropdown-item">GBP</div>
                    <div className="dropdown-item">CAD</div>
                  </div>
                )}
              </li>
              <li
                ref={refLanguage}
                className="toolbar__toolbar-item toolbar__toolbar-item--relative"
              >
                <button
                  onClick={() => setShowLanguageOption(!showLanguageOption)}
                  className={`right-menu__button-dropdown ${
                    showLanguageOption && "right-menu__button-dropdown-focus"
                  }`}
                >
                  EN
                </button>
                {showLanguageOption && (
                  <div className="right-menu__dropdown-box">
                    <div className="dropdown-item">FR</div>
                    <div className="dropdown-item">AR</div>
                    <div className="dropdown-item">RU</div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
