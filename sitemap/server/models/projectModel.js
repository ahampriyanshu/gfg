const mongoose = require("mongoose"),
  projectSchema = new mongoose.Schema(
    {
      title: { type: String, unique: true },
      description: { type: String },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Project", projectSchema);
