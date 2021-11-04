const express = require("express");
const router = express.Router();
const Controller_blog = require("../Controllers/Controller_blog");

router.post("/createpost", async (req, res) => {
  const { admin, displayimg, post } = req.body;

  if (admin == "admin") {
    let result = await Controller_blog.Createpost(post, displayimg);

    if (result == true)
      res.send({ status: "200", message: "Created post successfully" });
    else res.send({ status: "500", message: "Your post or image too large" });
  }
});

router.patch("/update", async (req, res) => {
  const { admin, data } = req.body;
  if (admin == "admin") {
    let result = await Controller_blog.Updatepost(data);
    res.send(result);
  }
});

router.get("/find/:postid", async (req, res) => {
  const { postid } = req.params;

  let result = await Controller_blog.Findpost(postid);

  res.send(result);
});

router.get("/load/:page", async (req, res) => {
  const { page } = req.params;

  let result = await Controller_blog.Getpost(page);



  res.send(result);
});

router.patch("/delete", async (req, res) => {
  const { data } = req.body;

  let result = await Controller_blog.Deletepost(data);

  res.send(result);
});

module.exports = router;
