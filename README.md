# Ammara Portfolio — Vercel Ready

This is a static HTML/CSS/JavaScript portfolio prepared for deployment on Vercel.

## Deploy

### Option 1: Vercel dashboard
1. Extract this ZIP.
2. Upload the extracted project to a GitHub repository.
3. In Vercel, choose **Add New → Project** and import that repository.
4. Leave the framework preset as **Other**. No build command or output directory is required.
5. Deploy.

### Option 2: Vercel CLI
From this folder, run:

```bash
npx vercel
```

Follow the prompts. To publish to production, run:

```bash
npx vercel --prod
```

## Files
- `index.html` — portfolio page
- `style.css` — responsive styling
- `script.js` — scroll-driven canvas portrait effect
- `ammara-reference.jpeg` — image used by the animation
- `ammara-portrait.jpeg` — supplied portrait asset
- `vercel.json` — static deployment configuration

## Note
The contact form is currently front-end only and does not deliver messages. Connect a form backend or email service before using it to receive real inquiries.
