# Changes made, and what is still open

This rebuild applies *CMDR website: suggested changes* (review of
incidentcmdr.com as of 16 September 2026, cross-checked against the BCH and
CMDR Vision proposal). The guiding decision from that review:

> Make the site say, in the first sentence, that CMDR is incident response for
> hospital IT, and orient it against the systems hospitals already run
> (ServiceNow, Jira Service Management) rather than against startup tooling.

## Sources

- *CMDR website: suggested changes* (the review document).
- *BCH - CMDR Vision* (the deck). Phase structure, phase values, the three
  success measures, the Founding Hospital Partner term and the HIPAA wording
  all come from here.

**Deck pricing is deliberately not on the site.** The deck's only hard figures
are the Founding Hospital Partner payment schedule and the three-year total.
That is confidential commercial pricing, and the deck itself notes the rate is
locked for the initial term with standard list pricing at renewal. Publishing
it would disclose contract terms and undercut future negotiation. Nothing in
`*.html` contains a figure from that schedule, and the validation script in
this repo fails the build if one appears.

**The deck contains no outcome or savings figures.** Its value statements are
qualitative ("establish KPIs where none exist today", "avoid major incidents").
The savings section on `healthcare.html` therefore describes the mechanism and
uses the deck's own line - *"getting ahead of even one significant outage a
year more than justifies the investment"* - rather than a number. To quantify
it you need the Phase 2 KPIs and the BCH baseline.

## Build context

Two sources were unavailable when this was written:

1. **The repository was empty** — no commits, no branches. There was no
   existing site source to edit, so the pages here are a fresh static build
   rather than a diff against the live Webflow site.
2. **`incidentcmdr.com` was unreachable** from the build environment (blocked
   by network egress policy), so live copy could not be scraped. Everything
   here is reconstructed from the review document, which quotes the current
   site section by section. Where the review said existing copy "is fine"
   without quoting it, that copy is **flagged below as needing to be pasted
   back in** rather than invented.

## Site structure

Navigation, per §6 of the review — the Product / Solutions split:

| Page | Purpose |
| --- | --- |
| `index.html` | Home |
| `features.html` | Product detail, including the new *Built for healthcare* and *Value that compounds* sections |
| `integrations.html` | Detection sources and response tools |
| `healthcare.html` | The single Solutions page: *CMDR for hospitals* |
| `about.html` | Team and *Why we built this* |
| `contact.html` | Demo request — the one destination for every demo CTA |
| `privacy.html`, `terms.html` | Footer legal links. **Placeholder text only.** |

Product is a flat pair of links (Features, Integrations) rather than a
dropdown; with five top-level destinations a dropdown adds a failure mode for
no gain. Rework it if the page count grows.

## What changed, by section

### Home (§2)

- **Hero.** Terminal animation, *"Harness the efficiency of CMDR"* and both
  self-install buttons removed. Replaced with one sentence on what CMDR is and
  who it is for, naming the Jira / SolarWinds / TalkDesk / Teams / Outlook
  stack, and a single *Schedule a demo* button.
- **Problem and proof band.** New, directly under the hero. No figures — the
  proposal contains none, so the copy uses only statements it supports.
- **Partners / trust.** Markup written and **commented out**, pending the
  confirmation in the open items below.
- **Benefits.** Still four items, now concrete and hospital-specific.
  *Alleviate Team Burnout* folded into item 1 as "fewer 3am escalations"; the
  integration point dropped, since the hero already names the systems.
- **Get started.** "Affordable" removed — it undercut an enterprise purchase
  and invited comparison with $15-per-seat tools. Install buttons removed.
- **Screenshots.** Five blocks cut to the two most persuasive (incident
  channel, generated report); the rest live on Features. The software-
  engineering phrase about bus numbers is now "so the response does not depend
  on the one person who remembers last time".
- **FAQ.** *What makes CMDR different* rewritten around measurement accuracy,
  process standardisation and incident prevention, positioned against
  ServiceNow and Jira Service Management. Added *Who is CMDR for?* and *Is CMDR
  HIPAA compliant?* (proposal wording, verbatim). Integration and training
  answers now name the hospital systems and use the Phase 4 value.
- **Contact form.** The engineering-toolkit line is gone; Organisation and Role
  added so you can see whether a CIO or an engineer is writing.
- **Footer.** "about" capitalised; legal links kept visually smaller than
  Product.

### Features (§3)

Kept to the product: workflow automation, learning & RCA, resolution insights.
Detail now matches the deck's architecture — Jira categorisation and
assignment, Teams engagement of the IT duty officer and team on-calls, the
Outlook automated alert email, real-time call-recording ingestion, automated
RCA ticket opening.

