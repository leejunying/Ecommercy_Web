import axios from "axios";

var host = "http://localhost:4000";

//Post
export const Load_Data = async () => {
  let data = axios.get(`${host}/admin/data`).then((data) => {
    return data;
  });

  return data;
};

export const Update_Post = async (update) => {
  let data = axios
    .patch(`${host}/blog/update`, {
      admin: "admin",
      data: update,
    })
    .then((data) => {
      return data;
    })
    .then((res) => {
      return res;
    });

  return data;
};

export const Find_Post = (postid) => {
  let data = axios
    .get(`${host}/blog/find/${postid}`)
    .then((data) => {
      return data;
    })
    .then((datas) => {
      return datas;
    });

  return data;
};

export const Get_Post = (page) => {
  let data = axios
    .get(`${host}/blog/load/${page}`)
    .then((data) => {
      return data;
    })
    .then((lastdata) => {
      return lastdata;
    });

  return data;
};

export const Delete_Post = (findata) => {
  let data = axios
    .patch(`${host}/blog/delete`, {
      admin: "admin",
      data: findata,
    })
    .then((data) => {
      return data;
    })
    .then((res) => {
      return res;
    });

  return data;
};
