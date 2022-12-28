import React from "react";
import MainMenu from "../components/MainMenu";
import Slider from "../components/Slider";
import Feature from "../components/Feature";

export default function IndexPage() {
  return (
    <>
      <MainMenu />
      <div className="page-body" style={{
        backgroundColor: '#F5F5F5'
      }}>
        <Slider/>
        <Feature/>
      </div>
    </>
  );
}
