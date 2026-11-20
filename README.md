<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# AI Studio React Template

A modern React + Vite + Tailwind CSS template for building AI Studio applications with Google Gemini API integration.

[View demo on AI Studio](https://ai.studio/apps/d5d54824-a114-4ae4-bedc-da83aa3a7faf) • [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-studio-react-template)

## 🚀 Quick Start

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your GEMINI_API_KEY

# 3. Run development server
npm run dev
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (Vite, port 3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Type-check with TSC |

## 🌐 Deployment

### Vercel

This project is ready to deploy on Vercel. The `vite.config.ts` includes Express server setup for API routes.

### Netlify

Alternatively, use the built `dist` folder for Netlify deployments.

## 🛠️ Project Structure

```
src/
  App.tsx          # Main application component
  index.css        # Tailwind CSS entry point
main.tsx           # React root rendering
public/            # Static assets
.env.example       # Environment variables template
```

## 🔧 Configuration

- **Tailwind CSS v4** - Configure in `tailwind.config.js` if needed
- **Vite aliases** - `@/*` maps to `src/` directory
- **Express server** - Included for API route handling

## 📄 License

MIT License - feel free to use this template for your own AI Studio applications.
