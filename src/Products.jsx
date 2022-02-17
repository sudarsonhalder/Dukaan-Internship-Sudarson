import React from "react";
import Data from "./Data";
import Card from "./Card";
const Products = () => {
  return (
    <>
      '
      <div className="my-4 ">
        <h2 className="prodHead">Try our other free products</h2>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row py-4 ">
          <div className="col-7 mx-auto">
            <div className="row gy-5 gx-5  ">
              {Data.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    para={val.para}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
