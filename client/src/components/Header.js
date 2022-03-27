import React from "react";
import Search from "../components/Forms/search";

const Header = () => {

  return (
    <>
      <div className="h-50 position-relative">
        <img className="position-relative" src="https://www.orbitaltravel.co.uk/application/files/6115/4808/7958/Complex.jpg" height="400px" width="100%"/>
        <Search className="position-absolute bottom-0 end-0" />
      </div>
    </>
  );
};

export default Header;
