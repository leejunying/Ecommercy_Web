import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, updatelovelist } from "../../../Redux";

import { NavLink, Route } from "react-router-dom";

import { CardTra } from "@material-ui/icons";
import { ReactComponent as Soldout } from "../Icons/out-of-stock.svg";
import { unaddlovelist } from "../../../Redux";

const SmallCardsStyle = styled.div`
  .flex {
    display: flex;
  }
  .row {
    flex-direction: row;
  }
  .col {
    flex-direction: column;
  }
  .jus-center {
    justify-content: center;
  }
  .jus-start {
    justify-content: flex-start;
  }
  .al-center {
    align-items: center;
  }
  .jus-sp-between {
    justify-content: space-between;
  }
  .radio {
    font-size: small;
  }
  .Card-Toprow {
    width: 100%;
    margin: 2% 10% 0 5%;
  }
  .product-items-button {
    position: absolute;
    justify-content: flex-start;
    z-index: 100;
    margin: -20px 0 0 20px;
    transition: opacity 1.5s;
  }

  .product-items-button > i {
    background: black;
    color: white;
    font-size: small;
    width: 25px;
    height: 22px;
    margin: -20px 20px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: black;
    text-decoration: none;
  }
  .Card-status {
    font-size: 16px;
    margin-left: 1%;
    position: relative;
  }
  .Slide {
    opacity: 0;
    transition-duration: 2s ease;
  }
  .Slide.active {
    opacity: 1;
    transform: scale(1);
    transition-duration: 2s;
  }
  .Card-Slider {
    padding: 5px 0 0px 0;
    transition: 0.5s;

    margin-right: 5px;

    background: white;
    cursor: pointer;
    text-align: center;
  }
  .dot {
    position: relative;
    width: 25%;
    margin-right: 10%;
    justify-content: space-evenly;

    align-items: center;
  }
  .fa-circle {
    font-size: xx-small;
    cursor: pointer;
    border-radius: 50%;
  }

  .Card-image {
    width: 220px;
    height: 265px;
  }
  img {
    max-width: 100%;
    max-height: 220px;
  }
  .Card-Price {
    position: relative;
    font-size: 16px;
    font-weight: 300;
    margin: 0 0px 5% 10%;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
  }
  .Price {
    margin-top: 2%;
    color: #030303;
  }
  .lb-New {
    border-radius: 5px;
    background: Blue;
    color: white;
    font-size: small;
    padding: 5px;
  }
  .lb-Discount {
    border-radius: 5px;
    background: red;
    color: white;
    font-size: small;
    padding: 5px;
  }
  .Price-discount {
    text-decoration: line-through;
  }
  .Card-Size {
    margin-left: 10%;
    width: 100%;
  }
  .fa-shopping-cart {
    color: white;
    position: absolute;
  }

  i {
    cursor: pointer;
  }

  #size0 {
    color: white;
    background-color: black;
  }
  .Card-Extention {
    will-change: transform;
    transition: all 180ms ease-in;
    background-color: white;

    margin-top: -5%;
    z-index: 100;
    width: 100%;
    position: absolute;
    padding-bottom: 5%;

    background: #ffffff;
  }
  .Extend-area {
    justify-content: flex-start;
    position: relative;
    width: 100%;
  }

  .Card-Slider:hover {
    .img-slider {
      transform: scaleY(1.1);
    }
    .Extend-area {
      border-top: none;
      height: 20%;
      box-shadow: 3px 2px #535557;
    }
    box-shadow: 3px 5px #535557;
  }

  .img-slider {
    position: relative;
    width: 80%;
  }

  input[type="radio"] {
    background-color: #ddd;
    background-image: -webkit-linear-gradient(
        0deg,
        transparent 20%,
        hsla(0, 0%, 100%, 0.7),
        transparent 80%
      ),
      -webkit-linear-gradient(90deg, transparent 20%, hsla(0, 0%, 100%, 0.7), transparent
            80%);
    border-radius: 50%;
    /* box-shadow: inset 0 1px 1px hsla(0,0%,100%,.8),
                0 0 0 1px hsla(0,0%,0%,.6),
                0 2px 3px hsla(0,0%,0%,.6),
                0 4px 3px hsla(0,0%,0%,.4),
                0 6px 6px hsla(0,0%,0%,.2),
                0 10px 6px hsla(0,0%,0%,.2); */
    cursor: pointer;
    display: inline-block;
    height: 2px;

    position: relative;
    width: 10px;
    -webkit-appearance: none;
  }
  input[type="radio"]:after {
    background-color: #444;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.4),
      0 1px 1px hsla(0, 0%, 100%, 0.8);
    content: "";
    display: block;

    position: relative;

    width: 8px;
    height: 8px;
  }
  input[type="radio"]:checked:after {
    background-color: #38fa08;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.4),
      inset 0 2px 2px hsla(0, 0%, 100%, 0.4), 0 1px 1px hsla(0, 0%, 100%, 0.8),
      0 0 2px 2px hsla(0, 70%, 70%, 0.4);
  }

  @media screen and (max-width: 768px) {
    .Card-Slider {
      width: 150px;
    }
    .Card-image {
      width: 120px;
      height: 170px;
    }
    .Card-Type {
      font-size: small;
    }
    .fa-cart-arrow-down {
      margin-bottom: 2%;
      font-size: x-small;
      width: 100%;
    }

    .Card-Price {
      font-size: medium;
    }
    .Card-status {
      padding: 0;
    }
    .lb-New {
      font-size: x-small;
    }
    .lb-Discount {
      font-size: x-small;
    }
    .dot {
      font-size: small;
    }
    .Card-Toprow {
      margin: 0;
    }

    input[type="radio"]:after {
      background-color: #444;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.4),
        0 1px 1px hsla(0, 0%, 100%, 0.8);
      content: "";
      display: block;

      position: relative;

      width: 7px;
      height: 7px;
    }
    .Size-button {
      cursor: pointer;
      text-align: center;
      background: black;

      color: white;
      font-size: 16px;
      width: 33px;
      height: 33px;
      margin: 0 2% 0 2%;
    }
  }
  .Add-cart {
    position: relative;
    margin-top: 10%;
    width: 100%;
  }

  .Cart_button {
    height: 33px;

    cursor: pointer;
    color: rgba(0, 0, 0, 0.3);
    background: #333333;
    border: none;
    font-style: small;
    width: 55%;
    text-align: left;
    margin: 0 0 0 10%;
    padding: 5px;

    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic,
      "AppleGothic", sans-serif;
  }
  .labelanimation {
  }

  .Cart_button:hover {
    .fa-shopping-cart {
      animation: mymove 1.5s infinite;
    }
    .labelanimation {
    }
  }

  @keyframes mymove {
    from {
      left: 0%;
    }
    to {
      left: 43%;
    }
  }

  .Size-button {
    border: none;
    transition: color 1s;
    cursor: pointer;
    text-align: center;
    background: #ffffff;

    color: #020202;
    font-size: 13px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
function MultipleCards(props) {
  const dispatch = useDispatch();

  let lovelist = useSelector((state) => state.tokenReducer.lovelist) || [];

  lovelist = lovelist.map((data) => {
    return data.Name;
  });

  const token = useSelector((state) => state.tokenReducer.token);

  let img = props || [];

  const [btnitem, setBtnitem] = useState(0);
  const [slider, setSlider] = useState(0);
  const [hoverExtend, setHoverExtend] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const Dot = [0, 1, 2];
  const Size = img.Size;
  let SideShow = img.Pic;
  let sell = false;

  const unlove = {
    color: "white",
  };
  const love = {
    color: "red",
  };

  const [lovestyle, setLovestyle] = useState(false);

  if (img.Status == "OutStock") sell = true;

  const hoverCard = (value) => {
    if (value == 1) {
      setHoverExtend(value);
      setBtnitem(value);
    }

    if (value == 0) {
      setHoverExtend(value);
      setBtnitem(value);
    }
  };

  const SelectedSize = (indx) => {
    Size.map((value, index) => {
      if (index === indx) {
        setSelectedSize(indx);
        document.querySelector(`#size${index}`).style.backgroundColor = "black";
        document.querySelector(`#size${index}`).style.color = "white";
      } else {
        document.querySelector(`#size${index}`).style.backgroundColor = "white";
        document.querySelector(`#size${index}`).style.color = "black";
      }
    });
  };

  const checkitems = (name) => {
    let check = [];
    check = lovelist.filter((value) => value.Name === img.Name);

    if (check.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const Addlovelist = () => {
    if (checkitems(img.Name) == true) {
      dispatch(unaddlovelist(img.Name));

      setLovestyle(false);
    } else {
      dispatch(updatelovelist(img));

      setLovestyle(true);
    }
  };

  const AddtoCart = () => {
    let price =
      Size[selectedSize].Price -
      Math.floor((Size[selectedSize].Price * img.Discount) / 100);

    let objitems = {
      name: img.Name + "_" + Size[selectedSize].Name,

      price: price,
      img: SideShow[slider],
      number: 0,
    };

    //global cart add items

    console.log(objitems);
    dispatch(addToCart(objitems));
  };

  useEffect(() => {
    if (lovelist.includes(img.Name) === true) setLovestyle(true);
  }, []);

  return (
    <SmallCardsStyle>
      <Grid
        style={{ marginTop: "30px" }}
        container={true}
        xs={2}
        className=" Card"
        onMouseEnter={() => hoverCard(1)}
        onMouseLeave={() => hoverCard(0)}
      >
        <Grid className="  Card-Slider">
          <Grid className="flex jus-sp-between Card-Toprow">
            <label className=" Card-status">
              {" "}
              {img.Status === "Normal" ? null : img.Status === "New" ? (
                <label className="lb-New">New</label>
              ) : img.Status === "OutStock" ? (
                <label className="lb-Discount">Sold out</label>
              ) : (
                <label className="lb-Discount">
                  {"-" + img.Discount + "%"}
                </label>
              )}{" "}
            </label>
            <Grid className="flex dot">
              {Dot.map((val, indx) => {
                return (
                  <input
                    type="radio"
                    key={indx}
                    id={indx}
                    checked={slider == indx}
                    onChange={() => setSlider(indx)}
                  ></input>
                );
              })}
            </Grid>
          </Grid>

          <NavLink to={`/Products/${img.Name}`}>
            <Grid className="flex col jus-center al-center Card-image">
              {SideShow.map((slide, indx) => {
                return (
                  <Grid
                    className={indx === slider ? "Slide active" : "Slide"}
                    key={indx}
                  >
                    {indx === slider && (
                      <img className="img-slider" src={slide}></img>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </NavLink>
          <Grid
            style={{ opacity: `${btnitem}` }}
            className={`flex sp-evenly product-items-button ${img.Name}`}
          >
            <i id={`${img.Name}-compare`} className="fas fa-not-equal"></i>
            {token != "" ? (
              <i
                onClick={() => Addlovelist()}
                style={lovestyle == true ? love : unlove}
                id={`${img.Name}-wish`}
                className="fas fa-heart"
              ></i>
            ) : (
              <div></div>
            )}
            <i id={`${img.Name}-search`} className="fas fa-search"></i>
          </Grid>
          <Grid className="flex  col Card-Price">
            <Grid className="flex jus-sp-between">
              {img.Name} {img.Brand}
            </Grid>
            <Grid style={{ margin: "5px 0 5px 0" }}>
              {img.Discount > 0 ? (
                <div>
                  <label className="Price-discount">
                    {Size[selectedSize].Price}
                  </label>{" "}
                  <label
                    style={{
                      color: "white",
                      padding: "2px",
                      backgroundColor: "red",
                      fontSize: "16px",
                      margin: "0 10px 0 10px",
                    }}
                    className="Price"
                  >
                    {Size[selectedSize].Price -
                      Math.floor((Size[selectedSize].Price * 30) / 100)}
                  </label>{" "}
                </div>
              ) : (
                <label className="Price">{Size[selectedSize].Price}</label>
              )}
            </Grid>
          </Grid>
          <Grid className="flex Extend-area">
            {hoverExtend === 1 ? (
              <Grid className=" Card-Extention">
                <Grid className="flex Card-Size">
                  {Size.map((val, indx) => {
                    return (
                      <Grid
                        {...val}
                        md={2}
                        key={indx}
                        id={"size" + indx}
                        className="Size-button"
                        onClick={() => {
                          SelectedSize(indx);
                        }}
                      >
                        {val.Name}
                      </Grid>
                    );
                  })}
                </Grid>

                {sell == false ? (
                  <Grid
                    className="flex al-center Cart_button"
                    onClick={() => AddtoCart()}
                  >
                    <i className="fas fa-shopping-cart">
                      {" "}
                      <span style={{ fontSize: "small" }}>ADD TO CART</span>
                    </i>
                  </Grid>
                ) : (
                  <Grid className="flex  jus-center">
                    {" "}
                    <Soldout
                      style={{ width: "20%", height: "10%" }}
                    ></Soldout>{" "}
                  </Grid>
                )}
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </SmallCardsStyle>
  );
}

export default MultipleCards;
