"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
const connection_1 = __importDefault(require("../db/connection"));

//getPersonas sirve para obtener todas las personas 
const getPersonas = (req, res) => {
    connection_1.default.query('SELECT * FROM persona', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};

//getPersonas sirve para obtener todas las personas 
exports.getPersonas = getPersonas;
const getPersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM persona WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
//getPersona sirve para obtener una persona
exports.getPersona = getPersona;
const deletePersona = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM persona WHERE id = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    });
};

//deletePersona sirve para eliminar una persona
exports.deletePersona = deletePersona;
const postPersona = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO persona set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona agregada con exito'
        });
    });
};

//putPersona sirve para actualizar una persona
exports.postPersona = postPersona;
const putPersona = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE persona set ? WHERE id = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: 'Persona actualizada con exito'
        });
    });
};
exports.putPersona = putPersona;
