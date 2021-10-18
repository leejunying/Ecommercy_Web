const mongoose = require("mongoose");

const { Schema } = mongoose;

const Chatrealtime_Model = new Schema({

    create_date: {
        type: Date,
        default: Date.now,
    },

    Room: {
        type: String,
        require: true

    },
    Participant: {
        type: Array,
        require: true,
    },
    Style: {
        type: Object,
        require: true,

    },
    Status: {
        type: String,
        require: true,
    }


}, { collection: "Chatrealtime" });

module.exports = mongoose.model("Chatrealtime", Chatrealtime_Model);