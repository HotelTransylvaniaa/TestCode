import DashboardNav from "../components/DashboardNav"
export default function Dashboard(){
    return(
        <>
         <div className="container-fluid p-2 bg-secondary text-white text-center">
          <h1>Dashboard</h1>
         </div>
         <div className="container-fluid p-2">
          <DashboardNav/>
         </div>
         <div className="container">
             Show all booking and button to browse hotels
         </div>
        </>
    )
}