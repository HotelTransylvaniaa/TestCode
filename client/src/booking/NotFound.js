import { Link } from "react-router-dom";

 export default function NotFound() {

    return (
      <>
           <div className="bg-light p-5"style={{height:"88vh"}}>
               <h2 className="pb-3">Page Not Found</h2>
               <p>Look Like you've Followed a broken Link or enter a URL that doesn't Exist on the site</p>
               <Link to={"/"} className="text-decoration-none"><i class="fa-solid fa-arrow-left-long"></i> Back to our site</Link>
           </div>
      </>
    );
  };