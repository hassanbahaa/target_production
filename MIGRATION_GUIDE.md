# Next.js Migration Guide

> **🤖 AI Agent Ready**: This guide includes structured tasks that can be fed to AI coding assistants (Cursor, GitHub Copilot, etc.) for automated completion.

---

## ⚠️ IMPORTANT: AI Agent Guidelines

**READ THIS FIRST before making any changes:**

1. **Don't overcomplicate** - Most files are already correctly placed
2. **Don't fix what's not broken** - If code works, leave it alone
3. **Focus on the listed issues only** - Don't refactor working code
4. **Test incrementally** - Run `npm run dev` after each change
5. **Preserve functionality** - Don't change logic, only fix structure

### 📁 Current File Organization

Your project is already **96% organized**. Here's where everything is:

```
project-root/
├── pages/              ← 7 route components (CORRECT)
│   ├── _app.tsx        ← Global app wrapper
│   ├── index.tsx       ← Home page (/)
│   ├── about.tsx       ← /about route
│   └── ...             ← Other pages
├── components/         ← 19 reusable components (CORRECT)
│   ├── ui/             ← 48 Shadcn UI components (CORRECT)
│   ├── Layout.tsx      ← Layout wrapper
│   └── ...             ← Other components
├── lib/                ← 3 utilities (MOSTLY CORRECT)
│   └── utils.tsx       ← Helper functions
├── styles/             ← CSS files (CORRECT)
│   └── globals.css     ← Global styles
├── public/             ← Static assets (CORRECT)
├── package.json        ← Dependencies (CORRECT)
├── next.config.js      ← Next.js config (CORRECT)
└── tailwind.config.js  ← Tailwind config (CORRECT)
```

**✅ What's Already Correct:**
- All page components in `pages/`
- All UI components in `components/` or `components/ui/`
- Utilities in `lib/`
- Styles in `styles/`
- Config files at root

**⚠️ What Needs Attention:**
- 5 files with low confidence (see below)
- 4 files with React Router code (see below)
- Vite-specific files should be removed

---

## Project Structure

Your Next.js project includes:

- `package.json` - Dependencies and scripts configured
- `next.config.js` - Basic Next.js configuration
- `.gitignore` - Proper ignore rules
- `README.md` - Getting started guide
- `public/` - Static assets folder
- `styles/` - Global styles with `globals.css`

## Transformed Files

<details>
<summary><strong>View all 81 transformed files</strong></summary>

- eslint.config.js
- postcss.config.js
- tailwind.config.js
- lib/vite.config.tsx
- pages/_app.tsx
- components/main.tsx
- lib/vite-env.d.tsx
- pages/about.tsx
- pages/contact.tsx
- pages/index.tsx
- pages/notfound.tsx
- pages/services.tsx
- pages/testimonials.tsx
- lib/utils.tsx
- components/use-mobile.tsx
- components/use-toast.tsx
- components/hotels.js
- context/LanguageContext.tsx
- components/CallButton.tsx
- components/ClientsSection.tsx
- components/ContactSection.tsx
- components/CTABanner.tsx
- components/Footer.tsx
- components/Header.tsx
- components/HeroSection.tsx
- components/ImageLightbox.tsx
- components/PlatformsSection.tsx
- components/ScrollToTop.tsx
- components/ServicesSection.tsx
- components/TestimonialsSection.tsx
- components/WhatsAppButton.tsx
- components/WhyChooseSection.tsx
- components/ui/accordion.tsx
- components/ui/alert-dialog.tsx
- components/ui/alert.tsx
- components/ui/aspect-ratio.tsx
- components/ui/avatar.tsx
- components/ui/badge.tsx
- components/ui/breadcrumb.tsx
- components/ui/button.tsx
- components/ui/calendar.tsx
- components/ui/card.tsx
- components/ui/carousel.tsx
- components/ui/chart.tsx
- components/ui/checkbox.tsx
- components/ui/collapsible.tsx
- components/ui/command.tsx
- components/ui/context-menu.tsx
- components/ui/dialog.tsx
- components/ui/drawer.tsx
- components/ui/dropdown-menu.tsx
- components/ui/form.tsx
- components/ui/hover-card.tsx
- components/ui/input-otp.tsx
- components/ui/input.tsx
- components/ui/label.tsx
- components/ui/menubar.tsx
- components/ui/navigation-menu.tsx
- components/ui/pagination.tsx
- components/ui/popover.tsx
- components/ui/progress.tsx
- components/ui/radio-group.tsx
- components/ui/resizable.tsx
- components/ui/scroll-area.tsx
- components/ui/select.tsx
- components/ui/separator.tsx
- components/ui/sheet.tsx
- components/ui/sidebar.tsx
- components/ui/skeleton.tsx
- components/ui/slider.tsx
- components/ui/sonner.tsx
- components/ui/switch.tsx
- components/ui/table.tsx
- components/ui/tabs.tsx
- components/ui/textarea.tsx
- components/ui/toast.tsx
- components/ui/toaster.tsx
- components/ui/toggle-group.tsx
- components/ui/toggle.tsx
- components/ui/tooltip.tsx
- components/use-toast.tsx

