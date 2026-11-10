# WHO IS THAT? — RB Edition

A cinematic, self-paced RB team guessing game. There is **no MC control flow**: each player enters a nickname and starts their own 29-question run whenever they are ready.

## Current website
- Cinematic intro and question/reveal screens
- 29 questions, four answer choices each
- 15-second timer per question
- Automatic answer lock, reveal, and transition after five seconds
- Speed-based scoring and a results screen
- Admin panel to prepare the question pack
- Backward-compatible migration from the earlier local demo

## Current limitations
- The question pack and uploaded photos are still stored in the browser used by the admin. They are **not yet shared automatically** with every visitor. The finished question pack must be published with the website before all players can see the same photos and answer choices.
- The leaderboard is local until Supabase is configured. The website already has optional Supabase leaderboard support.
- The Supabase leaderboard is designed for a casual team game. Client-submitted scores are not tamper-proof.

## Enable a shared leaderboard
1. Create a free Supabase project.
2. Open **SQL Editor** in Supabase and run the contents of `supabase-schema.sql`.
3. Open **Project Settings → API** and copy the Project URL and the public anon key (never send a service-role key).
4. Put those two public values into `backend-config.js`:
   - `supabaseUrl`
   - `supabaseAnonKey`
5. Commit the updated file to the `main` branch. GitHub Pages deploys automatically.

The SQL creates `public.rb_game_results` with public read and insert policies for the leaderboard.

## Publish
GitHub Actions validates the inline JavaScript and publishes the root site to GitHub Pages on every push to `main`.
