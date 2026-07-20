import { chromium } from 'playwright';

const OUT = '/tmp/claude-1000/-home-gabriel-Projetos-Candidato-Amauri/3502feaf-68b1-4b41-945a-275e8b5fa57d/scratchpad';
const url = 'http://localhost:4322/';
const tag = process.argv[2] || 'now';

const shots = [
  { name: 'desktop', w: 1440, h: 900 },
  { name: 'desktop-lg', w: 1920, h: 1080 },
  { name: 'tablet', w: 768, h: 1024 },
  { name: 'mobile', w: 390, h: 844 },
  { name: 'mobile-sm', w: 360, h: 640 },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${tag}-${s.name}.png` });
  await page.close();
}
await browser.close();
console.log('done', tag);
