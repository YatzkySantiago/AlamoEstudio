---
name: Álamo Estudio
description: A clean, light studio page that shows a working example landing on a phone and closes on a green band where the visitor writes their WhatsApp message.
colors:
  ground: "#f4f6f8"
  surface: "#ffffff"
  ink: "#14181d"
  ink-2: "#48515c"
  ink-3: "#626c78"
  line: "#e1e6eb"
  line-strong: "#cbd3db"
  brand: "#4a90c4"
  brand-ink: "#2b6a9b"
  wa: "#0e7a46"
  wa-hover: "#0b653a"
  wa-bubble: "#d9fdd3"
  wa-wall: "#efeae2"
  wa-meta: "#55665a"
  clinic: "#1d6b63"
  clinic-soft: "#e3f1ee"
typography:
  display:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.875rem, 1.6rem + 3.6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.045em"
  numeral:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 2.5rem + 5vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.42
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.9688rem"
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
  meta:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
  micro:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  focus: "6px"
  inner: "9px"
  control: "10px"
  button: "12px"
  card: "14px"
  panel: "20px"
  device-screen: "44px"
  device: "54px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(72px, 9vw, 128px)"
  grid-gap: "20px"
  grid-gap-mobile: "14px"
  header: "68px"
  page: "1240px"
components:
  button-whatsapp:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "56px"
  button-whatsapp-hover:
    backgroundColor: "{colors.wa-hover}"
    textColor: "{colors.surface}"
  button-whatsapp-large:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "0 30px"
    height: "60px"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0 26px"
    height: "56px"
  button-header:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "44px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "48px"
  segmented:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.button}"
    padding: "4px"
  segmented-thumb:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.inner}"
    height: "48px"
  builder-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(22px, 3vw, 32px)"
  closing-band:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.surface}"
    padding: "clamp(72px, 9vw, 128px) clamp(20px, 4vw, 56px)"
  price-box-featured:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(26px, 3.4vw, 44px)"
  price-plan:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px 22px"
  price-box-quiet:
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(26px, 3.4vw, 44px)"
  work-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  phone:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.device}"
    padding: "10px"
    width: "340px"
  chat-bubble-out:
    backgroundColor: "{colors.wa-bubble}"
    textColor: "{colors.ink}"
    padding: "9px 13px"
  chat-bubble-in:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "9px 13px"
---

# Design System: Álamo Estudio

## Overview

**Creative North Star: "The Open Chat"**

A cool, pale, quiet studio page that shows its product working. The page is a single centered column of 1240px held between two page-long hairline rails; sections stack inside it, each separated by a full-width hairline rule and given the same generous vertical breath. Surfaces are white, rested on a pale blue-grey ground and outlined by hairline rings rather than borders or heavy shadows. One grotesque family carries everything, from an 80px tight-tracked headline down to 12px notification timestamps.

The hero pairs the headline with one physical object: a white phone, tilted gently toward the pointer, showing an example landing for a fictional business, with a WhatsApp notification sliding up over it. The page ends on its only full-colour ground: a WhatsApp-green band holding a white message-builder card, where the visitor picks what they need and sends the message.

Colour is nearly absent by design. Ink is near-black, secondary text is a cool slate, and the only saturated hue is WhatsApp green, which belongs to WhatsApp: the controls that open it and the one section whose job is sending the message. The logo blue survives as a deeper "brand ink" for small accents: focus rings, the caret, the builder's live price, checkmarks. Warm colour enters only inside chat previews, and the example site inside the phone carries its own contained teal so it reads as someone else's brand, not the studio's.

Motion is restrained and purposeful: the headline settles in once, the phone arrives once, the notification drops in once, and in the builder only the message segments the visitor changes blur in. Everything stops under reduced motion.

**Key Characteristics:**
- Cool pale ground, white surfaces, hairline rings, page-long hairline rails above 1300px.
- One family (Schibsted Grotesk 400/500/600/700), tight negative tracking on all headings.
- WhatsApp green on WhatsApp actions and on the single closing band; brand ink only for small accents.
- Real WhatsApp wall, bubble and timestamp colours, confined to chat previews.
- Example-site colours confined to the phone screen.
- Ring and lift for surfaces; one deeper object shadow for the hero phone.
- Every interactive target at least 44px.

