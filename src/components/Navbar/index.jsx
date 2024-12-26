import { LuShoppingCart, LuCircleUserRound, LuMenu } from "react-icons/lu";
import { Drawer } from "@mui/material/";
import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbarContainer">
      <div className="navbarItems">
        <Link to="/" className="navbarLink">
          <img src="imgs/logo.png" alt="" className="Logo" />
        </Link>

        <div className="navbarLinksContainer">
          <Link to="/" className="navbarLink">
            Home
          </Link>
          <Link to="/plates" className="navbarLink">
            Plates
          </Link>
          <Link to="/cart" className="navbarLink">
          <LuShoppingCart
            color="white"
            size={25}
            style={{ cursor: "pointer" }}
          />
          </Link>
          <Link to="/profile" className="navbarLink">
            <LuCircleUserRound
              color="white"
              size={25}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>

      <div className="mobNavbarItems">
        <Link to="/" className="navbarLink">
          <img src="imgs/logo.png" alt="" className="Logo" />
        </Link>
        <div className="mobNavbarLinks">
        <Link to="/cart" className="navbarLink">
          <LuShoppingCart
            color="white"
            size={30}
            style={{ cursor: "pointer" }}
          />
          </Link>
          <LuMenu
            color="white"
            size={30}
            onClick={handleMenu}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Drawer
          className="mobDrawer"
          anchor="right"
          open={openMenu}
          onClose={handleMenu}
        >
          <div className="DrawContainer">
            <Link to="/" className="navbarLink" onClick={handleMenu}>
              Home
            </Link>
            <Link to="/plates" className="navbarLink" onClick={handleMenu} >
              Plates
            </Link>
            <Link to="/profile" className="navbarLink" onClick={handleMenu}>
              Profile
            </Link>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}
