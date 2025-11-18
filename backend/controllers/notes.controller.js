import { change, create, get, getAll, remove } from "../services/notes.services.js"

export const createNote = async (req, res) => {
    try {
        const newNote = await create(req.body);
        return res.status(201).json(newNote);
    }
    catch (error) {
        return res.status(500).json({message: 'It was not possible save register'});
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await get(req.params.id);
        return res.status(200).json(note);
    }
    catch {
        return res.status(500).json({message: 'It was not possible get register'});
    }
}

export const editNote = async (req, res) => {
    try {
        const note = await change(req.body);
        return res.status(200).json(note);
    }
    catch {
        return res.status(500).json({message: 'It was not possible edit register'});
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await remove(req.params.id);
        return res.status(200).json(note);
    }
    catch {
        return res.status(500).json({message: 'It was not possible delete register'});
    }
}

export const getAllNotes = async (req, res) => {
    try {
        const notes = await getAll();
        return res.status(200).json(notes);
    }
    catch {
        return res.status(500).json({message: 'It was not possible get all register'});
    }
}