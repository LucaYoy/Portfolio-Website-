# Firebase Hosting Deployment Guide

## ✅ Your Project is Ready!

Your portfolio is configured for **static Firebase Hosting** (perfect for portfolios with no backend).

## Quick Deploy Steps

### 1. Install Firebase CLI (if not installed)
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Create a Firebase Project
- Go to https://console.firebase.google.com
- Click "Add project"
- Follow the wizard (you can disable Google Analytics)
- Copy your project ID

### 4. Update `.firebaserc`
Replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### 5. Build Your Site
```bash
npm run build
```

This creates the `out/` folder with your static site.

### 6. Deploy to Firebase
```bash
firebase deploy --only hosting
```

That's it! Your site will be live at: `https://your-project-id.web.app`

## What Was Configured

✅ **Next.js** - Static export mode  
✅ **Firebase Hosting** - Serves the `out/` folder  
✅ **Image optimization** - Disabled (not needed for static)  
✅ **Caching headers** - Optimized for performance  

## Troubleshooting

**"Project not found"**  
→ Update `.firebaserc` with correct project ID

**"Permission denied"**  
→ Run `firebase login` again

**Build fails**  
→ Check for TypeScript errors: `npm run typecheck`

## Cost

Firebase Hosting free tier includes:
- 10 GB storage
- 360 MB/day bandwidth
- Custom domain support

Perfect for portfolios! 🎉
