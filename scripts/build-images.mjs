// Builds the social preview using the transparent portfolio portrait.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

mkdirSync('public/assets', { recursive: true });
const portrait = await sharp('public/assets/prudhviraj-portrait-1000.webp').resize({ height: 570 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    { input: portrait, top: 30, left: 790 },
    { input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <text x="65" y="220" font-family="Arial,sans-serif" font-weight="700" font-size="64" fill="#f4f1ec">BAVIGADDA</text>
      <text x="65" y="298" font-family="Arial,sans-serif" font-weight="700" font-size="64" fill="#f4f1ec">PRUDHVIRAJ</text>
      <text x="68" y="365" font-family="Arial,sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="10">THE SERIES</text>
      <text x="68" y="440" font-family="Arial,sans-serif" font-size="23" fill="#a7a6ad">BACKEND SOFTWARE ENGINEER</text>
      <text x="68" y="480" font-family="Arial,sans-serif" font-size="20" fill="#a7a6ad">JAVA · SPRING BOOT · CLOUD-NATIVE</text>
    </svg>`) },
  ])
  .jpeg({ quality: 85 })
  .toFile('public/assets/og-image.jpg');
console.log('Built Bavigadda Prudhviraj social share image');
