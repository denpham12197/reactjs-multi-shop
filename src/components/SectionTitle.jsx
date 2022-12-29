import React from "react";

export default function SectionTitle(prop) {
  return (
    <>
      <div className="categories__title">
        <h2 className="categoris-title">
          <span>{prop?.title}</span>
        </h2>
      </div>
    </>
  );
}
