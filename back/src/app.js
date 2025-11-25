import express from "express";
import cors from "cors";
import elencoRoutes from "./routes/elenco.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/status", (req, res) => {
  res.json({ ok: true, message: "Backend funcionando" });
});

// ✅ Registrar ruta del elenco
app.use("/api/elenco", elencoRoutes);

export default app;