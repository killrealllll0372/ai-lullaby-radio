# Sleep Music for Infants and Young Children — Scientific Research Report

> Scope: evidence-based review of music and sound used at bedtime and during sleep for infants and young children (≈ 0–36 months, with notes where data extend to preschool). Focus: physical audio parameters (tempo, level, duration, structure, timbre, vocals), safety risks (continuous all‑night noise, sleep machines, headphones), and what is actually proven vs. extrapolated from adult research.
>
> Intended use: input for product/audio-spec decisions on a children's sleep audio product. This document is a research summary, not medical advice.

---

## 1. Executive Summary

The directly applicable, high-quality evidence base for "music for infant sleep" is **smaller than parents and product copy usually imply**. Most rigorous trials are from the NICU (preterm infants) and from preschool/school‑age children; there is comparatively little controlled work on healthy term infants sleeping at home with music.

Key findings that hold up across the literature:

- **Sound level is the single best-documented safety parameter.** International guidance for hospital nurseries caps neonatal exposure at ~45 dBA (AAP-referenced level used by Cochrane and Frontiers in Pediatrics work). Many consumer infant sleep machines (ISMs) can exceed this, and some exceed 85 dBA at 30 cm — the adult occupational threshold for noise-induced hearing loss with prolonged exposure (Hugh et al., *Pediatrics* 2014).
- **Lullaby tempo broadly clusters around the resting human heart rate (~60–80 BPM).** In the Loewy 2013 *Pediatrics* multisite RCT, parent-preferred lullabies and rhythmic/breath-entrained interventions were associated with lower heart rates, improved sucking/feeding, and altered sleep patterns in premature infants.
- **Continuous all-night sound is not benign by default.** AAP guidance and Cochrane reviews (NICU) emphasize that elevated background noise during sleep can disrupt arousal patterns and is implicated in concerns about auditory and neurodevelopmental effects, especially at sustained levels above ~45–50 dBA.
- **Headphones for sleeping infants are not supported by evidence and carry risks** (uncontrolled in-ear SPL, strangulation/occlusion, thermal). No reputable pediatric body recommends sleeping in headphones for infants.
- **Adult sleep-music literature (BPM, "relaxing music" tempos, binaural beats, etc.) should not be directly transferred to infants.** Infant auditory system, sleep architecture, and arousal thresholds differ substantially.

Strongest practical anchors for a product:
- Target SPL ≤ 50 dBA at the infant's likely ear position (≈ at the crib), with a hard ceiling well below 65 dBA. Default lower.
- Tempo for lullabies/sleep tracks ~60–80 BPM, with stable tempo (no sudden tempo changes).
- Minimize/avoid sudden dynamic transitions (>~6 dB jumps within seconds).
- Prefer a **fade-out / timed shutoff after the child is asleep** as the default; do not assume continuous all-night playback is safe or helpful.
- Treat vocals as acceptable (and possibly beneficial when parent-preferred), but avoid lyrics-driven, attention-grabbing songs.

---

## 2. Practical Physical Parameters

### 2.1 Loudness / SPL

- **Hospital/NICU benchmark, ≤ 45 dBA (hourly equivalent Leq, AAP-referenced).** Cochrane 2024 (PMID 38813836) on NICU noise management states that NICU sound levels "often exceed the maximum acceptable level recommended" by guidelines; Puyana-Romero et al., *Frontiers in Pediatrics* 2020 (PMID 33072664): "international guidelines suggest avoiding noise levels above 45 dB in NICUs."
- **NIDCD (NIH):** "Sounds at or below 70 A-weighted decibels (dBA), even after long exposure, are unlikely to cause hearing loss. However, long or repeated exposure to sounds at or above 85 dBA can cause hearing loss." This is a general (adult-derived) safety boundary; infants have less robust auditory protection and longer cumulative exposure windows.
- **Infant sleep machines (ISMs):** Hugh et al., *Pediatrics* 2014: "Maximum sound levels at 30 cm were >50 A-weighted dB for all devices… Three machines produced output levels >85 A-weighted dB, which, if played at these levels for >8 hours, exceeds current occupational limits for accumulated noise exposure in adults and risks noise-induced hearing loss."

Practical implication for a sleep-music product:
- Default playback level should land in the 40–50 dBA range at the child's ear distance.
- Even at maximum user setting, output measured at typical crib distance (≈ 100–200 cm) should not approach 70 dBA.
- Loudness normalization (e.g., target ~ −23 to −20 LUFS integrated, with True Peak ≤ −1 dBTP) reduces inter-track surprises.

