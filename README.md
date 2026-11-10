# WHO IS THAT? — RB Edition

Prototype website for the RB Boy Day mini-game.

## What this demo includes
- Player nickname entry
- 29 question slots with four choices each
- Admin panel to upload crop and reveal images, set answer choices and correct answer
- Timed answers and score calculation
- Leaderboard stored in the current browser

## Important limitation
This is a **single-browser prototype**. Questions, uploaded images, and results are stored in that browser's local storage. It does not synchronize players across devices, and the leaderboard is not shared. Supabase settings in the admin panel are placeholders only; no realtime backend is connected.

## Publish
GitHub Actions publishes the root `index.html` to GitHub Pages whenever changes are pushed to `main`.
