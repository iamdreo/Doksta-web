'use strict';
var mongoose = require('mongoose');
var uuid = require('uuidv4');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  id: {
    type: Number,
    default: function genUUID() {
      uuid();
    }
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the Product'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the Product'
  },
  price: {
    type: Number,
    required: 'Kindly enter the price of the Product'
  },
  category: {
    type: String,
    required: 'Kindly enter the product category'
  },
  imageUrl: {
    type: String,
    required: 'Kindly enter the url of the Product'
  },
  color: {
    type: String,
    required: 'Kindly enter the color of the Product'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ['pending', 'approved']
      }
    ],
    default: ['pending']
  }
});

module.exports = mongoose.model('products', ProductSchema);
