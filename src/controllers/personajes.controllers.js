import { personajes } from "../data/personajes.js";

// GET TODOS
export const obtenerPersonajes = (req, res) => {
    res.status(200).json(personajes);
};

// GET POR ID
export const obtenerPersonajePorId = (req, res) => {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser numérico"
        });
    }

    const personaje = personajes.find(p => p.id === id);

    if (!personaje) {
        return res.status(404).json({
            error: "Personaje no encontrado"
        });
    }

    res.status(200).json(personaje);
};

// POST
export const crearPersonaje = (req, res) => {

    const { nombre, imagen } = req.body;

    if (!nombre || !imagen) {
        return res.status(400).json({
            error: "Nombre e imagen son obligatorios"
        });
    }

    const nuevoPersonaje = {
        id: personajes[personajes.length - 1].id + 1,
        nombre,
        imagen
    };

    personajes.push(nuevoPersonaje);

    res.status(201).json(nuevoPersonaje);
};

// PUT
export const actualizarPersonaje = (req, res) => {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser numérico"
        });
    }

    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: "Debe enviar datos para actualizar"
        });
    }

    const personaje = personajes.find(p => p.id === id);

    if (!personaje) {
        return res.status(404).json({
            error: "Personaje no encontrado"
        });
    }

    for (const campo in req.body) {

        if (req.body[campo] === "") {
            return res.status(400).json({
                error: `${campo} no puede estar vacío`
            });
        }

        personaje[campo] = req.body[campo];
    }

    res.status(200).json(personaje);
};

// DELETE
export const eliminarPersonaje = (req, res) => {

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser numérico"
        });
    }

    const indice = personajes.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Personaje no encontrado"
        });
    }

    personajes.splice(indice, 1);

    res.status(200).json({
        mensaje: "Personaje eliminado correctamente"
    });
};