import { Actor } from "../models/Actor.js";

export const obtenerElenco = async (req, res) => {
  try {
    const elenco = await Actor.find();
    res.json(elenco);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el elenco" });
  }
};
