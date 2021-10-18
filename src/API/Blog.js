const express = require("express");
const router = express.Router();
const Controller_blog = require("../Controllers/Controller_blog");

router.post("/createpost", async(req, res) => {
    const { admin, displayimg, post } = req.body;


    if (admin == "admin") {

        let result = await Controller_blog.Createpost(post, displayimg);


        if (result == true)
            res.send("200");
        else
            res.send("400")

    }
});

module.exports = router;