# Risks

## Risk Posture

AI Lullaby Radio operates near child sleep, hearing safety, and medical-adjacent expectations. The product should be conservative in claims, defaults, and content approval. The main risk is not technical failure alone; it is losing parent trust through unsafe audio, unsupported claims, or inconsistent generated content.

## Medical Claims

Risk:

- Marketing may imply that the product treats insomnia, improves infant sleep duration, reduces anxiety, or supports development.
- Users may interpret "scientifically grounded" as a clinical guarantee.

Mitigation:

- Use descriptive language: calm, quiet, predictable, low-stimulation.
- Avoid treatment language: cures, fixes, proven to make babies sleep, therapy.
- Include a disclaimer that the product is not medical advice.
- Recommend consulting a pediatrician for sleep, hearing, sensory, or developmental concerns.
- Keep research references tied to safety and design heuristics, not guaranteed outcomes.

## Hearing Safety

Risk:

- Loud or nearby playback can contribute to unsafe sound exposure.
- All-night playback may mask important household sounds or increase cumulative exposure.
- Headphones for sleeping children create uncontrolled SPL and mechanical risks.

Mitigation:

- Keep quiet default volume.
- Preserve protected maximum volume behavior.
- Recommend speaker placement away from the crib.
- Make timer-first playback the default.
- Warn users before all-night mode if it is ever added.
- Discourage headphones for sleeping children, especially under 3 years old.
- Add onboarding copy: sleep audio should be background, not foreground.

## Copyright And Licensing

Risk:

- Local MP3 files may not have clear rights for public distribution.
- AI-generated music can still have unclear provenance, model terms, or similarity risk.
- Downloadable or offline premium content may require stronger license tracking.

Mitigation:

- Maintain a catalog rights register for every track.
- Track source, license, generation method, model terms, and allowed uses.
- Do not publish or monetize any track without explicit rights clearance.
- Keep generated prompts, seeds, tool/model versions, and review notes.
- Reject tracks that imitate identifiable artists, songs, or protected characters.

## Quality Of Generated Music

Risk:

- AI output can contain sudden transients, bright tones, rhythmic intensity, distorted artifacts, or emotionally dramatic changes.
- Generated batches can look large but have low bedtime suitability.
- Subjective quality can drift without a review process.

Mitigation:

- Require automated QA before human review.
- Measure LUFS, true peak, BPM, loudness range, spectral brightness, and transient risk.
- Use human listening scorecards for "too bright", "too busy", "too emotional", and "transition risk".
- Publish only tracks that pass both automated and subjective checks.
- Keep rejected tracks out of the app rather than hiding them late in the sequence.

## Product Trust

Risk:

- Parents may reject the product if safety guidance feels vague or if the app behaves like a normal engagement product.
- A single loud transition can create lasting distrust.

Mitigation:

- Keep the product narrow and predictable.
- Make sleep timer and volume safety visible.
- Use honest catalog size: current starter catalog is 18 MP3 files.
- Explain why the catalog is small: review quality matters more than volume.
- Collect track-level feedback and act on it quickly.

## Privacy And Child-Related Data

Risk:

- Feedback about children, routines, sleep timing, and household behavior can become sensitive.
- Accounts, personalization, or analytics may create additional compliance obligations.

Mitigation:

- Start with minimal data collection.
- Avoid collecting child names, exact birth dates, or medical details.
- Make feedback optional.
- Publish a plain-language privacy notice before public analytics or accounts.
- Store parent feedback separately from identifiable data when possible.

## Technical And Operational Risks

Risk:

- Frontend-only architecture is appropriate for MVP but may limit feedback, catalog updates, and personalization.
- Static metadata can drift from actual audio assets.
- Missing expected tracks can confuse future planning.

Mitigation:

- Keep a generated catalog consistency check.
- Decide whether the product standard is 18 current tracks or 20 after adding missing files.
- Add offline metadata generation before scaling the catalog.
- Introduce backend only when needed for feedback, accounts, or dynamic catalog delivery.

## Legal And Medical Disclaimers

Suggested product disclaimer:

"AI Lullaby Radio provides quiet background music for bedtime routines. It is not medical advice and does not diagnose, treat, or prevent sleep, hearing, or developmental conditions. Keep playback quiet, place speakers away from the crib, avoid headphones for sleeping children, and consult a pediatric professional for health concerns."

Suggested all-night playback warning:

"Continuous overnight sound may not be appropriate for every child and can increase sound exposure. We recommend timer-based playback with a gentle fade-out after sleep onset."

Suggested rights disclaimer for internal operations:

"No track should be published, sold, or distributed until its source, license, and allowed usage are recorded."
