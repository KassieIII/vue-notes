export function parseTags(input: string): string[] {
  return input
    .split(/[\s,]+/)
    .map((t) => t.trim().toLowerCase().replace(/^#+/, ""))
    .filter((t) => t.length > 0 && t.length <= 32);
}

export function matchesQuery(text: string, query: string): boolean {
  if (!query.trim()) return true;
  return text.toLowerCase().includes(query.trim().toLowerCase());
}
