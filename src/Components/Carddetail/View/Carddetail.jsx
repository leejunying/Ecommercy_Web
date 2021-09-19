import React from "react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import "../CSS/Carddetail.css";
import axios from "axios";
import Magnifier from "react-magnifier";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux";
const Carddetail = ({ match }) => {
  const {
    params: { item },
  } = match;

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const product_Size = data.Size || [];
  const product_Img = data.Pic || [];

  useEffect(() => {
    const Get_products = (name) => {
      axios
        .get(`http://localhost:4000/Products/Find/${name}`)
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    Get_products(match.params.name);
  }, []);

  const SelectImg = (indx) => {
    product_Img.map((value, index) => {
      if (index === indx) {
        setSelectedImg(indx);
        document.querySelector(`#img${index}`).style.border =
          "0.5px solid rgb(0, 87, 250)";
      } else {
        document.querySelector(`#img${index}`).style.border = "none";
      }
    });
  };

  const SelectedSize = (indx) => {
    product_Size.map((value, index) => {
      if (index === indx) {
        setSelectedSize(indx);
        document.querySelector(`#size${index}`).style.color = "white";
        document.querySelector(`#size${index}`).style.backgroundColor="black"
      } else {
        document.querySelector(`#size${index}`).style.color = "black";
        document.querySelector(`#size${index}`).style.backgroundColor="white"
      }
    });
  };

  const AddtoCart=()=>{

    let objitems={

      name:data.Name+"_"+data.Size[selectedSize].Name,

      price:data.Size[selectedSize].Price,
      img: data.Pic[selectedImg],
      number:0,

    }

    
 

    dispatch(addToCart(objitems));
  };

  return (
    <Grid container={true} className="flex Detail-products jus-center">
      { data!=""?
        <Grid container={true} md={10}>
          <Grid container={true} className="flex State_bar" md={12}>
            <Grid items={true} md={1}>
              {" "}
            </Grid>
            <Grid items={true} md={3}>
              Home / Products /{data.Name}
            </Grid>
          </Grid>
          <Grid container={true} md={8} className="Detail  ">
            <Grid items={true} md={6} className="Detail-img  ">
              {product_Img.length > 0 ? (
                <Magnifier  style={{height:"300px",maxWidth:"300px"}}   src={product_Img[selectedImg]} />
              ) : null}

              <div id="zoom">
                <img id="zoom-img" />
              </div>
            </Grid>

            <Grid items={true} md={6} className="flex  Detail-area  ">
              <Grid
                conatiner={true}
                classname="flex col jus-center Detail-container "
              >
                <Grid items={true} className="Detail-type">
                  {data.Type}
                </Grid>
                <Grid items={true} className="Detail-name">
                  <h3>{data.Name}</h3>
                </Grid>

                <Grid items={true} className="Detail-Price">
                  {product_Size.length > 0
                    ? "$" + product_Size[selectedSize].Price
                    : null}
                </Grid>

                <Grid
                  items={true}
                  md={6}
                  className="flex jus-center sp-between Detail-Size"
                >
                  {product_Size.map((val, indx) => {
                    return (
                      <Grid
                        {...val}
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

                <Grid items={true} className=" flex   jus-start Detail-listimg">
                  {product_Img.map((value, indx) => {
                    return (
                      <img
                        src={value}
                        key={indx}
                        onClick={() => {
                          SelectImg(indx);
                        }}
                        id={"img" + indx}
                        className="img-items"
                      ></img>
                    );
                  })}
                </Grid>
                <Grid items={true} className="Detail-Decrible"></Grid>
                <Grid className="Cart_button" onClick={()=>AddtoCart()}>
             <label>  ADD</label>    <i className="fas fa-shopping-cart"></i>
              

           </Grid> 
              </Grid>
            </Grid>
          </Grid>{" "}
        </Grid>
    : <Grid><h3>Product not found</h3></Grid> }
    </Grid>
  );
};

export default Carddetail;
