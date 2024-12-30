import { products } from "../DataPath/products";
import Headerimage from "../components/Headerimage";
import SingleCard from "../components/SingleCard";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const Shop = () => {
  const [selectedItem, setSelectedItem] = useState("Filter By Category");
  const [listtoggle, setlisttoggle] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");
  const [searchtoggle, setsearchtoggle] = useState(false);
  const dropdownRef = useRef(null);
  /*  console.log("selecte item>>", selectedItem); */

  const items = ["sofa", "chair", "mobil", "watch", "wireless"];

  const handeltoggle = (event) => {
    event.stopPropagation();
    setlisttoggle(!listtoggle);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setlisttoggle(false);
    setsearchvalue("");
    setsearchtoggle(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setlisttoggle(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handerchange = (e) => {
    /*     console.log(e.target.value) */
    setsearchvalue(e.target.value);
    if (e.target.value.length > 0) {
      setsearchtoggle(true);
    } else if (e.target.value.length === 0) {
      setsearchtoggle(false);
    }
  };

  return (
    <>
      <Headerimage porduct={"product"} />
      <div className="selectSearch">
        {/* selection and serch bar */}
        <div className="container my-5 ">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-5 mb-5">
              <div ref={dropdownRef}>
                <div
                  className="fs-5 select-btn d-flex justify-content-between align-items-center p-2"
                  onClick={handeltoggle}
                >
                  <span>{selectedItem || "Filter By Category"}</span>
                  <KeyboardArrowDownIcon className="ps-2 fs-2 downarrow" />
                </div>
                <ul className={` ${listtoggle ? "d-flex-column" : "d-none"}`}>
                  {items.map((item, index) => (
                    <li
                      onClick={() => handleItemClick(item)}
                      key={index}
                      value={item}
                      className={`${item === selectedItem ? "selected" : ""}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-7">
              <div className="serch d-flex justify-content-between align-items-center me-5">
                <input
                  className="w-100 p-2 fs-5 ms-3"
                  type="text"
                  autoComplete="off"
                  name="search"
                  value={searchvalue}
                  placeholder="Search...."
                  onChange={handerchange}
                />
                <SearchIcon className="searchicon mx-2" />
              </div>
            </div>
          </div>
        </div>
        {/* product for filter */}
        <div
          className={`container-fluid pb-5  justify-content-center  home ${
            searchtoggle ? "d-none" : "d-flex"
          } `}
        >
          <div className={`row w-75 `}>
            {products.length > 0 ? (
              products
                .filter((product) =>
                  [
                    selectedItem === "Filter By Category"
                      ? "sofa"
                      : selectedItem,
                  ].some((category) => product.category.includes(category))
                )
                .map((product) => (
                  <div
                    className=" col-sm-12 col-md-6 col-lg-6 col-xl-4 "
                    key={product.id}
                  >
                    <SingleCard product={product} />
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
        {/* product for search */}
        <div
          className={`container-fluid pb-5  justify-content-center  home ${
            searchtoggle ? "d-flex" : "d-none"
          } `}
        >
          <div className={`row w-75 `}>
            {products.length > 0 ? (
              products.filter((product) =>
                product.productName
                  .toLowerCase()
                  .includes(searchvalue.toLowerCase())
              ).length === 0 ? (
                <p className="fs-1 fw-medium text-center">Product Not Found !!</p>
              ) : (
                products
                  .filter((product) =>
                    product.productName
                      .toLowerCase()
                      .includes(searchvalue.toLowerCase())
                  )
                  .map((product) => (
                    <div
                      className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                      key={product.id}
                    >
                      <SingleCard product={product} />
                    </div>
                  ))
              )
            ) : (
              <center className="mt-5">
                <button className="btn btn-success w-50" type="button" disabled>
                  <span className="sr-only">Loading...</span>
                </button>
              </center>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
