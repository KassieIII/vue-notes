<template>
  <article class="about">
    <h2>About vue-notes</h2>
    <p>
      A small offline-first note taking app built with Vue 3, Pinia, IndexedDB
      (via <code>idb-keyval</code>) and Markdown rendering with sanitisation.
    </p>
    <ul>
      <li>Composable Pinia store with typed state</li>
      <li>Persistent storage in the browser, no backend required</li>
      <li>Live Markdown preview, sanitised with DOMPurify</li>
      <li>Tag parsing and full-text search</li>
    </ul>
  </article>
</template>

<style scoped>
.about {
  max-width: 720px;
  margin: 24px auto;
  padding: 0 20px;
  line-height: 1.6;
}
</style>
