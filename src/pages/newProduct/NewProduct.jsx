import "./newProduct.css";
import React from "react";
import axios from 'axios';

import Grid from "@material-ui/core/Grid";
import ImageIcon from "@material-ui/icons/Image";
import imageToBase64 from "image-to-base64/browser";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Resizer from "react-image-file-resizer";

export default function NewProduct() {
  const [images, setImages] = useState([]);
  const [testimg,settestimg] =useState("")
  const [info, setInfor] = useState({
    Name: "",
    Brand: "",
    Type: "",
    Describe:"",
  });

  const [color, setColor] = useState({
    color1: "",
    color2: "",
    color3: "",
  });

  const [priceSize, setPriceSize] = useState([
    {
      Name: "S",
      Price: 0,
    },

    {
      Name: "M",
      Price: 0,
    },
    {
      Name: "L",
      Price: 0,
    },
    {
      Name: "X",
      Price: 0,
    },
    {
      Name: "XS",
      Price: 0,
    },
    {
      Name: "XM",
      Price: 0,
    },
    {
      Name: "XL",
      Price: 0,
    },
    {
      Name: "XX",
      Price: 0,
    },
  ]);

  const Size = ["S", "M", "L", "X", "XS", "XM", "XL", "XX"];

  const [checkSize, setCheckSize] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

   const [err1,setError1]=useState("")
   const [err2,setError2]=useState("")
   const [err3,setError3]=useState("")

   const [err4,setError4]=useState("")


  //infobox1

  const onChangeinfo = (e, item) => {
    if (item == "Name") setInfor({ ...info, Name: e.target.value });
    if (item == "Type") setInfor({ ...info, Type: e.target.value });
    if (item == "Brand") setInfor({ ...info, Brand: e.target.value });
    if(item=="Des") setInfor({...info,Describe:e.target.value})
  };

  // selected image list
  const maxNumber = 3;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  //Config Color input
  const handleChangeColor = (e, index) => {
    if (index == 1) setColor({ ...color, color1: e.target.value });
    if (index == 2) setColor({ ...color, color2: e.target.value });
    if (index == 3) setColor({ ...color, color3: e.target.value });
  };

  //Show and hide input Size by checkbox
  const onCheckChange = (indx) => {
    let updatestate = checkSize;
    if (updatestate[`${indx}`] == false) updatestate[`${indx}`] = true;
    else updatestate[`${indx}`] = false;

    for (let value in updatestate) {
      if (updatestate[`${value}`] == true) {
        document.querySelector(`#showinput${value}`).style.maxHeight = "150px";
        document.querySelector(`#showinput${value}`).style.opacity = "1";
      }
      if (updatestate[`${value}`] == false) {
        document.querySelector(`#showinput${value}`).style.maxHeight = "0px";
        document.querySelector(`#showinput${value}`).style.opacity = "0";
      }
    }
    setCheckSize(updatestate);
  };

  const onChangeinputSize = (e, indx) => {
    let oldstate = priceSize;

    oldstate[indx].Price = e.target.value;

    setPriceSize(priceSize);
  };

  //Submit
  const submit = () => {
    //Change objinfo to array
    var arrinfo = Object.values(info);

    arrinfo = arrinfo.filter((value) => value != "");
    //Change objcolor to array
    var arrcolor = Object.values(color);
    arrcolor = arrcolor.filter((value) => value != "");

    //Filter priceSize have value

    var arrSize = priceSize;
arrSize=    arrSize.filter((value) => value.Price != "");

    let box1 = document.querySelector(".box1").style;
    let box2 = document.querySelector(".box2").style;
    let box3 = document.querySelector(".box3").style;
    let box4 = document.querySelector(".box4").style;

    if (arrinfo.length < 3) {
      box1.border = "1px solid red";
      setError1(  "Have empty value " );
    }
    if (arrcolor.length == 0) {
      box2.border = "1px solid red";
      setError2(  "Minimum have one Color " );
    }

    if (images.length == 0) {
      box3.border = "1px solid red";
      setError3(  "Minimum have one Images" );
    }

    if (arrSize.length == 0) {
      box4.border = "1px solid red";
      setError4("Minimum have one Size " );
    }



    

    if (
      arrinfo.length >=3 &&
      arrcolor.length > 0 &&
      images.length > 0 &&
      arrSize.length > 0
    ) {

      //Clear error
      setError1("")
      setError2("")
      setError3("")
      setError4("")

      //config images

      let arrimages=images

      arrimages=arrimages.map(data=>{return   data.data_url})
      
   

 
     axios
         .post("http://localhost:4000/products/add", {
          Name:arrinfo[0],
          Discount:0,
          Status:"New",
          Type:arrinfo[1],
          Brand:arrinfo[2],
          Describe:arrinfo[3],
          Price:arrSize[0].Price,
          Pic:arrimages,
          Size:arrSize,
          Color:arrcolor,


         })
         .then((res) => {
           return res.data;
         })
         .then((data) => { 
      
          settestimg(data.Pic)
         })
         .catch((error) => {
           console.error(error);
         });
 
      



    }
  };
  return (
    <Grid className="newProduct">
      <h1 className="addProductTitle">New Product</h1>

      <Grid
        style={{ paddingBottom: "20px" }}
        container={true}
        md={12}
        className="flex addProductcontainer"
      >
        <Grid items={true} md={3} className="box1    addProductForm">
          <div className="addProductItem">
            <span className="error">{err1}</span>
            <label>Name</label>
            <TextField
              onChange={(e) => onChangeinfo(e, "Name")}
              required
              id="standard-required"
              label="Required"
              placeholder="Product Name"
            />
          </div>

          <div className="addProductItem">
            <label>Type</label>
            <TextField
              onChange={(e) => onChangeinfo(e, "Type")}
              required
              id="standard-required"
              label="Required"
              placeholder="Product Type "
            />
          </div>
          <div className="addProductItem">
            <label>Brand</label>
            <TextField
              onChange={(e) => onChangeinfo(e, "Brand")}
              required
              id="standard-required"
              label="Required"
              placeholder="Product Brand"
            />
          </div>
        </Grid>

        <Grid
          items={true}
          md={3}
          className="box2 flex col     addProductForm"
        >
          <div className="addProductItem">
            <span className="error">{err2}</span>
            <InputLabel>Color: 1</InputLabel>

            <Select
              required={true}
              id="demo-simple-select"
              value={color.color1}
              onChange={(e) => handleChangeColor(e, 1)}
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
          </div>
          <div className="addProductItem">
            <InputLabel>Color: 2</InputLabel>

            <Select
              id="demo-simple-select"
              value={color.color2}
              onChange={(e) => handleChangeColor(e, 2)}
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
          </div>

          <div className="addProductItem">
            <InputLabel>Color: 3</InputLabel>

            <Select
              id="demo-simple-select"
              value={color.color3}
              onChange={(e) => handleChangeColor(e, 3)}
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
          </div>
        </Grid>

        <Grid items={true} md={6} className="box3   addProductForm">
          <Grid
            style={{ width: "100%" }}
            items={true}
            md={12}
            className=" addProductItem"
          >
            <span className="error">{err3}</span>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              resolutionType='absolute'
              resolutionWidth={300}
              resolutionHeight={300}
               dataURLKey="data_url"
    
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                errors,
                isDragging,
                dragProps,
              }) => ( 
             
     
                // write your building UI
                <Grid
                  container={true}
                  md={12}
                  className=" flex al-center upload__image-wrapper"
                >
                  <Grid items={true} md={4} className="flex ">
                    <input
                      style={isDragging ? { color: "red" } : undefined}
                      type="button"
                      name="file"
                      id="file"
                      className="inputfile"
                      onClick={onImageUpload}
                      {...dragProps}
                      onClick={onImageUpload}
                    />

                    <ImageIcon color="secondary"></ImageIcon>
                    <label className="flex filetitle" for="file">
                      Choose a Image{" "}
                    </label>
                  </Grid>
                  <Grid className="" items={true} md={4}>
                    {" "}
                    <button className="btnclear" onClick={onImageRemoveAll}>
                      Clear all{" "}
                    </button>
                  </Grid>
                  <Grid
                    style={{ marginTop: "10px" }}
                    container={true}
                    md={12}
                    className=" flex"
                  >
                    {imageList.map((image, index) => (
                      <Grid
                        items={true}
                        md={4}
                        key={index}
                        className="image-item"
                      >
                        <img
                          src={image['data_url']}
                          alt=""
                          width="150"
                          height="250px"
                          className="imgpreview"
                        />
                        <Grid
                          items={true}
                          md={8}
                          className=" flex sp-between image-item__btn-wrapper"
                        >
                          <button
                            className="btnimg"
                            onClick={() => onImageUpdate(index)}
                          >
                            Update
                          </button>
                          <button
                            className="btnimg"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </button>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                      {errors!=undefined?<p>Your resolution need to resize 300 X 300 for upload</p>:null}
                  </Grid>
              )}
            </ImageUploading>
          </Grid>
        </Grid>

        <Grid
          style={{ marginTop: "20px" }}
          container={true}
          md={3}
          className="box4  addProductForm"
        >
          <div className=" addProductItem">
            <span className="error">{err4}</span>
            <label>Product Size</label>
            {Size.map((value, indx) => {
              return (
                <Grid className="Sizeitems">
                  <Grid className="flex al-center containercheck">
                    {" "}
                    <input
                      id={`check${indx}`}
                      onChange={() => onCheckChange(indx)}
                      type="checkbox"
                      value={value}
                    />
                    <label>Size {value}</label>
                  </Grid>

                  <input
                    id={`showinput${indx}`}
                    onChange={(e) => onChangeinputSize(e, indx)}
                    style={{ border: "none", padding: "5px" }}
                    autofocus
                    className="hideinput"
                    type="number"
                    placeholder={`Price ${value}`}
                  ></input>
                </Grid>
              );
            })}
          </div>
        </Grid>

        <Grid
          style={{ marginTop: "20px" }}
          items={true}
          md={6}
          className="flex col addProductForm"
        >
          <Grid
            style={{ width: "100%" }}
            items={true}
            className="addProductItem"
          >
            <label>Describe</label>
            <textarea 

              onChange={(e)=>onChangeinfo(e,'Des')}
              style={{ resize: "none", outlineStyle: "none", padding: "10px" }}
              rows="4"
              cols="50"
            ></textarea>
          </Grid>

          <Grid items={true} md={6}>
            {" "}
            <button
              style={{ width: "150px", heigth: "33px" }}
              className="addProductButton"
              onClick={submit}
            >
              Create
            </button>

           </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
