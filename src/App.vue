<script setup lang="ts">
import { onMounted } from "vue";
import { useNotesStore } from "./stores/notes";
import AppShell from "./components/AppShell.vue";

const notes = useNotesStore();

onMounted(async () => {
  await notes.load();
});
</script>

<template>
  <AppShell />
</template>
