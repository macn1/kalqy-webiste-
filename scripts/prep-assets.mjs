// Converts approved Kalqy source art (copied from the public kalqy.in site) into web-sized WebP.
import sharp from "sharp";
const [src, out] = process.argv.slice(2);
const jobs = [
  ["hero.png", "brand/hero.webp", 1100],
  ["b2b/b2b5.png", "brand/classroom.webp", 1200],
  ["book_now_tortoise.png", "brand/tortoise.webp", 520],
  ["book_now_kalqy.png", "brand/kalqy-mascot.webp", 520],
  ["sky_reader_fg.png", "games/sky-reader-quest.webp", 560],
  ["rythem_fg.png", "games/rhythm-rebel.webp", 560],
  ["sea_fg.png", "games/sea-sparkle.webp", 560],
  ["wiz.png", "games/marble-madness.webp", 560],
  ["zen_fg.png", "games/zen-zone.webp", 560],
  ["chicken.png", "games/egg-game.webp", 560],
  ["plant.png", "games/power-plant.webp", 560],
];
for (const [f, o, w] of jobs) {
  const info = await sharp(`${src}/${f}`).resize({ width: w, withoutEnlargement: true }).webp({ quality: 82, alphaQuality: 90 }).toFile(`${out}/${o}`);
  console.log(o, info.width + "x" + info.height, Math.round(info.size / 1024) + "KB", "alpha:", info.channels === 4);
}
