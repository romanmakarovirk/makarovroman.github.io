# Setup Instructions

## ✅ Project Setup Complete

Your project has been successfully configured with:

- ✅ React 18 + TypeScript
- ✅ Vite build tool
- ✅ Tailwind CSS
- ✅ shadcn/ui project structure
- ✅ All required components integrated
- ✅ Dependencies installed

## 📁 Component Locations

### Components Directory Structure

The default path for components is `/src/components/ui/` which follows shadcn/ui conventions:

- **Why this path?**: 
  - shadcn/ui CLI automatically places components here
  - Industry standard for component libraries
  - Makes components easily discoverable
  - Supports the `@/components/ui` import alias

### Component Files

1. **WebGL Shader**: `src/components/ui/web-gl-shader.tsx`
2. **Liquid Glass Button**: `src/components/ui/liquid-glass-button.tsx`
3. **Demo Page**: `src/pages/demo.tsx`

## 🚀 Quick Start

### 1. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the demo.

### 2. Build for Production

```bash
npm run build
```

## 📦 Installed Dependencies

### Core Dependencies
- `three` - WebGL/3D graphics library
- `@radix-ui/react-slot` - Radix UI primitives
- `class-variance-authority` - Component variant management
- `clsx` & `tailwind-merge` - ClassName utilities

### Development Dependencies
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `tailwindcss-animate` - Animation utilities

## 🔧 Configuration Files

1. **`components.json`** - shadcn/ui configuration
   - Component paths: `@/components/ui`
   - Style: default
   - CSS variables enabled

2. **`tailwind.config.js`** - Tailwind configuration
   - Dark mode: class-based
   - Content paths configured
   - Theme variables for shadcn/ui

3. **`tsconfig.json`** - TypeScript configuration
   - Path alias: `@/*` → `./src/*`
   - Strict mode enabled

4. **`vite.config.ts`** - Vite configuration
   - React plugin enabled
   - Path alias resolution

## 📝 Usage Examples

### WebGL Shader Component

```tsx
import { WebGLShader } from "@/components/ui/web-gl-shader"

function MyPage() {
  return (
    <div className="relative">
      <WebGLShader />
      {/* Your content here */}
    </div>
  )
}
```

### Liquid Glass Button

```tsx
import { LiquidButton } from "@/components/ui/liquid-glass-button"

function MyPage() {
  return (
    <LiquidButton size="xl" variant="default">
      Click Me
    </LiquidButton>
  )
}
```

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS with custom theme variables defined in `src/index.css`. The theme supports:

- Light and dark modes
- Custom color palette
- shadcn/ui compatible variables

### CSS Variables

All theme colors are defined as CSS variables in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}
```

## 🔍 Path Aliases

The project uses `@/` as an alias for `src/`:

```tsx
// Instead of:
import { WebGLShader } from "../../components/ui/web-gl-shader"

// Use:
import { WebGLShader } from "@/components/ui/web-gl-shader"
```

## 📚 Next Steps

1. **Add more shadcn components**:
   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add card
   ```

2. **Customize theme**: Edit CSS variables in `src/index.css`

3. **Add routing**: Install React Router if needed:
   ```bash
   npm install react-router-dom
   ```

4. **Extend components**: Modify components in `src/components/ui/` to fit your needs

## ⚠️ Important Notes

- The `/components/ui` directory is required for shadcn/ui CLI to work properly
- Always use the `@/` alias for imports from `src/`
- Components use the `"use client"` directive for client-side rendering
- The WebGL Shader component requires a canvas element and uses Three.js

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check TypeScript errors:
   ```bash
   npm run build
   ```

### Tailwind Not Working

1. Ensure `src/index.css` is imported in `src/main.tsx`
2. Check `tailwind.config.js` content paths
3. Verify PostCSS configuration

### Component Import Errors

1. Check path aliases in `tsconfig.json` and `vite.config.ts`
2. Ensure components are in `src/components/ui/`
3. Use `@/` alias for imports
