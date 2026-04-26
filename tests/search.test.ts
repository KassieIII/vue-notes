import { describe, it, expect } from "vitest";
import { parseTags, matchesQuery } from "../src/lib/search";

describe("parseTags", () => {
  it("splits on spaces and commas", () => {
    expect(parseTags("work, idea  vue")).toEqual(["work", "idea", "vue"]);
  });

  it("strips leading hashes and lowercases", () => {
    expect(parseTags("#Foo ##Bar")).toEqual(["foo", "bar"]);
  });

  it("filters empty and overly long tags", () => {
    expect(parseTags("  ,a,")).toEqual(["a"]);
    expect(parseTags("x".repeat(50))).toEqual([]);
  });
});

describe("matchesQuery", () => {
  it("matches case-insensitively", () => {
    expect(matchesQuery("Hello World", "world")).toBe(true);
  });
  it("returns true when query is blank", () => {
    expect(matchesQuery("anything", "   ")).toBe(true);
  });
  it("returns false when not found", () => {
    expect(matchesQuery("foo", "bar")).toBe(false);
  });
});
