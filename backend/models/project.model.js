import mongoose from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },

  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const project = mongoose.model("project", projectSchema);

export default project;
