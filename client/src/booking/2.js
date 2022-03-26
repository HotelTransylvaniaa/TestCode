import {Link} from "react-router-dom";


export default function HotelDetails(){
    return (
        <>
            <div className="container">
                <div className="hotelDetailsImage mb-5">
                    <Link to={""} className="text-decoration-none pointer">
                        <div className="row gx-0">
                            <div className="col-md-6">
                                <div className="position-relative">
                                    <img src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg" alt="" className="w-100"/>
                                    <p className="position-absolute bottom-0 end-0 text-white me-5">
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-fill me-2" viewBox="0 0 16 16">
                                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                                        </svg>
                                        </span>
                                        See all photos
                                    </p>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="d-flex flex-wrap">
                                    <div className="w-50">
                                        <img src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg" alt="" className="w-100"/>
                                    </div>
                                    <div className="w-50">
                                        <img src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg" alt="" className="w-100"/>
                                    </div>
                                    <div className="w-50">
                                        <img src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg" alt="" className="w-100"/>
                                    </div>
                                    <div className="w-50">
                                        <img src="https://pix8.agoda.net/hotelImages/823/8232916/8232916_19062718190076860944.jpg" alt="" className="w-100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="hotelDetailsRooms">
                    <div className="hotelDetailsRoom">
                        <div>
                            <p>6 room types | 31 rooms offers</p>
                            <span>Prices do not include taxes & fees</span>
                        </div>
                        <div className="w-100 border border-1 p-3">
                            <div>
                                <p className="fw-bold">Room Type</p>
                            </div>
                            <div className="d-flex">
                                <div className="w-25">
                                    <div className="roomImage">
                                        <img src="https://pix8.agoda.net/hotelImages/122/1220774/1220774_16060215180043062717.jpg" alt="" className="w-100"/>
                                        <img src="https://pix8.agoda.net/hotelImages/122/1220774/1220774_16060215180043062717.jpg" alt="" className="w-50"/>
                                        <img src="https://pix8.agoda.net/hotelImages/122/1220774/1220774_16060215180043062717.jpg" alt="" className="w-50"/>
                                    </div>
                                    <div className="roomFacilites ps-2 mt-3">
                                        <div>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wifi me-2" viewBox="0 0 16 16">
                                                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                                                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                                                </svg>
                                            </span>
                                            <span>Free Wi-F</span>
                                        </div>
                                        <div>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wifi me-2" viewBox="0 0 16 16">
                                                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                                                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                                                </svg>
                                            </span>
                                            <span>Non-smoking</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-75">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}