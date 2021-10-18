const express = require("express");
const router = express.Router();

const Controller = require("../Controllers/Controller_Chat");

router.get("/Currentroom", async(req, res) => {
    let results = await Controller.Countroom();

    console.log(results);

    res.send({ Room: results + 1 });
});

router.get("/Loadroom", async(req, res) => {
    let Room = await Controller.Getroom();
    let Message = await Controller.Getmessage();

    res.send({ Listroom: Room, Listmessage: Message });
});

router.post("/Refresh", async(req, res) => {

    const { admin } = req.body

    console.log(admin)
    if (admin == true) {


        let room = await Controller.Clearall()



        console.log(room)




    }





});

module.exports = router;