</details>


## ⚠️ Manual Fixes Required

The following issues require your attention:

### 🤔 Low Confidence File Mappings (5)

These files were mapped with lower confidence. Please verify they're in the correct location:


**1. `main.tsx`** → `components/main.tsx`

- **Confidence:** 75%
- **Reason:** Reusable component (default category)

---

**2. `vite-env.d.ts`** → `lib/vite-env.d.tsx`

- **Confidence:** 50%
- **Reason:** Unknown file type - defaulting to lib/

---

**3. `use-mobile.tsx`** → `components/use-mobile.tsx`

- **Confidence:** 75%
- **Reason:** Reusable component (default category)

---

**4. `use-toast.ts`** → `components/use-toast.tsx`

- **Confidence:** 75%
- **Reason:** Reusable component (default category)

---

**5. `hotels.js`** → `components/hotels.js`

- **Confidence:** 75%
- **Reason:** Reusable component (default category)

---





## Getting Started

### Step 1: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 2: Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.


## File Organization

### Pages (Route Components)

Files that define routes should be in the `pages/` folder:

- `Home.tsx` → `pages/index.tsx` (home page at `/`)
- `About.tsx` → `pages/about.tsx` (about page at `/about`)
- `User.tsx` → `pages/user/[id].tsx` (dynamic route at `/user/:id`)

### Components (Reusable UI)

UI components should be in `components/` or `src/components/`:

- Already organized based on your folder selections
- No changes needed unless reorganizing


## Routing in Next.js

Next.js uses file-based routing where file location determines the URL:

**Static Routes:**

- `pages/index.tsx` → `/`
- `pages/about.tsx` → `/about`
- `pages/blog/post.tsx` → `/blog/post`

**Dynamic Routes:**

- `pages/user/[id].tsx` → `/user/:id`
- `pages/blog/[slug].tsx` → `/blog/:slug`
- `pages/[...slug].tsx` → Catch-all routes


## Import Paths

Import paths are automatically updated when files are moved. If you encounter broken imports:

```typescript
// Update relative paths based on new file location
import Component from '../components/Component'
import { helper } from '../../lib/helpers'
```


## Configuration

### next.config.js

Basic configuration is included. Customize as needed:

```javascript
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  // Add your custom config
}
```

### Environment Variables

Create `.env.local` for environment variables:

```
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.


## 🤖 AI Agent Instructions

### Quick Start for AI Assistants

```
Context: React to Next.js migration with 81 transformed files
Goal: Complete the migration and ensure the project builds successfully
Framework: Next.js 14 (Pages Router)
Status: 96% complete - only minor fixes needed
```

### ⛔ What NOT to Do

**DO NOT:**
- ❌ Refactor working code
- ❌ Change component logic or functionality
- ❌ Reorganize files that are already correctly placed
- ❌ Add new features or optimizations
- ❌ Modify styling or UI behavior
- ❌ Change variable names or code structure
- ❌ Add TypeScript types if not already present
- ❌ Rewrite components in different patterns

**DO:**
- ✅ Fix only the specific issues listed below
- ✅ Move misplaced files to correct directories
- ✅ Update import paths after moving files
- ✅ Remove Vite/CRA specific files
- ✅ Replace React Router with Next.js routing
- ✅ Test that the build works

**Remember**: The code is already transformed and working. Your job is to fix file organization and routing, not to rewrite the application.

---

### Task List


#### Task 0: React Router Migration (Priority: CRITICAL)

4 file(s) contain React Router code that needs manual updates:

1. **pages/_app.tsx** (CRITICAL)
   - Detected: Route components, Router wrapper
   - Action: Replace with Next.js equivalents

2. **pages/notfound.tsx** (HIGH)
   - Detected: useLocation hook
   - Action: Replace with Next.js equivalents

3. **components/Header.tsx** (HIGH)
   - Detected: useLocation hook
   - Action: Replace with Next.js equivalents

4. **components/ScrollToTop.tsx** (HIGH)
   - Detected: useLocation hook
   - Action: Replace with Next.js equivalents

**AI Agent Prompt:**
```
Replace React Router code with Next.js equivalents in the files listed above:

1. Replace <Link to="/path"> with Next.js <Link href="/path">
   - Import: import Link from 'next/link'
   - Wrap children in <a> tag if needed

2. Replace useNavigate() with Next.js router
   - Import: import { useRouter } from 'next/router'
   - const router = useRouter()
   - navigate('/path') → router.push('/path')
   - navigate(-1) → router.back()

