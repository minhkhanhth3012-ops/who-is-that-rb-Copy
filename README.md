# WHO IS THAT? — RB Men's Day 11/11

A cinematic, self-paced guessing game for 27 RB colleagues. There is no MC and no shared start time: each player enters a nickname and begins their own 27-question run.

## Player experience
- Intro preface: **RB MEN'S DAY 11/11 — IDOL RB LÀ AI?**
- 27 cropped-photo clues, one for each person in the roster
- 8 seconds to answer each question
- After an answer or timeout, a large cinematic reveal displays the corresponding original photo, correct name, unit, and optional Idol role
- Reveal remains for five seconds, then the next clue starts automatically
- Speed-based scoring: 100 / 90 / 75 / 60 for correct answers according to response time
- Scores are submitted to Supabase and the public Top 3 board updates via Realtime

## The 27-person roster
The order in `question-pack.js` follows the supplied STT list exactly. Each entry stores:
- `person`: correct identity for that question
- `department`: unit / business group
- `role`: optional Idol role; may remain blank
- `crop`: cropped clue path
- `original`: original photo path

The game automatically builds four options per question: the correct person's name plus three randomly selected distractors from the other 26 people. The choices are shuffled each time a player starts a question.

## The 54-photo set
Upload 54 image files directly into the `assets/` folder:
- `assets/q01_crop.jpg` through `assets/q27_crop.jpg`
- `assets/q01_original.jpg` through `assets/q27_original.jpg`

The crop is the clue; the original is shown in the large reveal after the player answers or the timer expires. Keep the filenames exactly as shown, or update the paths in `question-pack.js` if using different extensions.

Everyone visiting the website loads the same published images and roster from GitHub Pages. There is no need to upload images through the Admin screen.

## Editing content yourself
- Intro text, subtitles, labels, UI copy, timer and design: `index.html`
- Names, units, photo paths and Idol roles: `question-pack.js`
- Photos: upload them to `assets/`

After editing `question-pack.js`, increment `RB_QUESTION_PACK_VERSION` so browsers refresh their cached roster. GitHub Actions deploys automatically after each commit.

## Shared leaderboard
The site uses the configured Supabase project. The database stores results; the homepage shows the public Top 3, and Hall of Fame shows the full leaderboard. Supabase Realtime listens for new result inserts, with a 15-second polling fallback.

The database schema and migration are in `supabase-schema.sql`. The game now has a maximum of 2,700 points, 27 correct answers, and 216 answer-seconds. The earlier 29-question database limits are looser and do not block the new 27-question results; run the updated schema only if you also want to tighten the database constraints to exactly 27 questions.

## Privacy
This repository and GitHub Pages site are public. Any published colleague photos are accessible to visitors to the website. Obtain colleagues' agreement before publishing their photos.

## Deployment
GitHub Actions validates the JavaScript and deploys the site to GitHub Pages whenever changes are pushed to `main`.
