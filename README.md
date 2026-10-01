# CS 140 — a practice homework

Every homework in this course is laid out like this repository. This one has
nothing to solve: you change one line, and everything else is practice with the
tools. The lesson [*How a homework works*](https://wwcc.dev/#/lesson/how-a-homework-works)
walks you through it.

This repository is not graded and is not submitted.

## What is in it

| Path | What it is |
|---|---|
| `README.md` | This file. In a homework, it says what to do. |
| `src/` | The program. `src/about.js` is the one file you change. |
| `test/` | The tests. They check your work; you never change them. |
| `package.json` | Names the commands: `npm start` and `npm test`. |
| `.github/`, `.devcontainer/` | Settings for GitHub and for Codespaces. Leave them alone. |

## Getting started

1. Open **your repository** — private, made for you, its name ending with your
   username. The panel on the lesson page opens it: type your username, then
   **Open my Codespace**. On your own computer, clone it with GitHub Desktop
   (**Code**, then **Open with GitHub Desktop**).
2. In the terminal:

   ```sh
   npm start
   npm test
   ```

   One test passes and one fails. That is the starting point.

## Your task

Put your name in `src/about.js`, save it, and run `npm test` until both tests
pass. Then commit and push. The check next to your latest commit on GitHub
turns green.
