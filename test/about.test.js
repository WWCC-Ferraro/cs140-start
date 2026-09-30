// The tests. `npm test` runs every file in this folder, and GitHub runs the
// same command each time you push. You never need to change a test.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { name } from '../src/about.js';

test('the program runs', () => {
  const run = spawnSync(process.execPath, ['src/welcome.js'], { encoding: 'utf8' });
  assert.equal(run.status, 0, `npm start stopped with an error:\n${run.stderr}`);
});

test('your name is filled in', () => {
  assert.notEqual(name.trim(), '',
    'The name in src/about.js is still empty. Type your name between the quote marks, save the file, and run npm test again.');
});
