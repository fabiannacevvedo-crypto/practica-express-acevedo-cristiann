import express from "express";
// import personajesRoutes from "./src/routes/personajes.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Personajes funcionando"
    });
});

// app.use("/personajes", personajesRoutes);

app.listen(PORT, () => {
    console.log(
        `Servidor corriendo en el puerto ${PORT} http://localhost:${PORT}`
    );;
});