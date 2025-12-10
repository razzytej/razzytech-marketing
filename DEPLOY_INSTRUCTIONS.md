# Deploy RazzyTech Marketing Site to Vercel

## Quick Deployment (5 minutes)

### Step 1: Push to GitHub

1. Go to https://github.com/new
2. Repository name: `razzytech-marketing`
3. Make it **Public** (or Private if you prefer)
4. **DO NOT** initialize with README
5. Click "Create repository"

6. Then run these commands in Terminal:
```bash
cd /Users/tejarora/Downloads/RazzyTech/razzytech-marketing
git remote add origin https://github.com/YOUR_USERNAME/razzytech-marketing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Select your `razzytech-marketing` repository
5. Framework Preset: **Next.js** (should auto-detect)
6. Click "Deploy"

That's it! Vercel will give you a live URL in ~2 minutes.

---

## What You Get

- Live URL: `razzytech-marketing.vercel.app`
- Auto-deploy on every git push
- Free SSL certificate
- Global CDN
- Automatic optimizations

---

## Custom Domain (Optional)

To use your own domain (e.g., razzytech.com):

1. In Vercel dashboard → Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

---

Your site is ready! All 4 pages are built:
- Homepage: /
- How It Works: /how-it-works
- Pricing: /pricing
- Contact: /contact
