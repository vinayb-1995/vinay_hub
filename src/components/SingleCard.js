import { Card, CardContent, CardMedia, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { add } from "../Redux/redux";

const SingleCard = (props) => {
  // console.log('porduct form paren',props.product)
  const product = props.product;
  const dispatch = useDispatch();
  const handelAdd = () => {
    dispatch(add(product));
    // console.log('added',add(product.title))
  };
  return (
    <>
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
          <p className="text-end me-3 mt-2 childcard">
            <FavoriteBorderIcon />
          </p>
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
              <Rating
                name="read-only"
                value={+product.reviews[0].rating}
                readOnly
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="fs-3 fw-bold mt-2">{product.price}$</p>
              <span onClick={handelAdd} className="p-2 addproduct">
                <AddIcon />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default SingleCard;
