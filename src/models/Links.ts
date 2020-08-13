import { model, Schema } from "mongoose";

export default model(
  "Links",
  new Schema({
    id: String,
    redirectURL: String,
    date: Date,
  })
);