### 2.2 Tempo (BPM)

- Most traditional lullabies and lullaby-style therapy music sit roughly **60–80 BPM**, near typical resting heart rate, which is the explicit rationale used in NICU music-therapy protocols.
- Loewy et al., *Pediatrics* 2013 (PMID 23589814): live, breath/rhythm-entrained interventions and parent-preferred lullabies "showed changes in heart rate interactive with time. Lower heart rates occurred during the lullaby (P < .001) and rhythm intervention (P = .04)… Caloric intake (P = .01) and sucking behavior (P = .02) were higher with parent-preferred lullabies."
- **Caveat:** there is no clean dose‑response RCT establishing an "optimal BPM" for healthy term infants falling asleep at home. The 60–80 BPM range is best treated as a practical heuristic strongly supported by NICU work and lullaby tradition, not as a precise clinical prescription.

### 2.3 Duration and shutoff behavior

- Direct trials of "play music all night vs. fade after sleep onset" in healthy infants are not well-represented in PubMed-indexed literature. Practical guidance therefore relies on:
  - NICU sound exposure limits (which assume sustained Leq, not unlimited duration).
  - AAP / hospital pediatrics emphasis on minimizing continuous high noise during sleep.
  - Hugh et al. 2014 explicit recommendation to limit ISM use and to place machines away from the crib.
- Conservative product default: **play during sleep onset, then fade and stop within ~20–45 minutes**, rather than loop indefinitely. Provide a user-visible "all night" option, but warn about hearing/exposure trade-offs.

### 2.4 Stability of level and structure

- The literature on infant arousal and sleep fragmentation supports the intuition that **sudden onsets, abrupt tempo or loudness changes, and unpredictable transitions are arousing** — exactly opposite to a sleep aid's goal. This is consistent with both NICU noise-management work and broader pediatric sleep guidance.
- Practical implication: keep within-track dynamic range modest (e.g., short‑term range ≤ ~6 dB), avoid hard cuts between tracks, prefer crossfades, and avoid sound effects with sharp transients.

### 2.5 Timbre

- No high-quality trials isolate "timbre" in infant sleep music as an independent variable. Heuristics from music therapy practice favor:
  - smooth, low-spectral-centroid timbres (soft strings, warm pads, music box / celesta, mellow piano, soft choir or hum);
  - avoidance of bright, harsh, percussive, or sibilant content.
- These choices align with the broader "minimize arousal" objective, but should be presented as design heuristics, not proven effects.

### 2.6 Vocals (lyrics / hummed / parent-preferred)

- Loewy 2013 supports **parent-preferred, sung lullabies** as beneficial — though in a NICU live-music context. Generalizing to recorded, home use is plausible but not directly proven.
- Hummed or wordless vocals are typically used in lullaby practice and are a reasonable default for products targeting infants where caregiver-recorded singing isn't available.

---

## 3. Evidence Table

