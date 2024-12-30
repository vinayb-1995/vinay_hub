// import { Height } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
// import { Paper } from "@mui/material";

const Carousels=({data})=>{
  const [dynamicInterval, setDynamicInterval] = useState(50);
  
  useEffect(() => {
    const intervalTimer = setTimeout(() => {
      setDynamicInterval(5000); // Change interval to 5000 after 500ms
    }, 60);

    return () => clearTimeout(intervalTimer); // Cleanup timer on component unmount

  }, []);
    return(
        <>
        <div className="carousel">
        <Carousel
         interval={dynamicInterval}
          duration={1000}
          indicators={false} 
          navButtonsAlwaysInvisible={true} 
          animation="slide"
          changeOnFirstRender={true}
        >
          {data.length>0? data.map((data) =>
            (
              <div key={data.id}>
                <div className="slider ">
                  <div className="row mx-5">
                  <div className="col-xs-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                   <div className="row">
                    <div className="col-12">
                    <p className="text-dark title">{data.title}</p>
                    </div>
                    <div className="col-12">
                    <p>{data.desc}</p>
                    <button className="btn btn-light">visit collection</button>
                    </div>
                   </div>
                  </div>
                  <div  className="col-xs-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center">
                  <img  className="img-fluid" src={data.cover} alt={data.title} />
                  </div>
                  </div>
                </div>
              </div>
            )):<p>loadding...</p>}
        </Carousel>
        </div>
        </>
    )
}
export default Carousels;