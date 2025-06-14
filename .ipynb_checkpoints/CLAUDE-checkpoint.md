# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Next.js 15 application configured for deployment on Cloudflare using OpenNext.js. The project follows the standard Next.js App Router structure:

- `src/app/` - Next.js App Router pages and layouts
- `public/` - Static assets (SVG icons, images)
- `raw/` - Documentation source files (appears to be content for a guide)

## Development Commands

### Primary Development
- `pnpm dev` - Start development server with Turbopack (preferred)
- `pnpm build` - Production build
- `pnpm start` - Start production server locally
- `pnpm lint` - Run ESLint

### Cloudflare Deployment
- `pnpm preview` - Build and preview on Cloudflare locally
- `pnpm deploy` - Build and deploy to Cloudflare

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono (from Google Fonts)
- **Deployment**: Cloudflare via OpenNext.js
- **Package Manager**: pnpm (evidenced by pnpm-lock.yaml)

## Configuration Notes

- Uses Turbopack for faster development builds
- Configured for Cloudflare deployment with `@opennextjs/cloudflare`
- TypeScript enabled with strict configuration
- PostCSS configured for Tailwind CSS processing