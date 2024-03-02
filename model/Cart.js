const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// ## virtual start
// virtual is which create a virtual form data example in the front end we had pulled all data with .id value but when we r storing data in the database (Mongodb backend) automatically ._id is formed to match that we create a virtual variable kind which return _id as id when u pull data from database but in the database _id remains same ..... in simple terms its like (alias name)

const virtual = cartSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
// #### virtual end
exports.Cart = mongoose.model("Cart", cartSchema);
