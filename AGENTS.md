# simple-money

Monetary system: coins (copper, iron, gold), paper banknotes and an ATM block.
Economy built on crafting recipes. Namespace `money:`. min_engine 1.20.0,
version 1.0.168 — the most frequently bumped project in the set.

## Economy

```
1 ingot + 1 emerald → 9 coins
4 copper = 1 iron
5 iron   = 1 gold
2 gold   = 1 banknote
coins can be smelted back into nuggets
```
Relative values: copper 1, iron 4, gold 20, banknote 40.

## ATM texture generation

`generate_atm_textures.sh` — **pure ImageMagick, no PIL**, and the only shell
texture generator in the set (everything else uses Python). Renders 256×256 PNGs
for the six faces in `RP/textures/blocks/`. The front face draws a screen, a 3×4
keypad and a slot.

## Conventions

- `crafting.md` is entirely in Polish, using emoji as currency symbols
  (`🟤 ⚪ 🟡 💵 🟫 ⬜ 🟨 💎 🔸`) and emoji section headers
  (`🪙 🎯 🔄 🏭 🔥 📊`).
- `crafting.mc` is the same material in rule/command form.
- Translations `["en_US", "pl_PL"]`.

## Known issues

- **`generate_atm_textures.sh` has the left/right names swapped.** Line 59
  comments "Left texture" and writes `atm_right.png`; line 70 comments
  "Right texture" and writes `atm_left.png`. Fix the comments and the
  filenames together — fixing only one side would swap the textures on the model.
- `config.json` has `authors: ["tymot, Flower7C3"]` — a single string with an
  embedded comma instead of two array entries, so the author name is mangled.
- `config.json` lists only one `experimentalGameplay` flag
  (`upcomingCreatorFeatures`); other projects list seven.
- `config.json` uses tabs for indentation, unlike the rest of the set.
- No Script API — the pack is recipes and blocks only.
- No `package.json` in this project.