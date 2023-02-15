import React from "react";
import { useGlobalfilter } from "../../context/Filtercontext";
import "./filtered.css";

const Filtered = () => {
  const {
    searchfilter: { text, category },
    allProducts,
    upadatefilter,
  } = useGlobalfilter();

  //unique data get garna ko lagi matra
  const getuniquedata = (data, properties) => {
    let newvalue = data.map((curElem) => {
      return curElem[properties];
    });
    return (newvalue = ["All", ...new Set(newvalue)]);
  };

  const categoryData = getuniquedata(allProducts, "category");

  return (
    <div className="filtered">
      <div className="searchfilter">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search"
            name="text"
            value={text}
            onChange={upadatefilter}
          />
        </form>
      </div>
      <div className="categoryfilter">
        <h2>Filter According to the category</h2>
        <div className="mycatdata">
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={upadatefilter}
              >
                <p>{curElem}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filtered;
