# VCC Concept Site Design
**Date**: 2026-03-06
**Purpose**: Create three full landing page concepts for Victory Christian Centre showing different design directions

## Overview

Build a Next.js site with three complete homepage variations inspired by:
- Austin Stone (default homepage at `/`)
- Passion City (`/passion-style`)
- Bay Hope (`/bayhope-style`)

Each page showcases VCC's actual content styled according to each reference site's design philosophy. A persistent top switcher bar allows stakeholders to navigate between concepts.

## Architecture

### Routing Structure
- `/` - Austin Stone-inspired design (default)
- `/passion-style` - Passion City-inspired design
- `/bayhope-style` - Bay Hope-inspired design

### Top Switcher Component
- Fixed bar above each header
- Three navigation options: "Austin Stone Style" | "Passion City Style" | "Bay Hope Style"
- Highlights current active style
- Persistent across all routes

### Shared Data Layer
Create `/data` folder with TypeScript files:
- `services.ts` - Service times, locations from victorychristiancentre.co.nz
- `ministries.ts` - Kids, youth, adult programs with descriptions
- `team.ts` - Pastoral team information and bios
- `missions.ts` - Mission statement, values, outreach programs
- `events.ts` - Sample events data
- `sermons.ts` - Latest sermon series information

### Shared Assets
- `/public/images/` - Hero images, team photos, ministry photos, VCC logo
- Initially placeholders, replaceable with actual VCC photography

## Navigation Structure Mapping

### Austin Stone Style (/)
**Mega-menu approach with organized categories:**
- **Media** → Watch (sermons, live stream, YouTube), Resources (message outlines, podcast)
- **Ministries** → Kids, Youth, Adults, Families, Connect Groups
- **Community** → Serve, Missions, Courses
- **Get Involved** → Sunday Services, New Here, Events
- **About Us** - Standard link
- **Give** - Prominent CTA button

**Showcase dropdown**: Ministries mega-menu fully functional

### Passion City Style
**Minimalist top-level navigation:**
- About
- Ministries
- Watch
- Give
- "New Here?" - Prominent CTA

Mission tagline under logo emphasizing VCC's purpose.

**Showcase dropdown**: Ministries simple vertical list

### Bay Hope Style
**Friendly, accessible navigation:**
- "New here?"
- Ministries
- Watch
- Events
- Get Connected
- "Give here" - Prominent top-right button

**Showcase dropdown**: Ministries with colorful categorization

## Visual Design Specifications

### Austin Stone Style
**Visual Identity:**
- Deep brand blue accent color (#003366 or similar)
- Clean white backgrounds
- High contrast for accessibility
- Professional, sophisticated aesthetic

**Components:**
- **Header**: White background, mega-menu with icons and organized dropdowns
- **Hero**: Full-width congregation photography, bold typography overlay, service times/locations prominent
- **Content Sections**:
  - What to Expect (newcomer information)
  - Ministry highlights in card grid layout
  - Latest sermon series with video embed
  - Mission/values statement
  - Events calendar preview
- **Footer**: Comprehensive multi-column layout with full navigation
- **Typography**: Modern sans-serif (Inter or similar), multiple weights (300-700)

### Passion City Style
**Visual Identity:**
- Neutral color palette (blacks, grays, whites)
- Ample whitespace and breathing room
- Minimalist, purpose-driven clarity
- Contemporary without being flashy

**Components:**
- **Header**: Minimalist with generous spacing, mission tagline below logo
- **Hero**: Large hero image, simple text overlay - "For God. For people. For Victory."
- **Content Sections**:
  - Leadership/pastoral team profiles with family imagery
  - Simple service information cards
  - Recent sermon with minimal styling
  - Values/mission with clean typography hierarchy
  - Community stories/testimonials
- **Footer**: Simple organized links without visual clutter
- **Typography**: Clean readable fonts with generous line-height

### Bay Hope Style
**Visual Identity:**
- Vibrant, warm color palette
- Friendly, approachable tone
- Modern with personality
- Emphasis on accessibility and welcome

**Components:**
- **Header**: Colorful accents, prominent "Give here" CTA, welcoming design
- **Hero**: Personal imagery with friendly greeting - "Hey! Welcome to Victory Christian Centre"
- **Content Sections**:
  - Campus locations with photography
  - "Bringing hope to [community]" tagline integration
  - Ministry areas with colorful cards (Kids, Students, Special Needs)
  - Live streaming/watch options prominent
  - Prayer request CTA
- **Footer**: Resource links, campus info, social media prominent
- **Typography**: Modern approachable fonts (Montserrat/Lato style)

## Technical Stack

- **Framework**: Next.js 16 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Next.js Google Fonts (Inter, Montserrat, Lato as needed)
- **Images**: Next.js Image component for optimization
- **Responsive**: Mobile-first design approach

## Content Requirements

Extract from victorychristiancentre.co.nz:
- Service times and locations
- Ministry program names and descriptions
- Mission statement and values
- Pastoral team information
- Current sermon series
- Contact information
- Navigation menu items

Adapt content to fit each design's navigation philosophy while maintaining VCC's authentic voice and information.

## Implementation Priorities

1. Set up shared data structure with VCC content
2. Create top switcher component
3. Build Austin Stone style (default homepage)
4. Build Passion City style page
5. Build Bay Hope style page
6. Add responsive breakpoints for mobile/tablet
7. Polish interactions and transitions
8. Add placeholder images with proper aspect ratios

## Success Criteria

- All three concepts show complete landing pages with authentic VCC content
- Navigation structure clearly demonstrates three different organizational approaches
- Each design authentically captures the reference site's visual philosophy
- Switcher bar allows seamless comparison between concepts
- Responsive design works across mobile, tablet, desktop
- One functional dropdown menu per concept demonstrates interaction patterns
