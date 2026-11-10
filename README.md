# WHO IS THAT? — RB Men's Day 11/11

A cinematic, self-paced guessing game for 28 RB colleagues. There is no MC and no shared start time: each player enters a nickname and begins their own 28-question run.

## Player experience
- Intro preface: **RB MEN'S DAY 11/11 — IDOL RB LÀ AI?**
- 28 cropped-photo clues, one for each person in the roster
- 8 seconds to answer each question
- After an answer or timeout, a large cinematic reveal displays the corresponding original photo, correct name, unit, and Idol role/tagline
- Reveal remains for five seconds, then the next clue starts automatically
- Speed-based scoring: 100 / 90 / 75 / 60 for correct answers according to response time
- Scores are submitted to Supabase and the public Top 3 board updates via Realtime

## The 28-person roster
The order in `question-pack.js` follows the latest table you supplied. Each entry stores:
- `person`: correct identity for that question
- `department`: unit / business group
- `question`: editable question heading for that particular character
- `role`: Idol name and tagline, displayed on the reveal screen
- `crop` and `original`: photo paths assigned using the q-code in the last column of your table

The game automatically builds four options per question: the correct person's name plus three randomly selected distractors from the other 27 people. The choices are shuffled each time a player starts a question.

## The 56-photo set
Upload 56 JPG files directly into the `assets/` folder:
- `assets/q01_crop.jpg` through `assets/q28_crop.jpg`
- `assets/q01_original.jpg` through `assets/q28_original.jpg`

Important: photo codes follow the q-code in your table, not the roster STT. For example, Anh Chiến uses q07, Tiến uses q02, and Anh Trí uses q01. Each code needs both its crop and original image.

## Editing content yourself
- Intro text, UI copy, timer and design: `index.html`
- Names, units, per-character question, Idol role/tagline and photo mapping: `question-pack.js`
- Photos: upload them to `assets/`

After editing `question-pack.js`, increment `RB_QUESTION_PACK_VERSION` so browsers refresh their cached roster. GitHub Actions deploys automatically after each commit.

## Shared leaderboard
The site uses the configured Supabase project. The database stores results; the homepage shows the public Top 3, and Hall of Fame shows the full leaderboard. Supabase Realtime listens for new result inserts, with a 15-second polling fallback.

The database schema and migration are in `supabase-schema.sql`. The 28-question game has a maximum of 2,800 points, 28 correct answers, and 224 answer-seconds. **Run the updated SQL in Supabase SQL Editor** to expand the existing database constraints from the previous 27-question version; otherwise a perfect 28/28 result may fail to submit to the shared leaderboard.

Older results remain in the database and were recorded under the previous 27-question format, so they are not directly comparable with the new maximum score.

## Privacy
This repository and GitHub Pages site are public. Any published colleague photos are accessible to visitors to the website. Obtain colleagues' agreement before publishing their photos.

## Deployment
GitHub Actions validates the JavaScript and deploys the site to GitHub Pages whenever changes are pushed to `main`.
