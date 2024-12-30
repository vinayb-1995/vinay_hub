import * as React from "react";
import { Link } from "react-router-dom";
import { HOME, SHOP } from "../DataPath/RouterLinks";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  MenuItem,
  Menu,
  // Badge,
} from "@mui/material";

/* ICONS */
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useSelector } from "react-redux";
// import { FaAmazon } from "react-icons/fa";



function Header() {
  // console.log("shop:", SHOP);
  // const cartdata = useSelector((state) => state.cart.items);
  // console.log('cardata.length',cartdata)
  const [anchorEl, setAnchorEl] = React.useState(null);
  /* const cartdata = useSelector((state) => state.cart); */
  //console.log('hedaer cartdata:',cartdata.length)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" className="bg-white header">
        <Toolbar>
          <Box
            className="ms-5 my-3"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                flexGrow: 1,
              },
            }}
          >
            <Link to={HOME} className="link">
              <p className="text-black  m-0 d-flex jsutify-content-center align-items-center" >
                {/* <span className="d-flex align-items-center"> */}
                  {/* <ShoppingBagIcon sx={{ fontSize: 35 }} /> */}
                  {/* <FaAmazon style={{width:"28px",height:"28px" }}/> */}
                  <img className="img-fulid" style={{width:"42px"}} src="./icon_logo.png" alt="logo-icon"/>
                  {/* <span className="fs-2 fw-medium ms-4">MART</span> */}
                  {/* <span className="fs-2 fw-medium ms-4">MART</span> */}
                {/* </span> */}
              </p>
            </Link>
          </Box>
          <Box
            className="me-5 "
            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
          >
            <Link to="/" className="mx-4 my-3 fs-5 fw-medium link">
              Home
            </Link>
            <Link to={SHOP} className="mx-4 my-3 fs-5 fw-medium link">
              Shop
            </Link>
            {/* <Link to={CART} className="mx-4 my-3 fs-5 fw-medium link">
              Cart
            </Link> */}
           {/*  <p className="my-3 mx-2 text-black ">
              <AccountCircleIcon />
            </p> */}
           {/*  <Link to={CART} className="link">
              <p className="my-3 ms-2">
                <Badge badgeContent={cartdata.length} 
                className="badgeColor">
                    <ShoppingCartIcon  />
                  </Badge>
              </p>
            </Link> */}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
              flexGrow: 1,
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <IconButton
              className="mb-3"
              color="black"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            {/* <Link to={HOME} className="link">
              <p className="text-black">

                <span className="d-flex align-items-center">
                  <ShoppingBagIcon sx={{ fontSize: 28 }} />
                  <span className="fs-5 fw-medium ms-2">MART</span>
                </span>
              </p>
            </Link> */}
          </Box>
          {/* responsive menu  */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" } }}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              
            }}
            className="header mt-2"
          >
            <MenuItem onClick={handleClose} className="mt-2">
              <Link to="/" className="link">
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={SHOP} className="link">
                Shop
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
             {/*  <Link to={CART} className="link">
                CART
              </Link> */}
            </MenuItem>
          </Menu>
          <Box
            sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none" }}}
            className='mt-2'
          >
            <Link className="link">
              <p color="black" className="mx-3">
                {/* <AccountCircleIcon /> */}
                <img className="img-fulid" style={{width:"42px"}} src="./icon_logo.png" alt="logo-icon"/>
              </p>
            </Link>
            {/* <Link to={CART} className="link">
              <p color="black">
              <Badge badgeContent={cartdata.length} 
                className=" badgeColor">
                    <ShoppingCartIcon  />
                  </Badge>
              </p>
            </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
