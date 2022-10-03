const mongoose = require('mongoose');




const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // referencing a model
  photoUrl: String,
  title: String,
  ingredients: String,
  directions: String
})


module.exports = mongoose.model('Post', postSchema);