import React from "react";
import MainMenu from "../components/MainMenu";
import Slider from "../components/Slider";
import Feature from "../components/Feature";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";

export default function IndexPage() {
  return (
    <>
      <MainMenu />
      <div className="page-body" style={{
        backgroundColor: '#F5F5F5'
      }}>
        <Slider/>
        <Feature/>
        <Categories/>
        <FeaturedProducts />
      </div>
    </>
  );
}
