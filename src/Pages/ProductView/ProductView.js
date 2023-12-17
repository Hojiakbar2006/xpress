import { React, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ProductView.css";
import { useDispatch } from "react-redux";
import { acAddCard } from "../../Redux/Card";
import { acLoading } from "../../Redux/Loading";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { toast } from "react-toastify";

export function ProductView() {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [SendSize, setSendSize] = useState("no");
  const [view, setView] = useState(0);
  const api = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`${api}/product/${id}`, {
      headers: {
        token: "qev234-23fvg24-vg24tae",
      },
    })
      .then((res) => {
        setData(res.data);
        dispatch(acLoading(false));
        setImages(JSON.parse(res.data.img));
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch, api, id]);

  if (!data.size) {
    data.size = "";
  }
  const size = data.size.split(",") || [];

  return (
    <>
      <div id="ProductView">
        <div id="viewfull">
          <div id="Left">
            <figure>
              <img src={images[view]} alt="" />
            </figure>
            <div id="PV-Bottom">
              {images.map((img, index) => {
                return (
                  <figure
                    onClick={() => {
                      setView(index);
                    }}
                    key={index}
                  >
                    <span
                      style={
                        view === index
                          ? { display: "none" }
                          : { display: "flex" }
                      }
                    ></span>
                    <img src={img} alt="" />
                  </figure>
                );
              })}
            </div>
          </div>
          <div id="Right">
            <div id="topCard">
              <h2>{data.name}</h2>
              <h3>{data.price + " $"}</h3>
              <form>
                <div className="rowCard">
                  <p id="s-name">size :</p>
                  <p id="s-name">{SendSize}</p>
                </div>
                <div id="SisZeDiv">
                  {size[0] === "No size"
                    ? ""
                    : size.map((size, index) => {
                        return (
                          <label
                            key={index}
                            onClick={() => {
                              setSendSize(size);
                            }}
                            className={SendSize === size ? "activ" : ""}
                          >
                            <p>{[size]}</p>
                          </label>
                        );
                      })}
                </div>

                <button
                  type="button"
                  id="tanlshBTN"
                  onClick={() => {
                    const order = {
                      id: uuidv4(),
                      name: data.name,
                      size: SendSize,
                      img: images[view],
                      forWhom: data.forWhom,
                      quantity: 1,
                      price: data.price,
                      discaunt: data.discaunt,
                      season: data.season,
                    };

                    if (size[0] === "No size") {
                      dispatch(acAddCard(order));
                      toast.success("Product added to the cart", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                      });
                    } else {
                      if (order.size === "no") {
                        const resolveAfter1Sec = new Promise((resolve) =>
                          setTimeout(resolve, 1500)
                        );
                        toast.promise(resolveAfter1Sec, {
                          pending: "Please select a size",
                          position: toast.POSITION.BOTTOM_RIGHT,
                        });
                      } else {
                        dispatch(acAddCard(order));
                        toast.success("Product added to the cart", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                        });
                      }
                    }
                  }}
                >
                  Add to Cart
                </button>
              </form>
            </div>
            <div id="BottomCardFull">
              <h2>About</h2>
              <p id="AboutP">{data.about}</p>
              <span id="linebtn"></span>
              <Link to="/delivery" id="Abouth1btn">
                RELATED TAGS (TAGS)
              </Link>
              <span id="linebtn"></span>
              <Link to="/delivery" id="Abouth1btn">
                Comments
              </Link>
              <span id="linebtn"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
