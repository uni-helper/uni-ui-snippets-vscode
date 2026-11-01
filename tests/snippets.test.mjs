// Guards the shape and cross-file consistency of the snippet file. A broken
// snippet reaches users as invalid inserted code, so it is checked here rather
// than by hand.
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { loadSnippets } from "./helpers.mjs";

const snippets = loadSnippets();
const root = path.resolve(import.meta.dirname, "..");

/** `contributes.snippets` from package.json. */
const contributes = JSON.parse(
  readFileSync(path.join(root, "package.json"), "utf8")
).contributes.snippets;

const DESCRIPTION_PATTERN = /^.+。更多信息查看 <https:\/\/[^>]+>。$/u;

test("every snippet file is served to its languages", () => {
  const files = readdirSync(path.join(root, "snippets")).filter((name) =>
    name.endsWith(".json")
  );
  const served = new Set(
    contributes.map(({ path: snippetPath }) => path.basename(snippetPath))
  );
  assert.deepEqual(
    [...served].sort(),
    files.sort(),
    "snippets/ and contributes.snippets disagree"
  );
  for (const { path: snippetPath } of contributes) {
    assert.ok(
      snippetPath.startsWith("./snippets/"),
      `${snippetPath} is outside snippets/`
    );
  }
});

test("every snippet has a prefix, a body and a doc-linked description", () => {
  for (const { name, entries } of snippets) {
    for (const [key, snippet] of Object.entries(entries)) {
      const where = `${name}: ${key}`;
      assert.ok(
        Array.isArray(snippet.prefix),
        `${where} - prefix is not an array`
      );
      assert.ok(snippet.prefix.length > 0, `${where} - prefix is empty`);
      for (const prefix of snippet.prefix) {
        assert.ok(prefix.length > 0, `${where} - prefix entry is empty`);
      }
      assert.ok(Array.isArray(snippet.body), `${where} - body is not an array`);
      assert.ok(snippet.body.length > 0, `${where} - body is empty`);
      for (const line of snippet.body) {
        assert.equal(
          typeof line,
          "string",
          `${where} - body line is not a string`
        );
      }
      assert.match(
        snippet.description,
        DESCRIPTION_PATTERN,
        `${where} - description does not end with a doc link`
      );
    }
  }
});

test("no two snippets in a file claim the same prefix", () => {
  for (const { name, entries } of snippets) {
    const owners = new Map();
    for (const [key, snippet] of Object.entries(entries)) {
      for (const prefix of snippet.prefix) {
        const owner = owners.get(prefix);
        assert.equal(
          owner,
          undefined,
          `${name}: prefix ${prefix} is used by both ${owner} and ${key}`
        );
        owners.set(prefix, key);
      }
    }
  }
});

test("no two snippets in a file insert the same code", () => {
  for (const { name, entries } of snippets) {
    const owners = new Map();
    for (const [key, snippet] of Object.entries(entries)) {
      const body = JSON.stringify(snippet.body);
      const owner = owners.get(body);
      assert.equal(
        owner,
        undefined,
        `${name}: ${owner} and ${key} share a body`
      );
      owners.set(body, key);
    }
  }
});
