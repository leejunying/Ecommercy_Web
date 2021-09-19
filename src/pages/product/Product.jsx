import { Link } from "react-router-dom";
import "./product.css";
import { useState } from "react";
import Chart from "../../Components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { TextField, InputLabel } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Resizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
import { updateproduct } from "../../Redux";
import axios from 'axios';
const Inputstyle = styled.div`
  .custom-file-input {
    color: transparent;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Edit";
    color: #6e6868;
    display: inline-block;
    background-color: #5ea2ca54;
    border: none;
    box-shadow: 2px 2px grey;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    --webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active {
    outline: 0;
  }
  .custom-file-input:active::before {
    background-color: #5ea2ca54;
  }
`;

export default function Product(match) {
   const dispatch = useDispatch()
  const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 150,
    },
    selectEmpty: {},
  }));

  const classes = useStyles();
  const products = useSelector((state) => state.products);
  const product = products[match.match.params.productId];
  const [showpop, setShowpop] = useState(0);
  const [name, setName] = useState(product.Name);
  const [listimg, setListimg] = useState([...product.Pic]);
  const [status, setStatus] = useState(product.Status);
  const [color, SetColor] = useState([
    product.Color[0] != undefined ? product.Color[0] : "",
    product.Color[1] != undefined ? product.Color[1] : "",
    product.Color[3] != undefined ? product.Color[2] : "",
  ]);
  const [type, setType] = useState(product.Type);
  const [brand, setBrand] = useState(product.Brand);
  const [size, setSize] = useState([...product.Size]);
  const [disnum, setDisnum] = useState(product.Discount);
  const arrStatus = ["Discount", "Normal", "Outstock", "New"];
  const [describe, setDescribe] = useState(product.Describe);
  const [stock,setStock]= useState(product.stock)

  const handleChange = (event) => {
    if (event.target.value != "Discount") {
      setDisnum(0);
    }

    setStatus(event.target.value);
  };

  const handleChangeColor = (e, index) => {
    let colorstate = color;
    colorstate[index] = e.target.value;
    SetColor([...colorstate]);
    console.log(colorstate);
  };

  const handleDisnum = (e) => {
    setDisnum(e.target.value);
  };
  const handleSize = (e, indx) => {
    let sizestate = size;
    sizestate[indx].Price = e.target.value;
    setSize(sizestate);
  };

  const handleinputimg = (event, indx) => {
    let imgstate = listimg;

    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          188,
          "JPEG",
          100,
          0,

          (uri) => {
            console.log(uri);
            imgstate[indx] = uri;
            setListimg([...imgstate]);
          },
          "base64",
          120,
          120
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  const saleproducts = [
    {
      name: "Cost",
      Sales: size[0].Price,
    },
    {
      name: "Discount",
      Sales:
        disnum > 0
          ? size[0].Price - Math.round((disnum / 100) * size[0].Price)
          : size[0].Price,
    },
  ];

  const update = () => {
    document.querySelector(".App").style.overflow = "hidden";

    setShowpop(1);
    console.log(name, status, disnum, color, size, brand, describe);

    let objupdate = {
      _id:product._id,
      Name: name,
      Status: status,
      Brand: brand,
      Discount: disnum,
      Pic: listimg,
      Type: type,
      Describe:describe,
      Price:size[0].Price,
      Size:size,
      Color:color
    };
   let indx=match.match.params.productId

    dispatch(updateproduct(objupdate,indx))

    
   let id= product._id
     
    axios
    .post("http://localhost:4000/products/update",  {
     objupdate: objupdate,
     id:id

    })
    .then((res) => {
      return res.data;
    })
    .then((data) => { 
 
  
      console.log(data)
    })
    .catch((error) => {
      console.error(error);
    });




  };

  const hidepop = () => {
    document.querySelector(".App").style.overflow = "visible";
    setShowpop(0);
  };

  return (
    <div className="product">
      {showpop != 0 ? (
        <Grid className="Noticebox">
          <Grid className="Noticecontainer">
            <label>Update successfully</label>

            <input
              className="btnok"
              onClick={() => hidepop()}
              type="button"
              value="OK"
            ></input>
          </Grid>
        </Grid>
      ) : null}

      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={saleproducts}
            dataKey="Sales"
            title="Sales Performance"
          ></Chart>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{product.Name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">{product.Price}$</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Status:</span>
              <span className="productInfoValue">{product.Status}</span>
            </div>
          </div>
        </div>
      </div>
      <Grid container={true} md={12} className=" flex jus-start  productBottom">
        <Grid items={true} md={3} className="productFormLeft">
          <Grid className="flex col editrow">
            <label>Product name</label>
            <TextField
              id="outlined-basic"
              label={product.Name}
              variant="outlined"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>

          <Grid className="flex col editrow">
              <label>Stock</label>
          <TextField
                  id="outlined-basic"
                  label={product.stock}
                  variant="outlined"
                  type="number"
                  placeholder={product.stock}
                  onChange={(e) => setStock(e.target.value)}
                />


          </Grid>
          <Grid className="flex col editrow">
            <label>Product Type</label>
            <Select
              id="demo-simple-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={`T-shirt`}>
                <label>T-Shirt</label>
              </MenuItem>

              <MenuItem value={`Coat`}>
                <label>COAT</label>
              </MenuItem>

              <MenuItem value={`Jacket`}>
                <label>JACKET</label>
              </MenuItem>

              <MenuItem value={`Jeans`}>
                <label>JEANS</label>
              </MenuItem>

              <MenuItem value={`Short`}>
                <label>SHORT</label>
              </MenuItem>
              <MenuItem value={`Shoes`}>
                <label>SHOES</label>
              </MenuItem>
              <MenuItem value={`Tanktop`}>
                <label>TANKTOP</label>
              </MenuItem>
              <MenuItem value={`Bikini`}>
                <label>BIKINI</label>
              </MenuItem>

              <MenuItem value={`Suit`}>
                <label>SUIT</label>
              </MenuItem>
            </Select>
          </Grid>

          <Grid className="flex col editrow">
            <label style={{ marginBottom: "10px" }}>Brand</label>

            <Select
              id="demo-simple-select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <MenuItem value={`Adidas`}>
                <label>ADIDAS</label>
              </MenuItem>
              <MenuItem value={`pink`}>
                <label>NIKE</label>
              </MenuItem>
              <MenuItem value={`Nike`}>
                <label>DC</label>
              </MenuItem>
              <MenuItem value={`Dc`}>
                <label>PUMA</label>
              </MenuItem>
              <MenuItem value={`Puma`}>
                <label>CONVERSE</label>
              </MenuItem>
              <MenuItem value={`Converse`}></MenuItem>
            </Select>
          </Grid>
          <Grid className="flex col editrow">
            <label>Status</label>

            <FormControl className={classes.formControl}>
              <Select value={status} onChange={handleChange}>
                {arrStatus.map((item) => {
                  return (
                    <MenuItem key={item} value={item}>
                      {" "}
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
              {status == "Discount" ? (
                <TextField
                  id="outlined-basic"
                  label="Discount % value"
                  variant="outlined"
                  type="number"
                  placeholder={product.Discount}
                  onChange={(e) => handleDisnum(e)}
                />
              ) : null}
            </FormControl>
          </Grid>

          <Grid className="flex col editrow">
            <label style={{ marginBottom: "10px" }}>Product color</label>
            <InputLabel>Color: 1</InputLabel>

            <Select
              id="demo-simple-select"
              value={color[0]}
              onChange={(e) => handleChangeColor(e, 0)}
            >
              <MenuItem
                style={{ backgroundColor: "Black", color: "white" }}
                value={`black`}
              >
                <label>BLACK</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Pink", color: "white" }}
                value={`pink`}
              >
                <label>PINK</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Red", color: "white" }}
                value={`red`}
              >
                <label>RED</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "White", color: "black" }}
                value={`white`}
              >
                <label>WHITE</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Green", color: "white" }}
                value={`green`}
              >
                <label>GREEN</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Blue", color: "white" }}
                value={`blue`}
              >
                <label>BLUE</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Yellow", color: "BLACK" }}
                value={`yellow`}
              >
                <label>YELLOW</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Grey", color: "white" }}
                value={`grey`}
              >
                <label>GREY</label>
              </MenuItem>
            </Select>
          </Grid>
          <Grid className="flex col editrow">
            <InputLabel>Color: 2</InputLabel>

            <Select
              id="demo-simple-select"
              onChange={(e) => handleChangeColor(e, 1)}
              value={color[1]}
            >
              <MenuItem
                style={{ backgroundColor: "Black", color: "white" }}
                value={`black`}
              >
                <label>BLACK</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Pink", color: "white" }}
                value={`pink`}
              >
                <label>PINK</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Red", color: "white" }}
                value={`red`}
              >
                <label>RED</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "White", color: "black" }}
                value={`white`}
              >
                <label>WHITE</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Green", color: "white" }}
                value={`green`}
              >
                <label>GREEN</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Blue", color: "white" }}
                value={`blue`}
              >
                <label>BLUE</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Yellow", color: "BLACK" }}
                value={`yello`}
              >
                <label>YELLOW</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Grey", color: "white" }}
                value={`grey`}
              >
                <label>GREY</label>
              </MenuItem>
            </Select>
          </Grid>

          <Grid className="flex col editrow">
            <InputLabel>Color: 3</InputLabel>

            <Select
              id="demo-simple-select"
              onChange={(e) => handleChangeColor(e, 0)}
              value={color[2]}
            >
              <MenuItem
                style={{ backgroundColor: "Black", color: "white" }}
                value={`black`}
              >
                <label>BLACK</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Pink", color: "white" }}
                value={`pink`}
              >
                <label>PINK</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Red", color: "white" }}
                value={`red`}
              >
                <label>RED</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "White", color: "black" }}
                value={`white`}
              >
                <label>WHITE</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Green", color: "white" }}
                value={`green`}
              >
                <label>GREEN</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Blue", color: "white" }}
                value={`blue`}
              >
                <label>BLUE</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Yellow", color: "BLACK" }}
                value={`yello`}
              >
                <label>YELLOW</label>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: "Grey", color: "white" }}
                value={`grey`}
              >
                <label>GREY</label>
              </MenuItem>
            </Select>
          </Grid>
          <Grid items={true} className=" flex col editrow">
            <label>Product Size</label>
            {size.map((value, indx) => {
              return (
                <Grid className="flex al-center  jus-center sp-between">
                  <label>Size {value.Name}:</label>

                  <TextField
                    style={{ width: "70%" }}
                    id="outlined-basic"
                    label={value.Price}
                    variant="outlined"
                    type="text"
                    onChange={(e) => handleSize(e, indx)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid container={true} md={9} className="  flex    ">
          <Grid items={true} md={10} className=" flex col  editrow">
            <label>Product photo</label>
            {
              <Grid style={{ width: "100%" }} className=" flex jus-end  ">
                {listimg.map((value, indx) => {
                  return (
                    <Inputstyle>
                      {console.log(listimg)}
                      <Grid
                        style={{ height: "188x" }}
                        className=" flex  col jus-start  edit-container"
                      >
                        <img
                          style={{
                            maxWidth: "250px",
                            height: "188px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                          src={value}
                        ></img>
                        <input
                          key={indx}
                          onChange={(e) => handleinputimg(e, indx)}
                          type="file"
                          className="custom-file-input"
                          accept="image/png, image/gif, image/jpeg"
                        />{" "}
                      </Grid>
                    </Inputstyle>
                  );
                })}
              </Grid>
            }

            <Grid items={true} className="flex col editrow">
              <label>Describe</label>
              <textarea
                onChange={(e) => setDescribe(e.target.value)}
                style={{
                  resize: "none",
                  outlineStyle: "none",
                  padding: "10px",
                }}
                rows="4"
                cols="50"
                value={describe}
              ></textarea>
            </Grid>

            <Grid style={{ marginTop: "10%" }} items={true} className="flex ">
              <button className="productButton" onClick={() => update()}>
                Update
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
