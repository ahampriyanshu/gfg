const mongoose = require("mongoose"),
  todoSchema = new mongoose.Schema(
    {
      title: { type: String, unique: true },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Todo", todoSchema);
