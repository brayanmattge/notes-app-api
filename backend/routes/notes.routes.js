import { Router } from "express";
import { createNote, getNote, editNote, deleteNote, getAllNotes } from "../controllers/notes.controller.js";

const router = Router();

router.post("/notes", createNote);

router.get("/notes", getAllNotes);
router.get("/notes/:id", getNote);

router.put("/notes/:id", editNote); 
router.delete("/notes/:id", deleteNote);


export default router;