## Colors

A cool, near-monochrome palette with one functional green and one small blue accent, plus two contained pockets: WhatsApp's warm chat colours and the example site's teal.

### Primary
- **WhatsApp Action Green** (wa): the fill of every control that opens WhatsApp (header CTA, hero primary, price-box actions, builder send button, mobile bar) with white text, and the ground of the closing band. Inside the phone it also fills the example site's WhatsApp button and the notification's app icon. Hover deepens to **Pressed Green** (wa-hover).

### Secondary
- **Brand Ink** (brand-ink): the logo blue darkened for text contrast. Used for the global focus ring, input caret and focus inset, the builder's live price figure, and the checkmarks in price lists; also, at low alpha, the phone's far shadow tint. Never a fill for large areas.
- **Logo Blue** (brand): the logo's own blue. Lives in the logo artwork; not used as a UI colour in CSS.

### Tertiary
- **Chat Bubble Green** (wa-bubble): outgoing chat bubbles and their tail; also the text selection colour.
- **Chat Wall Beige** (wa-wall): the conversation background inside chat previews.
- **Chat Timestamp Grey** (wa-meta): the "Vista previa" timestamp and ticks under the builder bubble, matching WhatsApp's own meta colour on green bubbles.

### Example-site palette (contained)
- **Clinic Teal** (clinic): the fictional clinic's brand inside the phone screen: logo mark, location line, hours icon.
- **Clinic Mist** (clinic-soft): the example site's hero card ground.

These two are scoped to the sample site and exist to show a client brand at work. They are not studio colours.

### Neutral
- **Cool Paper** (ground): page background, segmented-control track, address pills, the monthly-plan panel, the example site's hours row, the mobile menu sheet; header and mobile bar use it translucent with a blur.
- **White Surface** (surface): builder card, cards, price box, phone screen, incoming bubbles; white is also the text colour on green.
- **Near-Black Ink** (ink): headings, body text, the segmented thumb, the phone's island, the skip link fill.
- **Slate** (ink-2): supporting copy, section-head text, nav links at rest, price lines, FAQ answers, icons.
- **Muted Slate** (ink-3): placeholders, notes, captions, metadata, copyright.
- **Hairline** (line): rings, section rules, page rails, internal dividers, the plan panel's inset.
- **Strong Hairline** (line-strong): quiet-button and input insets, FAQ rules, process connector, window dots, the phone's outer ring, example-site service chips.

### Named Rules
**The Green Means WhatsApp Rule.** WhatsApp green fills only controls that open a WhatsApp conversation, plus the ground of the one section whose whole job is sending the WhatsApp message (the closing band). No other section, decoration or highlight uses it.

**The Contained Warmth Rule.** Wall beige, bubble green and timestamp grey appear only inside chat previews (bubble green also as the selection colour). They never tint sections, cards or backgrounds outside a chat.

**The Borrowed Brand Rule.** Clinic teal and clinic mist live only inside the phone's example site, always captioned as an example. They never appear in the studio's own UI.

**The Small Blue Rule.** Brand ink marks focus, the caret, the live price and checkmarks. It stays at text or stroke scale; its only larger presence is as a faint shadow tint under the phone.

## Typography

