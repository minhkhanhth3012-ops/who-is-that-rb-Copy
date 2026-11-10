# WHO IS THAT? — RB Men's Day 11/11

A cinematic, self-paced guessing game for RB colleagues. There is no MC and no shared start time: each player enters a nickname and begins their own 29-question run.

## Player experience
- Intro preface: **RB MEN'S DAY 11/11 — IDOL RB LÀ AI?**
- 29 cropped-photo clues, one per question
- 15 seconds to answer each question
- After an answer or timeout, a large cinematic reveal displays the corresponding original photo, the correct name, and the person's assigned Idol role
- Reveal remains for five seconds, then the next clue starts automatically
- Speed-based scoring and a final results screen

## The 58-photo set
Each character requires two separate images:
- `assets/q01_crop.jpg` — the cropped clue
- `assets/q01_original.jpg` — the full/original photo shown after the answer

Continue with `q02` through `q29` (58 images total). Keep the filenames exactly as shown. The published question data and photo assets are loaded from the site, so every visitor receives the same questions and images.

The easiest handoff is one ZIP containing all 58 images, named using the pattern above. Upload the ZIP to the project maintainer; the images will be added to `assets/` and the shared question pack will be updated.

## Idol role / persona
Every question has an `role` field. Example values:
- Idol tận tâm
- Idol nụ cười
- Idol chốt deal
- Idol năng lượng
- Idol deadline warrior

The role appears with the full photo reveal. The admin editor also has a per-person field for assigning the role.

## Question data
`question-pack.js` is the published 29-question pack. For each person, it stores:
- `crop`: path to the cropped photo
- `original`: path to the original photo
- `choices`: the four name options
- `correct`: index of the correct option (0–3)
- `role`: the person's Idol role

When the pack is updated, increment `RB_QUESTION_PACK_VERSION`. The browser will then refresh its locally cached pack on the next visit.

## Shared leaderboard
The website includes optional Supabase support:
1. Create a Supabase project.
2. Run `supabase-schema.sql` in Supabase SQL Editor.
3. Copy the Project URL and public anon key from Project Settings → API into `backend-config.js`.
4. Commit the file. GitHub Pages will deploy it automatically.

Until Supabase is configured, scores remain local to the browser. Supabase client-submitted scores are suitable for a casual office game, not tamper-proof prize adjudication.

## Public-photo note
This repository and GitHub Pages site are public. Any uploaded colleague photos will be accessible to anyone who has or discovers the website URL. Obtain the colleagues' agreement before publishing their photos.

## Deployment
GitHub Actions validates the JavaScript and deploys the site to GitHub Pages whenever changes are pushed to `main`.