3. Replace useLocation() with Next.js router
   - Import: import { useRouter } from 'next/router'
   - const router = useRouter()
   - location.pathname → router.pathname
   - location.search → router.query

4. Replace useParams() with Next.js router
   - Import: import { useRouter } from 'next/router'
   - const router = useRouter()
   - const { id } = useParams() → const { id } = router.query

5. Remove <BrowserRouter>, <HashRouter>, <Routes>, <Route>
   - Next.js uses file-based routing
   - Move route components to pages/ directory
   - File location determines the URL

Example transformation:
```jsx
// Before (React Router)
import { Link, useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={() => navigate('/home')}>Go Home</button>
    </div>
  );
}

// After (Next.js)
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  return (
    <div>
      <Link href="/about"><a>About</a></Link>
      <button onClick={() => router.push('/home')}>Go Home</button>
    </div>
  );
}
```
```




#### Task 1: File Reorganization (Priority: HIGH)

5 files need review and potential relocation:

1. **main.tsx** (75% confidence)
   - Current: `components/main.tsx`
   - Reason: Reusable component (default category)
   - Action: Review and move to appropriate directory if needed

2. **vite-env.d.ts** (50% confidence)
   - Current: `lib/vite-env.d.tsx`
   - Reason: Unknown file type - defaulting to lib/
   - Action: Review and move to appropriate directory if needed

3. **use-mobile.tsx** (75% confidence)
   - Current: `components/use-mobile.tsx`
   - Reason: Reusable component (default category)
   - Action: Review and move to appropriate directory if needed

4. **use-toast.ts** (75% confidence)
   - Current: `components/use-toast.tsx`
   - Reason: Reusable component (default category)
   - Action: Review and move to appropriate directory if needed

5. **hotels.js** (75% confidence)
   - Current: `components/hotels.js`
   - Reason: Reusable component (default category)
   - Action: Review and move to appropriate directory if needed

**AI Agent Prompt:**
```
Review the files listed above and determine if they should be relocated:
- Hooks (use*.tsx) → move to hooks/
- Type definitions (*.d.ts) → move to types/
- Config files → keep at root or delete if Vite-specific
- Entry files (main.tsx, index.tsx with ReactDOM) → mark for deletion
```


#### Task 2: Remove Vite/CRA Specific Files

The following files are build-tool specific and should be removed or replaced:

1. `lib/vite.config.tsx` - Vite config (not needed in Next.js)
2. `components/main.tsx` - React entry point (Next.js handles this)
3. `lib/vite-env.d.tsx` - Vite config (not needed in Next.js)

**AI Agent Prompt:**
```
Delete the files listed above as they are not needed in Next.js:
- Vite configs are replaced by next.config.js
- React entry points (main.tsx, index.tsx with ReactDOM.render) are handled by Next.js
- Move any global providers from these files to pages/_app.tsx
```

#### Task 3: Update Import Paths

Check for broken relative imports after file reorganization.

**AI Agent Prompt:**
```
Scan all files for import statements and:
1. Update relative paths (../, ./) based on new file locations
2. Consider adding path aliases to next.config.js:
   {
     webpack: (config) => {
       config.resolve.alias = {
         ...config.resolve.alias,
         '@': path.resolve(__dirname, './'),
         '@/components': path.resolve(__dirname, './components'),
         '@/lib': path.resolve(__dirname, './lib'),
       };
       return config;
     }
   }
3. Replace relative imports with alias imports where appropriate
```

#### Task 4: Verify Build

**AI Agent Prompt:**
```
1. Run: npm install
2. Run: npm run dev
3. Check for errors in terminal
4. Fix any TypeScript errors
5. Fix any missing dependencies
6. Run: npm run build
7. Verify build succeeds
```

### Expected Issues & Solutions

| Issue | Solution |
|-------|----------|
| Module not found errors | Update import paths or install missing dependencies |
| TypeScript errors | Add missing type definitions or update tsconfig.json |
| CSS import errors | Ensure CSS files are in styles/ or imported in _app.tsx |
| API route errors | Move API handlers to pages/api/ |
| Environment variables | Create .env.local with NEXT_PUBLIC_ prefix for client vars |

### Success Criteria

- [ ] All files in correct directories (pages/, components/, lib/, etc.)
- [ ] No Vite/CRA specific files remaining
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] All pages accessible at correct routes
- [ ] No console errors in browser


## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs) - Complete Next.js guide
- [Next.js Tutorial](https://nextjs.org/learn) - Interactive learning
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples) - Code examples


## Deployment Checklist

1. Extract and open the project
2. Run `npm install`
3. Run `npm run dev` to test locally
4. Review all transformed files
5. Test application features
6. Run `npm run build` to verify production build
7. Deploy to Vercel, Netlify, or your preferred platform

---
Generated by ReactToNext.com
81 files successfully converted
