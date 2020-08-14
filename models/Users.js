const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        // product: [
        //     {
        //         category: {
        //             type: String,
        //             default: "a",
        //           },
        //           productName: {
        //             type: String,
        //             default: "a",
        //           },
        //           title: {
        //             type: String,
        //             default: "a",
        //           },
        //           // url string for thumbnail image
        //           thumbnail: {
        //             type: String,
        //             default: "a",
        //           },
        //           // url for Product web page - unique index
        //           href: {
        //             type: String,
        //             default: "a",
        //           },
        //           summary: {
        //             type: String,
        //             default: "a",
        //           },
        //     },
        // ] ,
    },
    // { strict: false }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;