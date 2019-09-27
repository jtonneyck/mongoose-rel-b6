const mongoose = require("mongoose");

const Book = mongoose.model("book", {
    title: String,
    image_url: String,
    description: String,
    rating: Number,
    author: {type: mongoose.Types.ObjectId, ref: "author"} // the new part
    // authors: [{type: mongoose.Types.ObjectId, ref: "author"}] // if we would consider co-authorship
})

module.exports = Book