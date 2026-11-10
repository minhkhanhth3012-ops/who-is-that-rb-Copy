# WHO IS THAT? — RB Men's Day 11/11

A cinematic, self-paced guessing game for 28 RB colleagues. There is no MC and no shared start time: each player enters a nickname and begins their own 28-question run.

## Player experience
- Intro preface: **RB MEN'S DAY 11/11 — IDOL RB LÀ AI?**
- 28 cropped-photo clues, one for each person in the roster
- 10 seconds to answer each question
- After an answer or timeout, a large cinematic reveal displays the corresponding original photo, correct name, unit, and Idol role/tagline
- Reveal remains for five seconds, then the next clue starts automatically
- Speed-based scoring: 100 / 90 / 75 / 60 (thresholds: 2.5 / 5 / 7.5 / 10 seconds) for correct answers according to response time
- Scores are submitted to Supabase and the public Top 3 board updates via Realtime

## The 28-person roster
The order in `question-pack.js` follows the latest table you supplied. Each entry stores:
- `person`: correct identity for that question
- `department`: unit / business group
- `question`: the full hint text from column 3, shown as the question prompt
- `role`: Idol title, combined with the person's name in each answer choice and shown on the reveal screen
- `crop` and `original`: photo paths assigned using the q-code in the last column of your table

The game builds four options per question in the format `Person name - abbreviated department`: it prioritizes people from the same department, and mixes in other departments only when that department has fewer than four people. The reveal screen displays the full department name. The choices are shuffled each time a player starts a question.

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

The database schema and migration are in `supabase-schema.sql`. The 28-question game has a maximum of 2,800 points, 28 correct answers, and 280 answer-seconds. **Run the updated SQL in Supabase SQL Editor** to expand the existing database constraints from the previous 27-question version; otherwise a perfect 28/28 result may fail to submit to the shared leaderboard.

Older results remain in the database and were recorded under the previous 27-question format, so they are not directly comparable with the new maximum score.

## Privacy
This repository and GitHub Pages site are public. Any published colleague photos are accessible to visitors to the website. Obtain colleagues' agreement before publishing their photos.

## Deployment
GitHub Actions validates the JavaScript and deploys the site to GitHub Pages whenever changes are pushed to `main`.


The public Control Room has been removed. After completing all questions, each player sees an All 28 Idols gallery below the score and leaderboard, showing original photo, name, and Idol title. Each answer round allows five seconds; the five-second reveal transition remains after each answer.


Department labels: TTAH = Trung tâm Am hiểu khách hàng và Giải pháp phân khúc KHCN; SPT&DVTTT = Sản phẩm thẻ và Dịch vụ thanh toán thẻ; QLBH = Quản lý bán hàng; Banca = Banca; Ban GDK = Ban Giám đốc khối. Answer options use short codes; the reveal uses full names. The answer timer is 10 seconds, with five-second reveal.
