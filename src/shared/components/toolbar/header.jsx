import React from "react";
import Search from "../searchForm/search";

const header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Movie Catalog</span>

          <div className="d-flex flex-row ">
            <Search />
          </div>
        </div>
      </nav>
      ;
    </>
  );
};

export default header;
