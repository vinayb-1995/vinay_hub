import { useEffect, useState } from "react";
import { SliderData, discoutProducts,products } from "../DataPath/products";
import Carousels from "../components/Carousels";
import Cards from "../components/Cards";
import SingleCard from "../components/SingleCard";
import DiscountCard from "../components/DiscountCards";


const Home = () => {
  const [getSliderData, setSliderData] = useState([]);
  /* let [slide,setslide]=useState(0) */
  // console.log(">>discount products", discoutProducts);
  useEffect(() => {
    setSliderData(SliderData);
  }, []);
  // console.log("slider data:", getSliderData);

  return (
    <>
      <div className="home">
        <Carousels data={getSliderData} />
        <Cards />
        {/* Big Discount start make this one component */}
        <div className="container-fluid mb-4 pb-5 d-flex justify-content-center bestsels ">
          <div className={`row w-75 `}>
          <p className="text-center text-dark my-5 fs-1 fw-medium"> Big Discount</p>
            {discoutProducts.length > 0 ? (
              discoutProducts.map((product) => (
               /*  <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                  <div>
                    <Card
                      sx={{
                        maxWidth: "30rem",
                        maxHeight: "50rem",
                        margin: "1rem auto",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                
                      }}
                      className="parentcard"
                    >
                      <div className="mx-3 mt-3 d-flex justify-content-between align-items-center">
                          <p className=" mt-2 px-3 rounded-4 discount">
                            {product.discount}%off
                          </p>
                          <span className="childcard">
                            <FavoriteBorderIcon/>
                          </span>
                        </div>
                      <Link className="z-3" to={`/${product.id}`}> 
                      <CardMedia
                        component="img"
                        sx={{
                          height: 200,
                          objectFit: "contain",
                          margin: "0.5rem",
                        }}
                        src={product.imgUrl}
                        alt="A Random picture found with the keyword Tokyo"
                      />
                      </Link>
                      <CardContent>
                        <p className="fs-4 fw-medium">{product.productName}</p>
                        <div>
                          <Rating name="read-only" value={+product.reviews[0].rating} readOnly />
                        </div>
                        <div className="d-flex justify-content-between align-items-center ">
                          <p className="fs-3 fw-bold mt-2">
                            {product.price}$
                          </p>
                          <span className="p-2  addproduct">
                            <AddIcon/>
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div> */
                <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                <DiscountCard product={product}/>
                </div>
              ))
            ) : (
              <center className="mt-5">
                <button className="btn btn-success w-50" type="button" disabled>
                  <span className="sr-only">Loading...</span>
                </button>
              </center>
            )}
          </div>
        </div>
        {/* Big Discound end */}
        {/* New Arrivals start*/}
        <div className="container-fluid pb-5 d-flex justify-content-center ">
          <div className={`row w-75 `}>
          <p className="text-center text-dark my-5 fs-1 fw-medium">New Arrivals</p>
            {products.length > 0 ? (
              products.filter(product=> ['mobile', 'wireless'].some(category => product.category.includes(category))).map((product) => (
                <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                  <SingleCard product={product}/>
{/*                   <div>
                    <Card
                      sx={{
                        maxWidth: "30rem",
                        maxHeight: "50rem",
                        margin: "1rem auto",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                    <Link className="z-3" to={`/${product.id}`}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: 200,
                          objectFit: "contain",
                          margin: "0.5rem",
                        }}
                        src={product.imgUrl}
                        alt="A Random picture found with the keyword Tokyo"
                      />
                      </Link>
                      <CardContent>
                        <p className="fs-4 fw-medium">{product.productName}</p>
                        <div>
                          <Rating name="read-only" value={+product.reviews[0].rating} readOnly />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="fs-3 fw-bold mt-2">
                            {product.price}$
                          </p>
                          <span className="p-2 addproduct">
                            <AddIcon/>
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div> */}
                </div>
              ))
            ) : (
              <center className="mt-5">
                <button className="btn btn-success w-50" type="button" disabled>
                  <span className="sr-only">Loading...</span>
                </button>
              </center>
            )}
          </div>
        </div>
        {/* New Arrivals end */}
        {/* best sales */}
        <div className="container-fluid pb-5 d-flex justify-content-center bestsels">
          <div className={`row w-75 `}>
          <p className="text-center text-dark my-5 fs-1 fw-medium">Best Sales</p>
            {products.length > 0 ? (
              products.filter(product=>product.category.includes('sofa')).map((product) => (
                <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                  key={product.id}
                >
                    <SingleCard product={product}/>
                 {/*  <div>
                    <Card
                      sx={{
                        maxWidth: "30rem",
                        maxHeight: "50rem",
                        margin: "1rem auto",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                     <Link className="z-3" to={`/${product.id}`}> 
                      <CardMedia
                        component="img"
                        sx={{
                          height: 200,
                          objectFit: "contain",
                          margin: "0.5rem",
                        }}
                        src={product.imgUrl}
                        alt="A Random picture found with the keyword Tokyo"
                      />
                      </Link>
                      <CardContent>
                        <p className="fs-4 fw-medium">{product.productName}</p>
                        <div>
                          <Rating name="read-only" value={+product.reviews[0].rating} readOnly />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="fs-3 fw-bold mt-2">
                            {product.price}$
                          </p>
                          <span className="p-2 addproduct">
                            <AddIcon/>
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div> */}
                </div>
              ))
            ) : (
              <center className="mt-5">
                <button className="btn btn-success w-50" type="button" disabled>
                  <span className="sr-only">Loading...</span>
                </button>
              </center>
            )}
          </div>
        </div>
        {/* Best sales end */}
        
      </div>
    </>
  );
};
export default Home;
