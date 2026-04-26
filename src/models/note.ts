export interface Note {
  id: string;
  title: string;
  body: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}

export function newNote(): Note {
  const now = Date.now();
  return {
    id: crypto.randomUUID(),
    title: "Untitled",
    body: "",
    tags: [],
    createdAt: now,
    updatedAt: now,
  };
}
