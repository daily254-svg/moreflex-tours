# MoreFlex Travel

Explore Beyond the Journey. A MoreFlex Aviation company.

Homepage MVP for the MoreFlex Travel platform — a premium East African travel
concierge built on the credibility of MoreFlex Aviation, differentiated from
catalogue-style safari sites by a Journey Designer trip planner instead of
static package listings.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Pages

- `/` — homepage: hero, "What kind of adventure" discovery cards, destination
  highlights, aviation cross-sell, trust/testimonials, instant quote CTA.
- `/trip-planner` — the Journey Designer: a short questionnaire (who you're
  traveling with, budget, interests, month) that recommends a matching
  itinerary.
- `/destinations` and `/destinations/maasai-mara` — destination guides, with
  Maasai Mara built out as the full "experience page" template (wildlife
  calendar, suggested itinerary, gallery).
- `/experiences`, `/aviation-services`, `/travel-resources`, `/about`,
  `/contact` — remaining site map sections, scaffolded per the brand
  strategy's information architecture.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in the
terminal).

## Known issue: `npm run build`

`next build` currently fails in some sandboxed environments during static
page generation with `TypeError: Cannot read properties of null (reading
'useContext')`. This was root-caused to the build/runtime environment, not
the application code — it reproduces identically on a completely vanilla,
unmodified `create-next-app` scaffold with zero custom code, across Next.js
14/15/16, React 18/19, and Node 20/22, with and without Tailwind and
`next/font`. `npm run dev` works correctly and serves every route with a 200
response. Verify `npm run build` on a normal deployment target (e.g. a
Vercel preview) before treating it as a real regression.
