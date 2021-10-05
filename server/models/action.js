const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  description: String,
  createdAt: Date,
  updatedAt: Date,
  card_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card'
  }
})

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;

/*
{
  "_id": 49,
  "description": " added this card to My list",
  "createdAt": "2020-10-08T17:54:55.319Z",
  "updatedAt": "2020-10-08T17:54:55.319Z",
  "card_id": 9
}
*/