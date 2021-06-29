import React, { useEffect } from "react";
 
import { Grid } from "@material-ui/core";
import styled from "styled-components";

import { useState } from "react";
// import { Slide } from "react-slideshow-image";
 
import MultipleCards from "../../Card/View/MutipleCards"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
 

import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../CSS/Home.css"

const Homestyle = styled.div`
  @media screen and (max-width: 980px) {
    .Sideshow {
      margin: 0;
    }
    .slide-content {
      font-size: 3rem;
    }
    .slide-subcontent {
      font-size: 1.5rem;

      font-family: "Time new roman";

      color: #000000;
      background: white;
    }
    .slide-link {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .slide-content {
      font-size: 2rem;
    }
    .slide-subcontent {
      font-size: 1rem;

      font-family: "Time new roman";

      color: #000000;
      background: white;
    }
    .slide-link {
      font-size: 0.5rem;
    }
    .banner {
      justify-content: center;
      flex-direction: column;
    }

    .banner-box1 {
      margin: 0 0 10px 0;
      min-height: 200px;
    }

    .banner-box2 {
      margin: 0;
      min-height: 200px;
    }
    .Main-product {
    }
    .product-items {
      margin: 2% 20% 2% 5%;
    }
    .Look-image {
      width: 100%;
      height: 325px;
    }

    .look-text {
      position: absolute;
      font-size: small;

      color: #f5e7e7;
    }
    .Demo-img {
      background-color: #fc1d1d;
      width: 25px;
      height: 30px;
      text-align: center;
      color: white;
      cursor: pointer;
    }
    #btndemo1 {
      position: relative;
    }
    #btndemo2 {
      position: relative;
    }
    #btndemo3 {
      position: relative;
    }
    #demoimg1 {
      position: relative;
      right: 100%;
      top: -30px;
      height: 100%;
      z-index: 100;
      opacity: 0;
    }
    #demoimg2 {
      position: relative;
      top: -50px;
      z-index: 100;
      opacity: 0;
      height: 100%;
    }
    #demoimg3 {
      position: relative;
      top: -25px;
      z-index: 100;
      opacity: 0;
      height: 100%;
    }

    #demoplace1 {
      top: 20%;
      left: 50%;
      height: 20px;
      position: absolute;
    }

    #demoplace2 {
      top: 0%;
      left: 80%;
      height: 20px;
      position: absolute;
    }
    #demoplace3 {
      top: 55%;
      left: 80%;
      height: 20px;
      z-index: 100;
      position: absolute;
    }

    #look-title {
      font-size: 2rem;
    }
    #look-subtitle {
      font-size: 0.8rem;
    }

    .Collection {
      width: auto;

      overflow: auto;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .Collection-wrapper {
      padding: 0 5% 0 5%;
      justify-content: center;
      justify-content: flex-start;
    }
  }
`;

