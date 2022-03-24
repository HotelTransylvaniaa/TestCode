import DashboardNav from "../components/DashboardNav"
export default function DashboardSeller(){
    return(
        <>
         <div className="container-fluid p-2 bg-secondary text-white text-center">
          <h1>Dashboard</h1>
         </div>
         <div className="container-fluid p-2">
          <DashboardNav/>
         </div>
         <div className="container">
             Show all Hotels and button to add new
         </div>
        </>
    )
}