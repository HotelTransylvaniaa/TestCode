import "./header.css";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          // src="https://www.orbitaltravel.co.uk/application/files/6115/4808/7958/Complex.jpg"
          src="https://ld-wt73.template-help.com/wt_prod-20476/images/slider-4-slide-1-1920x678.jpg"
          // src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png"
          // src="https://ld-wt73.template-help.com/wt_prod-20476/images/slider-4-slide-2-1920x678.jpg"
          // src="https://ld-wt73.template-help.com/wt_prod-20476/images/slider-4-slide-3-1920x678.jpg"
          // src="https://cdn.pixabay.com/photo/2016/07/01/14/55/hurghada-1491197_960_720.jpg"
          // src="https://cdn.pixabay.com/photo/2016/08/13/13/18/palace-1590716_960_720.jpg"        
            // src="https://pix6.agoda.net/geo/city/6700/1_6700_02.jpg?ca=6&ce=1&s=1920x822"
          height="550px"
          width="100%"
          alt=""
          style={{borderBottomLeftRadius:"25px"}}
        />
        {/* <img 
          src="https://cdn.pixabay.com/photo/2016/08/13/13/18/palace-1590716_960_720.jpg"
          height="550px"
          width="100%"
        /> */}
        {/* <img 
          src="https://cdn.pixabay.com/photo/2016/07/01/14/55/hurghada-1491197_960_720.jpg"
          height="550px"
          width="100%"
        /> */}
        {/* <img 
          src="https://pix6.agoda.net/geo/city/6700/1_6700_02.jpg?ca=6&ce=1&s=1920x822"
          height="500px"
          width="100%"
        /> */}

        <div className="header-content text-white py-4 px-3">
          <h2>- Welcome to AGODA -</h2>
          <h5>Pay less with Agoda so you can spend more on yourself.</h5>
        </div>
      </div>
    </>

  );
};

export default Header;
