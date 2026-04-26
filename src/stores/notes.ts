import { defineStore } from "pinia";
import { ref, computed } from "vue";

import { type Note, newNote } from "../models/note";
import { loadNotes, saveNotes } from "../lib/storage";
import { matchesQuery } from "../lib/search";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref<Note[]>([]);
  const selectedId = ref<string | null>(null);
  const query = ref("");

  const filtered = computed(() => {
    const q = query.value;
    return [...notes.value]
      .filter((n) => matchesQuery(`${n.title} ${n.body} ${n.tags.join(" ")}`, q))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  });

  const selected = computed(() =>
    notes.value.find((n) => n.id === selectedId.value) ?? null
  );

  async function load() {
    notes.value = await loadNotes();
    if (!selectedId.value && notes.value.length > 0) {
      selectedId.value = notes.value[0].id;
    }
  }

  async function persist() {
    await saveNotes(notes.value);
  }

  async function create() {
    const n = newNote();
    notes.value.push(n);
    selectedId.value = n.id;
    await persist();
  }

  async function update(id: string, patch: Partial<Note>) {
    const idx = notes.value.findIndex((n) => n.id === id);
    if (idx < 0) return;
    notes.value[idx] = {
      ...notes.value[idx],
      ...patch,
      updatedAt: Date.now(),
    };
    await persist();
  }

  async function remove(id: string) {
    notes.value = notes.value.filter((n) => n.id !== id);
    if (selectedId.value === id) {
      selectedId.value = notes.value[0]?.id ?? null;
    }
    await persist();
  }

  function select(id: string) {
    selectedId.value = id;
  }

  return {
    notes,
    selected,
    selectedId,
    filtered,
    query,
    load,
    create,
    update,
    remove,
    select,
  };
});
