import React from "react";

const Breadcrums = ({name}) => {
  return (
    <>
      <div className="breadcrum-bg">
        <div className="container">
          
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {name}
              </li>
            </ol>
         
        </div>
      </div>
    </>
  );
};

export default Breadcrums;
