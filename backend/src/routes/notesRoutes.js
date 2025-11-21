import express from "express";
import {getAllNotes, postAllNotes, updateAllNotes, deleteAllNotes} from "../controllers/noteController.js"

const router = express.Router();


router.get("/",getAllNotes);

router.post("/", postAllNotes);

router.put("/:id", updateAllNotes );

router.delete("/:id", deleteAllNotes);

export default router;