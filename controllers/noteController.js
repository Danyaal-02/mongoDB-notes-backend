// controllers/noteController.js

import Note from '../models/noteModel.js';

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve a single note by ID
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a note by ID
export const updateNoteById = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    note.title = title;
    note.content = content;
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a note by ID
export const deleteNoteById = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