**Display Font:** Schibsted Grotesk (with system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (with system-ui, sans-serif)

**Character:** A single newsy grotesque at four weights. Headings are bold and tightly tracked so large sizes read as one solid shape; body is open at 1.55 line-height.

### Hierarchy
- **Display** (700, clamp 46px to 80px, line-height 0.96, -0.045em): the hero headline. The closing title uses the same voice slightly wider (clamp 44px to 84px, max 9em), in white on green.
- **Numeral** (700, clamp 60px to 96px, line-height 1, -0.04em): the published price figure in the featured price box. The quote-only box uses a 36px to 52px figure at -0.035em; the monthly-plan figure is 28px at -0.03em with a 16px slate unit.
- **Headline** (700, clamp 36px to 60px, line-height 1.04, -0.03em): every section h2, balanced wrap.
- **Title** (700, 26px, -0.025em): price-box names and the example site's headline. Steps below: 20px process step titles (title-sm), 19px FAQ questions at 600, 18px monthly-plan name.
- **Lead** (400, clamp 18px to 22px, line-height 1.4, ink-2): hero support line, max 31rem. The closing sub runs one notch smaller (up to 21px) in 88% white; section-head copy is 18px.
- **Body** (400, 17px, line-height 1.55): running text and buttons (buttons at 600, -0.01em; large buttons 18px). Answer copy max 38rem.
- **Body small** (400, 16px, line-height 1.42): inputs and process chat bubbles.
- **Label** (500, 15.5px): nav links, footer links, segmented options, price lines, plan list. Field legends and the phone status bar sit at 15px, 600.
- **Caption** (400, 14px, ink-3 or ink-2): the phone caption, builder note, field labels, copyright, notification body.
- **Meta** (400, 13px, ink-3): chat metadata, address pills, example-site chips and hours.
- **Micro** (400, 12px): notification header and bubble timestamp only.

### Named Rules
**The One Family Rule.** Hierarchy comes from size, weight and tracking within Schibsted Grotesk; no second family.

**The Tight Heading Rule.** Every heading tracks negative (-0.02em to -0.045em) and uses text-wrap: balance; body uses pretty wrapping.

**The Tabular Figures Rule.** Phone numbers, step numerals and the phone's clock use tabular figures.

## Layout

A centered 1240px page column with a fluid gutter (20px to 56px). Above 1300px the column is drawn as a sheet between two 1px hairline rails running the page's full length. Every section between hero and close uses the same fluid padding (72px to 128px vertical) and a 1px top rule, so rhythm is uniform and sections read as panels of one sheet.

The hero is a two-column grid (1.12fr copy, 0.88fr phone) vertically centered in the first viewport, capped at 920px tall, with a 40px to 80px column gap. The closing band is a two-column grid (0.9fr copy, 1.1fr builder card) at the same section padding, full-bleed to the page column.

Section heads are a two-column grid (heading, then a 24rem supporting paragraph aligned to the bottom), collapsing to one column under 760px, with 36px to 64px below. Content grids are asymmetric, never equal thirds: 7fr/5fr for work frames and prices, 5fr/6fr for the process, 5fr/7fr for FAQ with a sticky heading. Grid gaps are 20px, tightening to 14px on mobile.

The sticky header is 68px; anchor scrolling offsets by header plus 16px. At 860px and below, nav collapses into a full-height sheet, hero and closing grids stack (copy first), hero buttons go full width, the phone narrows to 320px, and a fixed WhatsApp bar appears at the bottom only while no other WhatsApp action is on screen (the footer pads 104px to clear it). Under 420px the segmented control switches to short labels and the builder's two fields stack.

## Elevation & Depth

Depth is almost flat. Surfaces sit on the ground separated by hairline rings; one lifted level marks the objects that matter most. Insets, not borders, outline controls. The hero phone is the single physical object and carries its own deeper shadow.

### Shadow Vocabulary
- **Ring** (`box-shadow: 0 0 0 1px var(--line)`): resting surfaces such as work frames, the plan panel (as inset).
- **Lift** (`box-shadow: 0 0 0 1px var(--line), 0 1px 2px rgba(20,24,29,0.05), 0 28px 56px -28px rgba(20,24,29,0.22)`): the featured price box and the process chat card.
- **Lift on green** (`box-shadow: 0 2px 2px rgba(0,0,0,0.08), 0 40px 80px -40px rgba(0,0,0,0.5)`): the builder card on the closing band. Neutral black because an ink-tinted shadow and hairline ring disappear on green.
- **Object** (`0 0 0 1px var(--line-strong), inset 0 0 0 1px rgba(255,255,255,0.9), 0 2px 4px rgba(20,24,29,0.06), 0 40px 80px -36px rgba(20,24,29,0.38), 0 80px 120px -60px rgba(43,106,155,0.3)`): the phone only, over a white-to-pale 160-degree bezel gradient.
- **Inset outline** (`box-shadow: inset 0 0 0 1px var(--line-strong)`): quiet buttons, inputs, quiet price box, step markers; hover darkens the inset (to ink on buttons, ink-3 on inputs).
- **Green press** (`inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(14,122,70,0.4)`): the WhatsApp button's slight bevel.
- **Bubble** (`0 1px 1px rgba(20,24,29,0.12)`): chat bubbles and the date chip, matching WhatsApp.
- **Frosted glass**: header and mobile bar use translucent ground with `saturate(160%) blur(14px)` and a hairline edge; the phone's notification uses near-white glass at `saturate(180%) blur(18px)`.

### Named Rules
**The Two Levels Rule.** Page surfaces are either ringed or lifted; lift is reserved for the working product and the published price. The phone is the one exception: an object, not a surface, so it alone gets the object shadow.

## Shapes

Gently rounded, concentric corners scaled to object size: 9px inner pieces (segmented thumb and options, notification icon), 10px controls (inputs, nav links, header CTA, skip link), 12px buttons and the segmented track, 14px work frames, the builder's chat wall and the plan panel, 20px panels (builder card, price boxes, process chat, notification). The phone is 54px outside and 44px on the screen (50px and 40px under 860px). The focus ring rounds at 6px. Pills (999px) for the phone's island and example-site chips; circles for avatars, step markers and window dots. Chat bubbles keep WhatsApp's silhouette: 12px corners with the sender-side top corner squared and, on the builder bubble, a small triangular tail.

## Components

### Buttons
Solid, quiet and tall.
- **Shape:** 12px corners, 56px minimum height, 26px side padding, 17px at 600 with -0.01em tracking, optional 10px-gapped leading icon.
- **WhatsApp:** green fill, white text and WhatsApp glyph; hover deepens green; press nudges down 1px.
- **Quiet:** white with a strong-hairline inset; hover darkens the inset to ink.
- **Sizes:** header CTA at 44px with 10px corners; large at 60px, 30px padding, 18px for the hero pair (the quiet "Ver precios" matches at 60px) and the builder's full-width send button.

### Navigation
Logo left, centered links, actions right in a three-column header on frosted ground with a hairline bottom edge. Links are 15.5px at 500 in slate, 44px tall, 10px corners; hover goes to ink on a 5% ink wash; current link is ink. Under 860px a 44px toggle opens a full-height sheet of 26px links divided by hairlines; the closed sheet is `inert` and hidden.

### Hero Phone (signature)
A 340px white phone (10px bezel, 54px corners, object shadow) beside the headline, with a 556px screen holding a status bar (tabular clock, ink island, battery) and an example landing for a fictional business in its own contained palette. A frosted WhatsApp notification sits 14px from the screen's bottom edge. A centered 14px muted caption under the phone always labels it an example design. On fine pointers with motion allowed, the phone tilts toward the pointer (up to 6 degrees on Y, 5 on X) with a 0.6s eased transition. The phone itself is `aria-hidden`; the caption carries the meaning.

### Closing Band and Message Builder (signature)
The last section is a full green band: wa ground, a white radial highlight from the top-left, and a darkening gradient toward the bottom. White title and 88%-white copy sit left; the builder card sits right. The card is white, 20px, lift-on-green, and stacks: a three-way segmented choice, a live price line (figure in brand ink, 17px bold), two optional 48px inputs side by side, a beige 14px wall holding one outgoing bubble with a tail and a "Vista previa" timestamp, then the 60px send button with a centered caption note. The segmented control is a ground track with an ink sliding thumb (0.45s on the system ease) and white 600 text on the selected option; focus shows a brand-ink ring on the option at 2px offset. Inputs focus to a 2px brand-ink inset.

### Chat Thread
Reproduces WhatsApp: beige wall, white incoming bubbles squared top-left, green outgoing bubbles squared top-right, 9px by 13px padding, max 82% width, 8px gaps with extra space on speaker change. Used in the builder preview and the process section's lifted chat card (white bar with avatar, name and meta above the wall).

### Price Boxes
A 7fr featured box (white, lifted) beside a 5fr quiet box (transparent, strong-hairline inset, aligned to top). Each has a 26px title, slate description, a large figure (numeral scale with a slate "desde" line above, or a smaller quote figure), a hairline-ruled checklist with brand-ink checks, and a full-width action pinned to the bottom. The featured box also holds a monthly-plan panel above its action: ground fill, hairline inset, 14px corners, 20px by 22px padding, an 18px name and 28px figure on one baseline, slate terms, and a wrapping row of 15.5px items with brand-ink checks.

### Work Frames
White 14px ringed browser frames in a 7fr/5fr grid with the first frame spanning two rows. A hairline-ruled bar holds three strong-hairline dots and a centered ground-coloured address pill. Empty frames show a faint 45-degree hairline hatch with a muted icon and label; filled frames show a top-anchored cover image.

### FAQ Accordion
Strong-hairline rules between items; 72px-minimum question buttons at 19px/600 with a plus icon that rotates 45 degrees to open. Answers expand by animating grid rows from 0fr to 1fr over 0.4s, slate text max 38rem, and are visibility-hidden when closed.

### Process Steps
Numbered steps with 36px circular white markers (strong-hairline inset, tabular figure) joined by a 1px strong-hairline connector, beside a lifted chat card.

### Mobile WhatsApp Bar
Under 860px only: a fixed bottom bar on frosted ground with a hairline top edge holding one full-width WhatsApp button, padded for the safe-area inset. It shows only when none of the hero actions, the builder's send block or the closing band is on screen, slides up 0.4s, and is `inert` while hidden.

### Motion
- **Easing:** one curve, `cubic-bezier(0.16, 1, 0.3, 1)`, for every entrance, slide and tilt; 0.15 to 0.2s plain ease for colour and shadow hovers.
- **Headline settle:** each word fades from 8px blur and 12px down over 0.8s, staggered 45ms; the lead, actions and price line follow at 0.35s, 0.5s and 0.6s.
- **Phone arrive:** the phone and caption rise 48px from a -3 degree rotation and fade in over 1.1s after 0.15s.
- **Notification drop:** the notification slides up from below the screen edge, scaling from 0.96, over 0.9s at 1.6s.
- **Segment write:** in the builder, only newly changed message segments and the price line fade in from a 5px blur over 0.45s; segments present on first render stay still.
- **Scroll bubbles:** where `animation-timeline: view()` is supported, process chat bubbles rise 14px and scale from 0.98 as they enter.
- **Reduced motion:** every entrance is gated behind `prefers-reduced-motion: no-preference`, the tilt is skipped in script, and a global rule collapses remaining transitions and smooth scrolling.

### Accessibility conventions
A global 2px brand-ink focus-visible ring at 3px offset with 6px corners (segmented options show it at 2px offset; inputs swap it for an inset). Every interactive target is at least 44px. A skip link sits off-screen and drops in on focus as an ink pill. Hidden menus and bars are `inert`. Decorative objects (the phone, the bubble mirror) are `aria-hidden`, with the message announced through a polite live region. Icons are `aria-hidden` beside visible text.

## Do's and Don'ts

### Do:
- **Do** fill WhatsApp-opening controls with WhatsApp green, with white text and the WhatsApp glyph.
- **Do** reserve the green ground for the single closing band that holds the message builder, and float the builder on it as a white card with the lift-on-green shadow.
- **Do** separate surfaces with hairline rings and reserve the lift shadow for the featured price and chat cards.
- **Do** give every section the shared section padding and a 1px hairline top rule inside the 1240px column.
- **Do** use asymmetric fr grids (1.12/0.88, 7/5, 5/6, 5/7, 0.9/1.1) and collapse them at 860px.
- **Do** keep chat previews faithful to WhatsApp: beige wall, green outgoing bubble, white incoming bubble, squared sender corner.
- **Do** caption any example client work shown in the phone as an example, and keep its palette inside the screen.
- **Do** keep every target at least 44px and rely on the global brand-ink focus ring.
- **Do** gate every entrance animation behind reduced-motion and use the single system ease.

### Don't:
- **Don't** use WhatsApp green for decoration, highlights, non-WhatsApp actions, or as the ground of any section other than the closing band.
- **Don't** let wall beige, bubble green or timestamp grey leave the chat previews.
- **Don't** let the example-site teal leak into the studio's own UI.
- **Don't** introduce a second typeface or untracked bold headings.
- **Don't** add depth levels beyond ring and lift for surfaces, or use borders where an inset or ring is the convention.
- **Don't** add blobs, rotating words or badges.
- **Don't** animate on loop; motion happens once on entry or in response to the visitor.
