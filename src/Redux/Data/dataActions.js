import {
  GET_DATA,
  GET_SUCCESS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_FAIL,
} from "./dataTypes";

export const getdata = () => {
  return {
    type: GET_DATA,
  };
};

export const getsuccess = (data) => ({ type: GET_SUCCESS, data });

export const getfail = (error) => ({type:GET_FAIL,error})
 
export const updateproduct = (objproduct, indx) => {
  return {
    type: UPDATE_PRODUCT,
    indx: indx,
    product: objproduct,
  };
};

export const deleteproduct = (indx) => {
  console.log(indx);

  return {
    type: DELETE_PRODUCT,
    indx: indx,
  };
};
