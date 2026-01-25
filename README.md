# Portfolio - React Components Integration

This project has been set up with React + TypeScript, Tailwind CSS, and shadcn/ui structure to integrate the WebGL Shader and Liquid Glass Button components.

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── ui/              # shadcn/ui components directory
│   │       ├── web-gl-shader.tsx
│   │       └── liquid-glass-button.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper)
│   ├── pages/
│   │   └── demo.tsx         # Demo page using the components
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # Tailwind CSS imports and theme variables
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Setup Instructions

### 1. Install Dependencies

All dependencies have been installed. If you need to reinstall:

```bash
npm install
```

### 2. Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

## Components

### WebGL Shader Component

Located at: `src/components/ui/web-gl-shader.tsx`

A WebGL shader component that creates an animated background effect using Three.js.

**Usage:**
```tsx
import { WebGLShader } from "@/components/ui/web-gl-shader"

<WebGLShader />
```

### Liquid Glass Button Component

Located at: `src/components/ui/liquid-glass-button.tsx`

A glassmorphic button component with liquid glass effect.

**Usage:**
```tsx
import { LiquidButton } from "@/components/ui/liquid-glass-button"

<LiquidButton size="xl">Let's Go</LiquidButton>
```

**Props:**
- `size`: "default" | "sm" | "lg" | "xl" | "xxl" | "icon"
- `variant`: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
- `asChild`: boolean (for composition with Radix UI)

## Why `/components/ui` Directory?

The `/components/ui` directory is the standard location for shadcn/ui components. This structure:

1. **Follows shadcn/ui conventions** - All shadcn components are placed in this directory
2. **Makes components discoverable** - Easy to find and import UI components
3. **Supports the shadcn CLI** - The `npx shadcn-ui@latest add [component]` command automatically places components here
4. **Maintains consistency** - Other developers familiar with shadcn will know where to look

## Dependencies

### Core Dependencies
- `react` & `react-dom` - React framework
- `three` - 3D graphics library for WebGL shader
- `@radix-ui/react-slot` - Radix UI primitives
- `class-variance-authority` - For component variants
- `clsx` & `tailwind-merge` - Utility for className management

### Development Dependencies
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS framework
- `@vitejs/plugin-react` - Vite React plugin

## Configuration Files

- **`components.json`**: shadcn/ui configuration (component paths, styling preferences)
- **`tailwind.config.js`**: Tailwind CSS theme and plugin configuration
- **`tsconfig.json`**: TypeScript compiler options with path aliases (`@/*` → `./src/*`)
- **`vite.config.ts`**: Vite build configuration with path alias resolution

## Path Aliases

The project uses `@/` as an alias for `src/`:

```tsx
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { cn } from "@/lib/utils"
```

This is configured in:
- `tsconfig.json` (for TypeScript)
- `vite.config.ts` (for Vite bundler)

## Demo Page

The demo page (`src/pages/demo.tsx`) showcases both components working together:
- WebGL Shader as a full-screen animated background
- Liquid Glass Button as a call-to-action button

## Next Steps

1. **Add more shadcn components**: Run `npx shadcn-ui@latest add [component-name]`
2. **Customize theme**: Edit CSS variables in `src/index.css`
3. **Extend components**: Modify components in `src/components/ui/`
4. **Add routing**: Consider adding React Router if you need multiple pages
