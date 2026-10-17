# BAVIGADDA PRUDHVIRAJ — THE SERIES

A cinematic, streaming-inspired portfolio for **Bavigadda Prudhviraj**, a backend software engineer working with Java, Spring Boot, microservices and cloud-native systems.

The original opening sequence, profile selection, section ordering, project overlays and resume viewer are retained. Content is based on the supplied resume, including work at MobileProgramming.com for AJIO – Reliance Retail, previous experience at Virtusa, and a personal banking microservices project.

## Run locally

Open this folder in VS Code and use the integrated terminal:

```powershell
npm install
npm run dev
```

Open the Local URL printed by Vite, usually http://localhost:5173. Press Ctrl+C in the terminal to stop the server.

## Production build

```powershell
npm run build
npm run preview
```

The static site is written to `dist/`.

## Update content

Edit `src/data/portfolio.ts` for identity, contact details, education, experience, projects, skills, certifications, career highlights, seasons and intro slides.

The downloadable resume is `public/assets/Bavigadda_Prudhviraj_Resume.pdf`.

The supplied portrait is used across the opening, hero, About section, intro reel and profile avatars. Transparent WebP variants at 360, 720 and 1000 pixels wide live in `public/assets/`, with the shared source and responsive variants configured through `profile.portrait`. Run `npm run images` to regenerate the social share preview. The avatar uses the 360-pixel variant with its own face crop.

All 16 certificate files are included in `public/assets/certificates/`: 10 PDFs and 6 Scaler PNGs, each with View and Download links. Oracle Java plus Scaler Backend, HLD, LLD, Databases & SQL, and DSA are highlighted. Scaler DSA covers core and advanced topics as one certificate.

Scaler learning highlights use the supplied dashboard screenshots: 794 problems solved, a best streak of 237, and a best contest rank of 2/20 (1 September 2023). These are a shared snapshot, not live statistics. Current studies are described as Master of Science in Computer Science through Scaler, in progress, as confirmed by the owner. No degree-awarding university is named because it has not been supplied.

## Share the project

Zip this project folder including `src/`, `public/`, `scripts/`, `index.html`, package files and configuration files. You can omit `node_modules/` and `.git/`. The recipient runs `npm install` followed by `npm run dev`. All linked certificate PDFs and the resume are inside `public/`; the recipient does not need your original folders.

For hosting, run `npm run build` and share or deploy the complete `dist/` folder. Vite copies the PDFs into `dist/assets/` automatically. Serve the site with a web server; opening `index.html` directly by double-clicking is not supported.

Project repository links and credential verification links are omitted when not supplied. Professional work is labeled separately from the personal banking project.

This is a personal portfolio with a fictional streaming-platform look and is not affiliated with a streaming service.

## Latest portfolio update

Added the in-development Reliance Digital and JioMart Digital pricing automation platform under the current MobileProgramming.com / AJIO – Reliance Retail engagement. Project details include Java 21, Google Cloud Pub/Sub, Kafka, competitor analysis, margin and deal-price recommendations, performance benchmarking, message-volume-based autoscaling and processing hundreds of thousands of records within minutes. Related experience, highlights, journey, skills and intro slides are updated. The hero now also shows the in-progress Master of Science in Computer Science through Scaler. The supplied downloadable resume PDF remains the original file.

The current engagement covers four pricing platforms: Offline Benchmarking, Online F&M, AJIO Pricing, and the Reliance Digital / JioMart Digital platform (in development). Ownership highlights, project summaries, experience, journey episodes and intro slides use this four-platform scope consistently.

Portrait prepared with built-in imagegen from the supplied photo. Edit brief: preserve identity, glasses, hair, expression and blue shirt; remove the black background to transparency and add subtle crimson edge lighting to match the existing dark cinematic design. Production assets: `public/assets/prudhviraj-portrait-{360,720,1000}.webp`.

The `portrait-blend` CSS mask softly feathers the shirt sides below shoulder level and the lower edge in the hero, About, opening and intro reel. The upper head/hair region stays fully visible, and the source portrait and avatar crop are unchanged.

Portfolio branding uses the capital BP monogram for Bavigadda Prudhviraj: BP SERIES in navigation, hero and footer; BP ORIGINAL on project cards and dialogs; and a matching BP favicon.

All seven skill categories use local SVG icons from `react-icons` in place of letter abbreviations. Technology marks and concept symbols are mapped in `src/components/SkillIcon.tsx`, sized at 26 px and tinted with the existing category colour; full names and hover/tap evidence remain visible. Icons are bundled with the site and need no external image requests.
