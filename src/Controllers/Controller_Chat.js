const Chatrealtime_Model = require("../Models/Chatrealtime");
const Chatmessage_Model = require("../Models/Chatmessage");

const Createchatroom = async(roomid, participant) => {
    try {
        const defaultstyle = {
            backgroundcolor: "#21ad78",
            color: "#FFFF",
        };

        const newroom = new Chatrealtime_Model({
            Room: roomid,
            Participant: participant,
            Style: defaultstyle,
            Status: "online",
        });
        await newroom.save();

        console.log(newroom);

        if (!newroom) return "Can't load new room";

        return newroom;
    } catch (err) {
        return err;
    }
};

const Getroom = async() => {
    try {
        const getroom = Chatrealtime_Model.find();

        return getroom;
    } catch (err) {
        return err;
    }
};

const Findroom = async(roomid) => {
    try {
        let result = await Chatrealtime_Model.find({ Room: roomid });

        return result;
    } catch (err) {
        return err;
    }
};


const Clearall = async() => {


    let room = await Getroom()

    room = room.filter(data => data.Status = "offline")

    console.log(room)
    room = room.map((data) => {

        Removeroom(data.Room)
        Removemessage(data.Room)


    })

    return room
}


const Removemessage = async(roomid) => {
    try {
        const messremove = await Chatmessage_Model.deleteMany({ Room: roomid });



        if (!messremove) return "Can't remove message";

        console.log(messremove);
        return messremove;
    } catch (err) {
        return err;
    }
};

const Removeroom = async(roomid) => {
    try {
        const roomremove = await Chatrealtime_Model.deleteOne({ Room: roomid });

        console.log(roomid);

        if (!roomremove) return "Can't remove room";

        return roomremove;
    } catch (err) {
        return err;
    }
};

const Getmessage = async() => {
    try {
        const getmeesage = Chatmessage_Model.find();

        if (!getmeesage) return "Can't get all message";

        return getmeesage;
    } catch (err) {
        return err;
    }
};



const Countroom = async() => {
    try {
        const count = await Chatrealtime_Model.countDocuments();

        return count;
    } catch (err) {
        return err;
    }
};

const Addmessage = async(client) => {
    try {
        console.log(client)
        const Message = new Chatmessage_Model({
            Room: client.Room,
            User: client.User,
            Message: client.Message,
        });

        await Message.save();

        if (!Message) return "Can't save message";

        return Message;
    } catch (err) {
        return err;
    }
};

const Updateroom = async(room) => {
    try {
        let offlineobj = {
            Style: { backgroundColor: "rgb(248, 8, 8)" },
            Status: "offline",
        };

        const Room = Chatrealtime_Model.updateOne({ Room: room }, offlineobj);

        if (!Room) return "Can't update room";

        return Room;
    } catch (err) {
        return err;
    }
};

module.exports = {
    Createchatroom,
    Getroom,
    Removemessage,
    Removeroom,
    Clearall,
    Getmessage,
    Countroom,
    Addmessage,
    Findroom,
    Updateroom,
};