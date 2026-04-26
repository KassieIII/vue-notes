import { get, set } from "idb-keyval";
import type { Note } from "../models/note";

const KEY = "vue-notes:v1";

export async function loadNotes(): Promise<Note[]> {
  const stored = await get<Note[]>(KEY);
  return stored ?? [];
}

export async function saveNotes(notes: Note[]): Promise<void> {
  await set(KEY, notes);
}
