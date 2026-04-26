<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="shell">
    <header>
      <h1>vue-notes</h1>
      <nav>
        <RouterLink to="/">Notes</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  flex-direction: column;
  height: 100%;
}
header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
}
header h1 {
  font-size: 18px;
  margin: 0;
  color: var(--accent);
}
nav {
  display: flex;
  gap: 12px;
}
nav a {
  color: var(--muted);
  text-decoration: none;
}
nav a.router-link-active {
  color: var(--text);
}
main {
  flex: 1;
  min-height: 0;
}
</style>
