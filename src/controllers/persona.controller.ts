import { Request, Response } from 'express';
import connection from '../db/connection';

//getPersonas -> Obtener todas las personas de la base de datos
export const getPersonas = (req: Request, res: Response) => {

    connection.query('SELECT * FROM persona', (err, data) => {
        if (err) throw err;
        res.json(data)

    })
}
//getPersona -> Obtener una persona por el id de la base de datos
export const getPersona = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('SELECT * FROM persona WHERE id = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data[0])
    })

}

//deletePersona -> Eliminar una persona por el id de la base de datos
export const deletePersona = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('DELETE FROM persona WHERE id = ?', id, (err, data) => {
        if (err) throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        })
    })
}

//postPersona -> Agregar una persona a la base de datos 
export const postPersona = (req: Request, res: Response) => {

    const { body } = req;

    connection.query('INSERT INTO persona set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: 'Persona agregada con exito'
        })
    })
}
//putPersona -> Actualizar una persona por el id de la base de datos
export const putPersona = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE persona set ? WHERE id = ?', [body, id], (err, data) => {
        if (err) throw err;

        res.json({
            msg: 'Persona actualizada con exito'
        })
    })
}