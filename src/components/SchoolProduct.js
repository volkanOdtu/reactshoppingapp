import React from "react";

function SchoolProduct(props) {
  return (
    <div>
      urun adi : {props.name} description : {props.description}
      price : {props.price}
    </div>
  );
}

export default SchoolProduct;
