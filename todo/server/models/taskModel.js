const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  taskSchema = new mongoose.Schema(
    {
      title: { type: String, required: true, unique: true, lowercase: true },
    },
    { timestamps: true }
  );
taskSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Task", taskSchema);
