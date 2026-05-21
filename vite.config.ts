import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json';

function resolveBaseFromHomepage(homepage?: string): string {
  if (!homepage) return '/';
  try {
    const pathname = new URL(homepage).pathname;
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  } catch {
    return '/';
  }
}

export default defineConfig({
  plugins: [react()],
  base: resolveBaseFromHomepage((packageJson as { homepage?: string }).homepage),
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
