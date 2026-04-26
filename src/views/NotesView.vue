<script setup lang="ts">
import { useNotesStore } from "../stores/notes";
import NoteList from "../components/NoteList.vue";
import NoteEditor from "../components/NoteEditor.vue";

const notes = useNotesStore();
</script>

<template>
  <div class="layout">
    <aside>
      <div class="toolbar">
        <input
          v-model="notes.query"
          placeholder="Search…"
          aria-label="Search notes"
        />
        <button @click="notes.create()">+ New</button>
      </div>
      <NoteList />
    </aside>
    <section>
      <NoteEditor v-if="notes.selected" :note="notes.selected" />
      <div v-else class="empty">Select or create a note</div>
    </section>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  height: 100%;
}
aside {
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.toolbar {
  display: flex;
  gap: 6px;
  padding: 10px;
  border-bottom: 1px solid var(--border);
}
.toolbar input {
  flex: 1;
}
.empty {
  display: grid;
  place-items: center;
  height: 100%;
  color: var(--muted);
}
</style>
