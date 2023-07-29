const mongoose = require('mongoose')

// describe mongo model with mongoose
const productShema = mongoose.Schema(
  {
    name: {
      type: 'string',
      require: [true, 'Please enter a product name']
    },
    size: {
      type: Number,
      required: true,
      default: 0
    },
    image: {
      type: 'string',
      require: false
    }
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productShema)

module.exports = Product
