# View Properties – Next.js + Tailwind

Boutique homepage for View Minho (stays) and View Properties (real estate).

## Requirements
- Node.js (LTS) from https://nodejs.org

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel recommended)
1. Create a GitHub repo and push this project:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/view-properties.git
git push -u origin main
```
2. Go to https://vercel.com → New Project → Import your repo.
3. After deploy, in Vercel: Project Settings → Domains → add **viewminho.com** and follow the DNS steps.

## Customize
- Edit `pages/index.js` for homepage content.
- Update contact info in the footer.
- Add pages for `/stays`, `/properties`, `/experiences` later.
"# view-properties" 
