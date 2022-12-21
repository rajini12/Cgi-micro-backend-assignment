import mongoose from "mongoose";
const { model, Schema } = mongoose;

const gallerySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: { 
        type: Array, 
        required: true
     },
    likes: {
         type: Number, 
         default: 0 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
  },

  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

module.exports = model("category", gallerySchema);