The *Built for healthcare* content and the engagement phases live on
`healthcare.html` instead of being repeated here. §6 of the review treats
these as alternatives ("the 'Built for healthcare' content, **or** a single
page 'CMDR for hospitals'"), so this is faithful to it and removes a page of
duplication.

### Phases: corrected against the deck

The review proposed a Year 1 / Year 2 / Year 3 framing. The deck's phases are
**quarterly, Q4 FY'26 → Q4 FY'27** — five phases in about five quarters, with
years 2 and 3 being licence renewals rather than delivery phases. The site now
uses the deck's actual structure, objectives and per-phase values.

One inconsistency to resolve in the deck itself: the phase table puts
**Avoidance at Phase 5 (Q4 FY'27)**, but the CMDR slide says the ML layer
"in phase 3 begins identifying precursor conditions", and the payment schedule
labels the Phase 3 milestone "Major Incident Avoidance (ML)". The site takes
the conservative reading — earlier phases build the pattern history, avoidance
is the final phase — but the deck should be made consistent before a CIO reads
both.

### Integrations (§4)

Was Slack, Teams and Zoom only. Now grouped into *Where incidents are detected*
(SolarWinds, TalkDesk, security monitoring, Jira) and *Where your team
responds* (Teams, Zoom, Outlook, Jira, Slack). Wording is "connects to"
throughout, and a note says these connections are built in Phase 1.

Slack: "Generate compliance reports with one command" → "generate incident
reports". **If "compliance" meant something specific** — SLA reporting, HIPAA
incident documentation — say which, and change it back.

Install buttons: moved off the home page as instructed, but routed through
onboarding rather than offered as public self-install, because the public
Slack install link requests channel history, file read/write and the user
list, which a hospital security reviewer will read (§7). **If you decide to
keep public self-install, swap the two `contact.html` hrefs in the
*Installing CMDR* section for the real install URLs.**

### About (§5)

Roles added under every name. *Why we built this* added above the team.
Healthcare credibility made explicit for Trishan (Wellframe) and Dayle
(privacy and data protection). Partners block written and **commented out**,
pending confirmation.

### Small items (§7)

Page titles now carry the positioning. Every demo CTA points at
`contact.html` — the hero no longer points at an on-page waitlist anchor while
the nav points somewhere else. The logo carries the tagline *"Incident command
for hospitals"*, which answers the abbreviation question without a rename.

## Open items — do these before publishing

### Blocking

1. **Existing site content — logo, bios, exact copy.** The live site could not
   be reached from the build environment, so nothing here is lifted from it.
   Needed: the CMDR **logo files**, the **five team bios** as currently
   written, and the existing Features / Integrations detail copy. Until these
   land, the site is a faithful rendering of the two documents, not of the
   live site.
2. **BCH partner status.** The partner blocks on `index.html` and
   `about.html`, and the footer line, are now **live** at the user's
   instruction. Two things to confirm before this is public:
   - The deck is a **pre-contract proposal** — its stated objective is to
     "obtain verbal Go / No-Go for this initiative to proceed to contracting",
     and the payment schedule is "Proposed". If contracting has not closed,
     "Founding Hospital Partner" is premature as a public claim.
   - The review flagged that the MSA covers publishing results, which may not
     extend to name and logo use on a website.
   The blocks render as styled text, so no logo file is required; drop one in
   per `assets/img/README.md` when available.
3. **Team bios.** Luke's, Paul's and Teddy's bios render as visible dashed
   placeholders in `about.html`. Trishan's and Dayle's cards carry only the one
   added healthcare clause each — existing bios still need to go back in
   around them.
4. **Legal pages.** `privacy.html` and `terms.html` contain placeholder text
   and are `noindex`. Paste the live text, or your counsel's version.
5. **Form handler.** The demo form on `contact.html` posts to `#`. Point
   `action` at whatever the live site uses (Webflow, HubSpot, or your own
   endpoint). Nothing is submitted anywhere until you do.

### Non-blocking

5. **Phase 1 timing.** Whether the SolarWinds, TalkDesk and security
   monitoring connections can be shown at all before Phase 1 completes (Q4
   FY26). The page hedges with "connects to" and an explicit Phase 1 note; if
   that is still too forward, cut those three cards until the connections are
   in.
6. **Headline numbers.** The proposal has none, so the problem band carries
   statements rather than figures. Once the Phase 2 KPIs and the BCH baseline
   exist (Q1 FY27), replace them with one figure for the pain and one for the
   fix.
7. **Product screenshots.** The two figures are hand-drawn SVG mock-ups, not
   real captures. See `assets/img/README.md`.
8. **Investor material.** `healthcare.html` closes with two sentences on why
   the incumbents have not built this and why it scales across hospitals
   running the same stack, per §6. Delete that section if you would rather keep
   investor framing off the site.

## Not done

- **The name.** §7 raises whether hospital buyers read CMDR as a command-line
  abbreviation. Treated as out of scope, as the review suggests; the logo
  tagline is the cheap mitigation.
