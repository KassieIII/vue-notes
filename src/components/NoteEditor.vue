<script setup lang="ts">
import { computed, ref, watch } from "vue";

import type { Note } from "../models/note";
import { useNotesStore } from "../stores/notes";
import { renderMarkdown } from "../lib/markdown";
import { parseTags } from "../lib/search";

const props = defineProps<{ note: Note }>();
const notes = useNotesStore();

const title = ref(props.note.title);
const body = ref(props.note.body);
const tagsInput = ref(props.note.tags.join(" "));

watch(
  () => props.note.id,
  () => {
    title.value = props.note.title;
    body.value = props.note.body;
    tagsInput.value = props.note.tags.join(" ");
  }
);

const html = computed(() => renderMarkdown(body.value));

let timer: ReturnType<typeof setTimeout> | null = null;
function debounceSave() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    notes.update(props.note.id, {
      title: title.value,
      body: body.value,
      tags: parseTags(tagsInput.value),
    });
  }, 300);
}

watch([title, body, tagsInput], debounceSave);
</script>

<template>
  <div class="editor">
    <header>
      <input v-model="title" placeholder="Title" />
      <input v-model="tagsInput" placeholder="tags (#work #idea)" />
      <button class="danger" @click="notes.remove(note.id)">Delete</button>
    </header>
    <div class="panes">
      <textarea v-model="body" placeholder="Write Markdown…" />
      <article class="preview" v-html="html" />
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  height: 100%;
}
header {
  display: flex;
  gap: 8px;
  padding: 10px;
  border-bottom: 1px solid var(--border);
}
header input {
  flex: 1;
}
.panes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  min-height: 0;
}
textarea {
  border: none;
  border-radius: 0;
  resize: none;
  padding: 16px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 14px;
  line-height: 1.5;
}
.preview {
  padding: 16px;
  overflow-y: auto;
  border-left: 1px solid var(--border);
  background: var(--panel);
}
.danger {
  border-color: #f87171;
  color: #f87171;
}
</style>
