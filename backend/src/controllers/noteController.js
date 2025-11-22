import Note from "../models/Note.js";

/* First way to export 

export const getAllNotes = (req, res) => {
  res.status(200).send("Successfully fetched"); 
};
*/

/* Another way to export

export function updateAllNotes(req, res) {
  
  res.status(201).json({ message: "Successfully updated" });  
}

*/

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in the getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function postAllNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json({ message: savedNote });
  } catch (error) {
    console.error("Error in the postAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateAllNotes(req, res) {

  try {
    const {title, content} = req.body
    await Note.findByIdAndUpdate(req.params.id,{title,content})
    res.status(201).json({message:"Successfully updated"})
  } catch (error) {

    console.error("Error in the updateAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
    
  }
}

export function deleteAllNotes(req, res) {
  res.status(201).json({ message: "Successfully deleted" });
}