| # | Source | Population | Design | What it tells us | Evidence strength |
|---|--------|------------|--------|------------------|-------------------|
| E1 | Hugh SC et al., *Pediatrics* 2014 (PMID 24590753) | Consumer infant sleep machines (14 devices) | Acoustic measurement study | Some ISMs exceed 85 dBA at 30 cm; all exceeded 50 dBA at 30 cm. Risk of noise-induced hearing loss if used at high settings near crib. | High for SPL safety claim; direct device measurements. |
| E2 | Loewy J et al., *Pediatrics* 2013 (PMID 23589814) | 272 preterm infants ≥32w, 11 NICUs | RCT (within-subject controls) | Parent-preferred lullabies and rhythm/breath-entrained interventions lowered heart rate, improved sucking/feeding and sleep patterns. | High for NICU; cautious generalization to home/term infants. |
| E3 | Sibrecht G et al., Cochrane Database Syst Rev 2024 (PMID 38813836) | Preterm / VLBW NICU infants | Systematic review of noise/sound management | NICU sound levels often exceed accepted guidance (~45 dB Leq). Noise management interventions studied with mixed-quality evidence. | High for "elevated noise is a problem"; moderate for specific interventions. |
| E4 | Puyana-Romero V et al., *Front Pediatr* 2020 (PMID 33072664) | Neonatal incubators / NICU | Acoustic study | Reiterates international guidance to keep NICU noise ≤ 45 dB; documents real-world exceedance. | High for SPL guideline reference. |
| E5 | NIH/NIDCD, "Noise-Induced Hearing Loss" (consumer health page, evidence-based) | General population (incl. children) | Authoritative guidance | ≤70 dBA broadly safe; ≥85 dBA prolonged → NIHL risk. | High as a general safety floor; not infant-specific. |
| E6 | WHO Fact Sheet, "Deafness and hearing loss" | Global, all ages | Public-health summary | Quantifies scale of hearing loss; flags "unsafe listening practices" as a major modifiable cause. | High for context; not specific to sleep music. |
| E7 | Liao JH et al., *Worldviews Evid Based Nurs* 2018 (PMID 30098111) | Preterm NICU infants | Systematic review of nonpharmacological sleep interventions | Music/sound interventions among nonpharmacological approaches with some positive effects on infant sleep parameters; quality of evidence variable. | Moderate; preterm focus. |
| E8 | Lai HL et al., *Int J Nurs Stud* 2006 (PMID 15996669) | Preterm infants + mothers | RCT | Music during kangaroo care reduced maternal anxiety and influenced preterm infants' responses. | Moderate for adjunctive use; not direct sleep-onset trial in term infants. |
| E9 | Dearn T & Shoemark H, *JOGNN* 2014 (PMID 24707819) | Preterm infants | Clinical trial | Recorded lullaby music delivered at NICU-recommended levels with maternal presence influenced infant response. | Moderate; reinforces "low SPL + lullaby" as safe operating point. |

---

## 4. Recommended Audio Spec (for this product)

These are engineering defaults derived from the evidence above. They are conservative on safety, permissive on aesthetics, and explicit where evidence is weak.

### 4.1 Levels & loudness normalization

- **Default playback target:** ~ −23 to −20 LUFS integrated; True Peak ≤ −1 dBTP.
- **At-device SPL goal:** ≤ 50 dBA at ~ 1 m from speaker, ≤ 45 dBA at the infant's ear position (e.g., across-room placement assumed).
- **Maximum allowed output:** firmware/app cap so that, at the loudest user setting and closest realistic position (e.g., 30 cm if device is on a shelf nearby), measured SPL does not exceed ~65 dBA. **Never** allow a setting that could reach 85 dBA at the crib.
- **Volume UI:** non-linear scale that makes "very loud" require deliberate effort; on first run, default to a quiet preset with on-screen note about safe levels.

### 4.2 Tempo

- Sleep-onset tracks: **60–80 BPM**, stable within a track (no abrupt tempo changes >~5%).
- Avoid tempos > 90 BPM in sleep playlists.

### 4.3 Dynamic shape

- Within-track short-term loudness range ≤ ~6 dB.
- All tracks must start and end with smooth fades (≥ 2 s in, ≥ 4 s out).
- Inter-track transitions: crossfade ≥ 3 s; never hard cut.

### 4.4 Spectrum & timbre

- Roll off energy below ~30 Hz and above ~10 kHz on master bus to reduce subwoofer rumble and harsh top.
- Prefer warm, low-centroid timbres (soft piano, music box, strings, pads, hum). Avoid harsh percussion, sibilance-heavy vocals, and bright synths in sleep playlists.

### 4.5 Vocals

- Wordless or simple lullaby vocals are allowed and may be beneficial.
- Avoid attention-grabbing lyrical content (story songs, character voices) in sleep-onset playlists.

### 4.6 Playback duration / shutoff

- Default behavior: **sleep timer ON**, e.g., 20–45 min with fade-out, then stop.
- "All night" option: allowed, but warn user; cap volume more aggressively when this mode is on.
- Always offer a "fade and stop after detected quiet period / after N minutes" mode as the recommended one in onboarding.

### 4.7 Output device assumptions

- **Discourage in-ear/over-ear headphones for sleeping infants.** Provide no preset for headphone use targeting <3y; if app detects headphones, show a safety warning and cap output significantly lower.
- Encourage placement of speaker across the room, not in the crib.

---

## 5. Safety Notes

