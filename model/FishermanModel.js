const mongoose = require("mongoose");

const fishermanSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: Number, required: true, unique: true },
    role: { type: String, require: true, default: "fisherman" },
    email: { type: String, required: true, unique: true },
    approve: { type: Boolean, require: true, default: false },
    license: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fisherman", fishermanSchema);
