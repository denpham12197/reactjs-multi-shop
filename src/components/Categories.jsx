import React from "react";
import SectionTitle from "./SectionTitle";

export default function Categories() {
  const listCategories = [
    {
      image: "cat-1.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-2.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-3.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-4.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-4.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-3.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-2.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-1.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-2.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-1.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-4.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
    {
      image: "cat-3.jpg",
      categoryName: "Category name",
      quantity: 100,
    },
  ];
  return (
    <>
      <div className="categories__container--full-screen">
        <div className="categories__container--flud">
          <SectionTitle title="CATEGORIES"/>

          <div className="categories__list-categories--container">
            {listCategories.map((category, index) => {
              return (
                  <div key={index}  className="categories__box-categories--spacer">
                    <div className="categories__box-categories--padding">
                      <div className="categories__box-categories">
                        <div className="category__image">
                          <img
                            src={require(`./../assets/images/images/${category.image}`)}
                            alt=""
                          />
                        </div>
                        <div className="category__content">
                          <div className="category-content__category-name">
                            <h5>{category.categoryName}</h5>
                          </div>
                          <div className="category-content__quantity">
                            <small>{category.quantity} Products</small>
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
