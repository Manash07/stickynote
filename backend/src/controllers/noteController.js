export const getAllNotes = (req, res) => {
  res.status(200).send("Successfully fetched"); // First way to export 
};

export const postAllNotes = (req, res) => {
  res.status(201).json({ message: "Successfully uploaded" });
}


export function updateAllNotes (req, res) {
  res.status(201).json({ message: "Successfully updated" }); // Another way to export
}

export function deleteAllNotes (req, res) {
  res.status(201).json({ message: "Successfully deleted" });
}