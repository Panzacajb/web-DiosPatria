import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import { conectarDB } from "./src/config/db.js";

const PORT = process.env.PORT || 4000;

conectarDB(); // ✅ Conexión a MongoDB

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