- **Hearing loss risk is real and dose-dependent.** Repeated nightly exposure even at moderate SPL accumulates. Conservative defaults matter more than one-night peaks.
- **Sleep machines / continuous noise:** Hugh et al. recommend placing devices as far as possible from the infant, at low volume, and not running them all night. This generalizes to any sleep audio product.
- **Headphones on infants/toddlers** are not endorsed by pediatric authorities for sleep use and carry mechanical risks (strangulation, occlusion of airway, displaced mask of caregiver voice/alarms).
- **Masking of important sounds:** All-night sound can mask caregiver voice, smoke alarms, and infant distress sounds. Product should not promote use that defeats normal household auditory monitoring.
- **Vibroacoustic / "bone conduction" / high-SPL "shusher" products** are out of scope; current evidence does not justify pushing infants near upper SPL bounds.
- **Medical conditions:** Children with diagnosed hearing loss, recurrent otitis media, or sensory processing differences should follow individualized clinical guidance, not generic product defaults.

---

## 6. Open Questions / Weak Evidence

- **Optimal BPM for healthy term infants at home.** Inferred from NICU + lullaby tradition; no clean home-RCT.
- **Effect of long-duration (all-night) low-level music on infant sleep architecture.** Limited direct data; most evidence is from elevated-noise contexts, not deliberate low-SPL music.
- **Differences between instrumental vs. sung vs. parent-recorded lullabies for term infants at home.** Loewy 2013 supports parent-preferred sung lullabies in NICU; home extrapolation is plausible but not directly tested.
- **Genre / cultural specificity.** Most studies use Western lullaby idioms or parent-preferred selections. Cross-cultural infant sleep response is under-studied.
- **Adult studies of "binaural beats" / specific BPM ranges / nature sounds for sleep do not transfer.** Infant auditory development and sleep regulation differ; treat such claims as unproven for this population.
- **Long-term developmental effects** of nightly background music in healthy infants are largely uncharacterized in controlled studies.

---

## 7. Source List with Links

Primary scientific/medical sources used in this report (full citations in `research/sources.md`):

1. Hugh SC et al. "Infant sleep machines and hazardous sound pressure levels." *Pediatrics*. 2014 Apr;133(4):677-81. doi:10.1542/peds.2013-3617. — https://pubmed.ncbi.nlm.nih.gov/24590753/
2. Loewy J, Stewart K, Dassler AM, Telsey A, Homel P. "The effects of music therapy on vital signs, feeding, and sleep in premature infants." *Pediatrics*. 2013 May;131(5):902-18. doi:10.1542/peds.2012-1367. — https://pubmed.ncbi.nlm.nih.gov/23589814/
3. Sibrecht G et al. "Noise or sound management in the neonatal intensive care unit for preterm or very low birth weight infants." *Cochrane Database Syst Rev*. 2024 May 30;5(5):CD010333. doi:10.1002/14651858.CD010333.pub4. — https://pubmed.ncbi.nlm.nih.gov/38813836/
4. Puyana-Romero V et al. "Influence of the NICU on the Acoustic Isolation of a Neonatal Incubator." *Front Pediatr*. 2020 Sep 22;8:588. doi:10.3389/fped.2020.00588. — https://pubmed.ncbi.nlm.nih.gov/33072664/
5. NIH/NIDCD. "Noise-Induced Hearing Loss." — https://www.nidcd.nih.gov/health/noise-induced-hearing-loss
6. WHO. "Deafness and hearing loss" (fact sheet). — https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss
7. Liao JH et al. "Nonpharmacological Interventions for Sleep Promotion on Preterm Infants in NICU: A Systematic Review." *Worldviews Evid Based Nurs*. 2018;15(5):386-393. — https://pubmed.ncbi.nlm.nih.gov/30098111/
8. Lai HL et al. "Randomized controlled trial of music during kangaroo care on maternal state anxiety and preterm infants' responses." *Int J Nurs Stud*. 2006;43(2):139-46. — https://pubmed.ncbi.nlm.nih.gov/15996669/
9. Dearn T, Shoemark H. "The effect of maternal presence on premature infant response to recorded music." *JOGNN*. 2014;43(3):341-50. — https://pubmed.ncbi.nlm.nih.gov/24707819/
10. Gennattasio A et al. "Reducing Noise in the NICU." *Adv Neonatal Care*. 2024 Aug 1;24(4):333-341. — https://pubmed.ncbi.nlm.nih.gov/39042734/

---

*Document version: 1.0. Compiled from PubMed/NIH/WHO sources accessible at the time of writing. All effect-size/specific BPM/SPL recommendations should be re-verified before clinical or marketing claims.*
