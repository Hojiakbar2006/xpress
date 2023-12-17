import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import logo from "../../Assets/images/LOGO.svg";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";

export function Navbar() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);
  const card = useSelector((state) => state.product);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  useEffect(() => {
    axios("https://xpress.pandashop.uz/api/product")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <nav className="navBar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-card">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={open ? "open menu-btn" : "menu-btn"}
          >
            <span className="burger"></span>
          </div>
          <div className="nav-link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/delivery">Delivery</NavLink>
            <NavLink to="/orders">My Orders</NavLink>
          </div>
          <div className="nav-item">
            <form onSubmit={(e)=> e.preventDefault()}>
              <SearchIcon/>
              <input
                type="text"
                value={search}
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
              />
              {search ? (
                <div className="resultCard">
                  {data
                    .filter((fil) => fil.name.toLowerCase().includes(search))
                    .map((item, index) => {
                      return (
                        <Link
                          key={index}
                          type="submit"
                          onClick={() => {
                            setSearch(false);
                            setSearch("");
                          }}
                          to={`/product/${item.id}`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                </div>
              ) : (
                ""
              )}
            </form>
            <Link to="/cart">
              <Badge badgeContent={card.length || 0} color="primary">
                <ShoppingBagIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </nav>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <div className="drawer">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className={open ? "open menu-btn" : "menu-btn"}
          >
            <span className="burger"></span>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/delivery">Delivery</NavLink>
            <NavLink to="/orders">My Orders</NavLink>
          </div>
        </div>
      </Drawer>
    </>
  );
}
