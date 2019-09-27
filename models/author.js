const mongoose = require("mongoose");

const Author = mongoose.model("author", {
    firstName: String,
    lastName: String,
    image_url: String,
    nationality: String,
    birthday: String
})

module.exports = Author