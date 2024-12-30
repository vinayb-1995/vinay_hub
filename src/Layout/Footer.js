// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Footer=()=>{
    return(
        <>
        <div className="container-fluid footer dark-background">
        <div className="heights"></div>
        <div className="row mx-3">
            <div className=" col-xs-12 col-md-12 col-lg-3 me-5 ">
                <div className="d-flex aligin-items-center">
               {/* <span className="fs-4 "><ShoppingBagIcon sx={{ fontSize: 25 }}/></span>  */}
               <img className="img-fulid" style={{width:"200px"}} src="./logo_footer1.png" alt="logo-icon"/>

                {/* <p className="fs-4 fw-bold mt-1">Mart</p>                     */}
                </div>
                <p className="text">
                consectetur adipiscing elit. Quisque convallis diam in libero sagittis, ac auctor lorem gravida. Curabitur eget nisl non dolor bibendum volutpat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis diam in libero sagittis, ac auctor lorem gravida. Curabitur eget nisl non dolor bibendum volutpat.
                </p>
            </div>
            
            <div className=" col-xs-12 col-md-12 col-lg-2">
                <p className="fw-medium">About Us</p>
                <div className="text">
                <p>Careers</p>
                <p>Out Stores</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                </div>
                
            </div>
            <div className=" col-xs-12 col-md-12 col-lg-3  ">
                <p className="fw-medium">Coustmet Care</p>
                <div className="text">
                <p>Help Center</p>
                <p>How to Buy</p>
                <p>Track Your Order</p>
                <p>Purchasing</p>
                <p>Returns & Refunds</p>
                </div>
            </div>
            <div className=" col-xs-12 col-md-12 col-lg-3 ">
            <p className="fw-medium">Contact us</p>
            <div className="text">                
            <p>70 Washington Square South, New Yourk, NY 1012, United States</p>
            <p>Email:vinay@gmail.com</p>
            <p>Phone:+91 6361325812</p>
            </div>
            

            </div>
        </div>
        <div className="heights"></div>
        </div>
        </>
    )
}
export default Footer;