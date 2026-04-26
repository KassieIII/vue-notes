<script setup lang="ts">
import { useNotesStore } from "../stores/notes";

const notes = useNotesStore();

function preview(body: string) {
  const trimmed = body.trim();
  if (!trimmed) return "Empty note";
  return trimmed.length > 80 ? `${trimmed.slice(0, 80)}…` : trimmed;
}
</script>

<template>
  <ul class="list">
    <li
      v-for="note in notes.filtered"
      :key="note.id"
      :class="{ active: note.id === notes.selectedId }"
      @click="notes.select(note.id)"
    >
      <div class="title">{{ note.title || "Untitled" }}</div>
      <div class="snippet">{{ preview(note.body) }}</div>
      <div class="tags" v-if="note.tags.length">
        <span v-for="t in note.tags" :key="t">#{{ t }}</span>
      </div>
    </li>
    <li v-if="!notes.filtered.length" class="empty">No notes</li>
  </ul>
</template>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex: 1;
}
.list li {
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
}
.list li.active {
  background: var(--panel);
  border-left: 3px solid var(--accent);
}
.title {
  font-weight: 600;
}
.snippet {
  color: var(--muted);
  font-size: 13px;
  margin-top: 4px;
}
.tags {
  margin-top: 6px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tags span {
  font-size: 11px;
  color: var(--accent);
}
.empty {
  color: var(--muted);
  text-align: center;
  padding: 20px;
}
</style>
