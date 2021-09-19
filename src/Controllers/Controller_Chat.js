const Chatrealtime_Model=require("../Models/Chatrealtime")
const Chatmessage_Model=require("../Models/Chatmessage")


const Createchatroom=async(roomid,participant)=>{


    

    const newroom = new Chatrealtime_Model({Room:roomid,Participant:participant})
    await newroom.save()
    
    console.log(newroom)

    return newroom

}

const Getroom=async()=>{


 
    let date= new Date

    let day=date.getUTCDate()
    let month=date.getUTCMonth() + 1
    let year=date.getUTCFullYear()
    

    const getroom = Chatrealtime_Model.find()

    return getroom

}

const Removeroom=async(roomid)=>{


    const roomremove = Chatrealtime_Model.deleteOne({ Room: roomid })

    return roomremove



}

const Removemessage=async(roomid)=>{

    const messremove = Chatmessage_Model.deleteMany({ Room: roomid })


    console.log(messremove)

    return messremove

}

const Getmessage=async()=>{

     

  
    const getmeesage = Chatmessage_Model.find()

    return getmeesage


}




const Countroom=async()=>{


    const count = await Chatrealtime_Model.countDocuments()
    return count

}


const Addmessage=async(client)=>{


    const Message =  new  Chatmessage_Model({Room:client.Room,User:client.User,Message:client.Message})
    
    await Message.save()

    return Message

}



 
module.exports = {
    Createchatroom,
    Getroom,
    Removeroom,
    Removemessage,
    Getmessage,
    Countroom,
    Addmessage,

    
    
  };
  