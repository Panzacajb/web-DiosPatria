import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true }
});

export const Actor = mongoose.model("Actor", actorSchema);
