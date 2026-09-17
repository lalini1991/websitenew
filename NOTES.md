# Changes made, and what is still open

This rebuild applies *CMDR website: suggested changes* (review of
incidentcmdr.com as of 16 September 2026, cross-checked against the BCH and
CMDR Vision proposal). The guiding decision from that review:

> Make the site say, in the first sentence, that CMDR is incident response for
> hospital IT, and orient it against the systems hospitals already run
> (ServiceNow, Jira Service Management) rather than against startup tooling.

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

*Built for healthcare* added as the first section (HIPAA boundary, connectors,
service layer). *Value that compounds* added, following the engagement phases.
Avoidance is labelled **Phase 5 · on the roadmap**, with Q4 FY27 stated in the
body — it is not shipped and the page does not imply it is.

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

1. **BCH name and logo permission.** The Founding Hospital Partner blocks on
   `index.html` and `about.html`, the *"Built in Boston with Boston Children's
   Hospital"* footer line, and the IDHA references are all commented out and
   marked `PENDING CONFIRMATION`. The MSA covers publishing results, which may
   not extend to name and logo use on a website. Get it in writing, add the
   logo files listed in `assets/img/README.md`, then uncomment. The review
   calls this the single most convincing thing on the page for a peer hospital
   CIO, so it is worth chasing.
2. **Team bios.** Luke's, Paul's and Teddy's bios render as visible dashed
   placeholders in `about.html`. Paste the existing copy from the current About
   Us page. Trishan's and Dayle's cards carry only the one added healthcare
   clause each — their existing bios still need to go back in around it.
3. **Legal pages.** `privacy.html` and `terms.html` contain placeholder text
   and are `noindex`. Paste the live text, or your counsel's version.
4. **Form handler.** The demo form on `contact.html` posts to `#`. Point
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