function Home() {
  const [screen, setScreen] = useState(5);
  const [scrMainproduct, setSrcMainproduct] = useState({
    Container: "10",
    Items: "3",
  });

  const [scrCollection, setSrcCollection] = useState({
    Container: "9",
    Items: "3",
  });

  //Check media

  useEffect(() => {
    function handler() {
      if (test768.matches === true) {
        setScreen(12);
        setSrcMainproduct({
          Container: "10",
          Items: "2",
        });

        setSrcCollection({
          Container: "8",
          Items: "4",
        });
      }
    }

    const test768 = window.matchMedia("(max-width:768px)");

    test768.addEventListener("change", handler);
  }, []);

  //fetch data

  //SideShow
  let img1 = {
    picture:
      "https://cdn.shopify.com/s/files/1/1521/5776/files/slide-3.png?v=1600845605%22",
    content: "HAT & GLASSES",
    subcontent: "SPECIAL PRICE",
  };

  let img2 = {
    picture:
      "https://cdn.shopify.com/s/files/1/1521/5776/files/slide-1.png?v=1600844319",
    content: "NEW GLAMOUR",
    subcontent: "NEW YOU",
  };

  let img3 = {
    picture:
      "https://cdn.shopify.com/s/files/1/1521/5776/files/slide-2.png?v=1600845140",
    content: "MEN COLLECTION",
    subcontent: "-20%",
  };
  let boximg1 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/banner-men.png?v=1601009178%22";
  let boximg2 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/banner-women.png?v=1601010322";

  let product1 = {
    status: "Discount",
    discountnum: "18",
    S: { name: "S", price: "135" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "195" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/apple_cinema_30_6c34d526-40b2-4948-9149-016a7676b21d_720x.jpg?v=1570332862",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2@2x.jpg?v=1606026031",
    pic3: "//cdn.shopify.com/s/files/1/1521/5776/products/samsung_tab_1_80b59129-aa37-4451-a296-c4a7d257df20.jpg?v=1606026031",
    type: "T-Shirt",
    name: "Summer-01",
  };

  let product2 = {
    status: "New",
    discountnum: "",
    S: { name: "S", price: "145" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "205" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_1_360x.jpg?v=1570332862",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
    pic3: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    type: "T-Shirt",
    name: "Summer-02",
  };
  let product3 = {
    status: "New",
    discountnum: "",
    S: { name: "S", price: "145" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "205" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_1_360x.jpg?v=1570332862",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
    pic3: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    type: "T-Shirt",
    name: "Summer-02",
  };
  let product4 = {
    status: "New",
    discountnum: "",
    S: { name: "S", price: "145" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "205" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_1_360x.jpg?v=1570332862",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
    pic3: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    type: "T-Shirt",
    name: "Summer-02",
  };

  //Look demo image

  let demo1 = {
    status: "New",
    discountnum: "",
    S: { name: "S", price: "145" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "205" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_180x.jpg?v=1570332862%20180w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_360x.jpg?v=1570332862%20360w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_540x.jpg?v=1570332862%20540w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_720x.jpg?v=1570332862%20720w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_900x.jpg?v=1570332862%20900w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1080x.jpg?v=1570332862%201080w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1296x.jpg?v=1570332862%201296w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1512x.jpg?v=1570332862%201512w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_1728x.jpg?v=1570332862%201728w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_1_f8b9233b-00bb-4a6f-98c2-ca3d15232265_2048x.jpg?v=1570332862%202048w",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
    pic3: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    type: "T-Shirt",
    name: "Summer-04",
  };

  let demo2 = {
    status: "Discount",
    discountnum: "20",
    S: { name: "S", price: "145" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "205" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_180x.jpg?v=1570332861%20180w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_360x.jpg?v=1570332861%20360w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_540x.jpg?v=1570332861%20540w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_720x.jpg?v=1570332861%20720w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_900x.jpg?v=1570332861%20900w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1080x.jpg?v=1570332861%201080w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1296x.jpg?v=1570332861%201296w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1512x.jpg?v=1570332861%201512w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_1728x.jpg?v=1570332861%201728w,%20//cdn.shopify.com/s/files/1/1521/5776/products/ipod_classic_3_7ff3b868-03da-47ad-8c45-286be9d14837_2048x.jpg?v=1570332861%202048w",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
    pic3: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    type: "T-Shirt",
    name: "Summer-04",
  };

  let demo3 = {
    status: "New",
    discountnum: "",
    S: { name: "S", price: "145" },
    M: { name: "M", price: "155" },
    L: { name: "L", price: "205" },
    pic1: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    pic2: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_2_880cd3dd-0125-4844-b643-a245a9bed8d4@2x.jpg?v=1571708481",
    pic3: "https://cdn.shopify.com/s/files/1/1521/5776/products/canon_eos_5d_3@2x.jpg?v=1571708481",
    type: "T-Shirt",
    name: "Summer-04",
  };

  //Look backgound image

  let lookproduct =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/lookbook-bg_a06bc677-d029-4089-b917-f134d8b3b864.png?v=1602829064";

  //Discount backgound image

  let discount_banner1 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108-3.png?v=1603048744";

  let discount_banner2 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108-2.png?v=1603048975";

  let discount_banner3 =
    "https://cdn.shopify.com/s/files/1/1521/5776/files/Rectangle_1108.png?v=1603049088";

  //Collection Demoimage

  //////////////////////////////////////////////

  //Default data

  const SideShow = [img1, img2, img3];
  const length = SideShow.length;
  let featured = [
    product2,
    product1,
    product3,
    product4,
    product1,
    product2,
    product3,
    product4,
  ];
  let product = [
    product1,
    product2,
    product3,
    product4,
    product1,
    product2,
    product3,
    product4,
  ];
  let collection = [product1, product2, product3, product4];
  let top3 = [product1, product2, product3];

  //////////////////////////////////////////////

  //State control
  const [slider, setSlider] = useState(0);
  const [tab, setTab] = useState(0);

  //Function control///////////////////////
  //Tab selected
  const selectedTab = (num) => {
    if (num === 0) {
      document.querySelector("#tab0").style.color = "black";
      document.querySelector("#tab1").style.color = "#aaa5a5";

      setTab(0);
    } else if (num === 1) {
      document.querySelector("#tab0").style.color = "#aaa5a5";
      document.querySelector("#tab1").style.color = "black";
      setTab(1);
    }
  };
  //Slider function
  const ControlSilder = (type) => {
    let a = slider;

    if (type == "pre") {
      console.log(a);
      setSlider(a === 0 ? 0 : a - 1);
    } else if (type == "aft") {
      {
        setSlider(a === length - 1 ? 0 : a + 1);
      }
    }
  };

  //Hover Demo image
  // const Hoverdemo = (place, num) => {
  //   if (place === 0 && num === 0) {
  //     document.querySelector("#demoimg1").style.opacity = "1";

  //     document.querySelector("#demoimg1").style.visibility = "visible";
  //   }
  //   if (place === 0 && num === 1) {
  //     document.querySelector("#demoimg1").style.opacity = "0";

  //     document.querySelector("#demoimg1").style.visibility = "hidden";
  //   }

  //   if (place === 1 && num === 0) {
  //     document.querySelector("#demoimg2").style.opacity = "1";
  //     document.querySelector("#demoimg2").style.visibility = "visible";
  //   }

  //   if (place === 1 && num === 1) {
  //     document.querySelector("#demoimg2").style.opacity = "0";
  //     document.querySelector("#demoimg2").style.visibility = "hidden";
  //   }

  //   if (place === 2 && num === 0) {
  //     document.querySelector("#demoimg3").style.opacity = "1";
  //     document.querySelector("#demoimg3").style.visibility = "visible";
  //   }
  //   if (place === 2 && num === 1) {
  //     document.querySelector("#demoimg3").style.opacity = "0";
  //     document.querySelector("#demoimg3").style.visibility = "hidden";
  //   }
  // };

  return (
    <div>
      {console.log(screen)}
      <Homestyle>
        <Grid className="Home">
          <Grid container={true} xs={12} className="flex Sideshow">
            <Carousel>
              {SideShow.map((val, indx) => {
                return (
                  <div>
                    <div className="flex col   Content-box ">
                      <div className="slide-content">{val.content}</div>
                      <div className="slide-subcontent">{val.subcontent}</div>
                      <a className="slide-link" href="#">
                        SHOP NOW <i class="far fa-hand-point-right"></i>
                      </a>
                    </div>

                    <img src={val.picture}></img>
                  </div>
                );
              })}
            </Carousel>
          </Grid>

          <Grid
            container={true}
            xs={12}
            style={{ marginTop: "5px" }}
            className="flex jus-center    "
          >
            <Grid container className="banner jus-center    ">
              <Grid items={true} xs={screen} className="banner-box1"></Grid>
              <Grid items={true} xs={screen} className="banner-box2">
                {" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container={true}
            xs={12}
            className="flex jus-center jus-sp-between Body-Menu"
          >
            <Grid
              style={{ margin: "0 0 0 9%" }}
              items={true}
              xs={10}
              md={9}
              className="flex jus-center jus-sp-between"
            >
              <Grid style={{ margin: "0 0 0 2%" }} xs={2}>
                <i className="fas fa-glasses"></i>
              </Grid>
              <Grid items={true} xs={2}>
                {" "}
                <i className="fas fa-hat-cowboy"></i>{" "}
              </Grid>
              <Grid items={true} xs={2}>
                {" "}
                <i className="fas fa-tshirt"></i>{" "}
              </Grid>
              <Grid items={true} xs={2}>
                {" "}
                <i className="fas fa-shopping-bag"></i>{" "}
              </Grid>
              <Grid items={true} xs={2}>
                {" "}
                <i className="fas fa-bell"></i>{" "}
              </Grid>
            </Grid>
          </Grid>

          <Grid container xs={12} className="flex jus-center Product-tab">
            <div id="tab0" onClick={() => selectedTab(0)}>
              PRODUCTS TAB{" "}
            </div>{" "}
            <div style={{ width: "20px" }}></div>{" "}
            <div onClick={() => selectedTab(1)} id="tab1">
              FEATURED
            </div>
          </Grid>
          <Grid container className=" flex   jus-center Main-product ">
            {/* <Grid
              xs={scrMainproduct.Container}
              className="flex    Main-product-container"
              items={true}
            >
              {tab === 0
                ? product.map((item, index) => {
                    return (
                      <Grid
                        className="product-items"
                        items={true}
                        xs={scrMainproduct.Items}
                      >
                        {" "}
                        <MultipleCards {...item} key={index}></MultipleCards>
                      </Grid>
                    );
                  })
                : featured.map((item, index) => {
                    return (
                      <Grid
                        className="product-items"
                        items={true}
                        xs={scrMainproduct.Items}
                      >
                        {" "}
                        <MultipleCards {...item} key={index}></MultipleCards>
                      </Grid>
                    );
                  })}
            </Grid> */}
          </Grid>

          <Grid container={true} className="Look-area">
            <Grid items={true}>
              <img
                src="https://cdn.shopify.com/s/files/1/1521/5776/files/lookbook-bg_a06bc677-d029-4089-b917-f134d8b3b864.png?v=1602829064"
                className="Look-image"
              ></img>
            </Grid>

            <Grid container={true} xs={12} className="Look-content">
              <Grid items={true} xs={3} className="look-text">
                <div id="look-title">LOOKBOOK</div>
                <div id="look-subtitle">
                  HOVER THE NUMBER TO SEE THE PRODUCT
                </div>
              </Grid>

              <Grid
                items={true}
                xs={3}
                id="demoplace1"
                // onMouseEnter={() => Hoverdemo(0, 0)}
                // onMouseLeave={() => Hoverdemo(0, 1)}
              >
                {" "}
                <button id="btndemo1" className="Demo-img">
                  1
                </button>
                {/* <div id="demoimg1">
                  <MultipleCards {...demo1}></MultipleCards>
                </div> */}
              </Grid>

              <Grid
                items={true}
                xs={3}
                id="demoplace2"
                // onMouseEnter={() => Hoverdemo(1, 0)}
                // onMouseLeave={() => Hoverdemo(1, 1)}
              >
                <button id="btndemo2" className="Demo-img">
                  2
                </button>
                {/* <div id="demoimg2">
                  <MultipleCards {...demo2}></MultipleCards>
                </div> */}
              </Grid>

              <Grid
                items={true}
                xs={3}
                id="demoplace3"
                // onMouseEnter={() => Hoverdemo(2, 0)}
                // onMouseLeave={() => Hoverdemo(2, 1)}
              >
                <button id="btndemo3" className="Demo-img">
                  3
                </button>

                {/* <div id="demoimg3">
                  <MultipleCards {...demo3}></MultipleCards>
                </div> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid container={true} xs={12} className="flex Discount-area jus-center ">
            <Grid items={true} id="discount1" className="bd " xs={3}></Grid>
            <Grid items={true} id="discount2" className="bd" xs={3}></Grid>
            <Grid items={true} id="discount3" className="bd" xs={3}></Grid>
          </Grid>

          <Grid className="flex  al-center jus-center">
            <h3 style={{ marginTop: "2%" }}>COLLECTION SUMMER 2021</h3>
          </Grid>

          <Grid className="Collection">
            <Grid className="flex Collection-wrapper">
              {/* {collection.map((val, indx) => {
                return (
                  <Grid items={true}>
                    {" "}
                    <MultipleCards {...val} key={indx}></MultipleCards>
                  </Grid>
                );
              })} */}
            </Grid>
          </Grid>

          <Grid xs={12} container={true} className="Filter">
            <Grid className="flex col al-center jus-center Filtet-content">
              <h3>ADVANCED FILTER </h3>

              <h3 style={{ marginTop: "-1%" }}>
                SEARCH FOR A PRODUCTS,
                <label style={{ color: "red" }}>
                  {" "}
                  YOU ARE REALLY LOOKING FOR
                </label>
              </h3>

              <Grid container={true} className="flex">
                <Grid items={true} xs={3}>
                  <select className="hidden">
                    <option className="first" value="">
                      Choose a collection...
                    </option>
                    <option
                      value="/collections/bestsellers"
                      data-id="371579784"
                    >
                      Bestsellers
                    </option>
                    <option value="/collections/featured" data-id="371579464">
                      Featured
                    </option>
                  </select>
                </Grid>

                <Grid items={true} xs={3}>
                  <select className="hidden">
                    <option className="first" value="">
                      Color
                    </option>
                    <option value="black" rel="black">
                      Black
                    </option>
                    <option value="red" rel="red">
                      Red
                    </option>
                  </select>
                </Grid>
                <Grid items={true} xs={3}>
                  <select className="hidden">
                    <option className="first" value="">
                      Brand
                    </option>
                    <option value="insight" rel="insight">
                      Insight
                    </option>
                    <option value="brixton" rel="brixton">
                      Brixton
                    </option>
                    <option value="poler" rel="poler">
                      Poler
                    </option>
                  </select>
                </Grid>

                <button className="btnSREACH">SREACH</button>
              </Grid>
            </Grid>
            <Grid xs={1}></Grid>
          </Grid>
          <Grid className="flex jus-center Collection">
            <h3>TOP 3</h3>
          </Grid>
          <Grid container={true} className="Top3 flex jus-center   ">
            {/* {top3.map((val, indx) => {
              return (
                <Grid items={true}>
                  {" "}
                  <MultipleCards {...val} key={indx}></MultipleCards>
                </Grid>
              );
            })} */}
          </Grid>

          <Grid container={true} className="flex jus-center al-center  ">
            <Grid items={true} xs={3} className="serviecslogan">
              <div>
                <i class="fas fa-truck-moving"></i>&nbsp;FREE SHIPPING AND
                RETURN{" "}
              </div>
            </Grid>

            <Grid items={true} xs={3} className="serviecslogan">
              <div>
                <i class="fas fa-truck-moving"></i>&nbsp;MONEY BACK GUARANTEE{" "}
              </div>
            </Grid>

            <Grid items={true} xs={3} className="serviecslogan">
              <div>
                <i class="fas fa-truck-moving "></i>&nbsp;FAST AND RELIABLE
                SUPPORT{" "}
              </div>
            </Grid>
          </Grid>
          <Grid className="flex jus-center">
            <h3>SHOP BY BRAND</h3>
          </Grid>

          <Grid container={true} className="flex Logobrand" xs={10}>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_01.png?v=1603131718"
              ></img>
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_02.gif?v=1603131784"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_02.gif?v=1603131784"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_03.gif?v=1603131828"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_03.gif?v=1603131828"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_04.gif?v=1603131863"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_04.gif?v=1603131863"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_05.gif?v=1603131915"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_05.gif?v=1603131915"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid container={true} className="flex Logobrand" xs={10}>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_06.gif?v=1603131950"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_06.gif?v=1603131950"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 ls-is-cached lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_10.gif?v=1603132144"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_10.gif?v=1603132144"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_07.gif?v=1603132032"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_07.gif?v=1603132032"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 ls-is-cached lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_08.gif?v=1603132078"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_08.gif?v=1603132078"
                alt=""
              />
            </Grid>
            <Grid items={true} xs={2}>
              <img
                className="w-100 ls-is-cached lazyloaded"
                src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_09.gif?v=1603132113"
                data-src="//cdn.shopify.com/s/files/1/1521/5776/files/shop-by-brand1_09.gif?v=1603132113"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid className=" flex col  al-center jus-center Customersay">
            <h3>WHAT CUSTOMERS ARE SAYING</h3>
            <Grid container={true} xs={8} className="flex jus-center">
              <Grid xs={3} className="comment-box">
                Content 1
              </Grid>
              <Grid xs={3} className="comment-box">
                Content 2
              </Grid>
              <Grid xs={3} className="comment-box">
                Content 3
              </Grid>
            </Grid>
          </Grid>
          <Grid className="flex col al-center jus-center Blog ">
            <h3>FROM THE BLOG</h3>
            <Grid container={true} xs={8} className="flex jus-center">
              <Grid xs={3} className="comment-box">
                Content 1
              </Grid>
              <Grid xs={3} className="comment-box">
                Content 2
              </Grid>
              <Grid xs={3} className="comment-box">
                Content 3
              </Grid>
            </Grid>
          </Grid>
          <Grid className="Follow"></Grid>
        </Grid>
      </Homestyle>
    </div>
  );
}

export default Home;
