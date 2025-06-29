# Chetan Chaudhari Portfolio

## Overview

This is a professional portfolio website for Chetan Chaudhari, an AI/ML Engineer at Tech Mahindra. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, featuring a modern design with shadcn/ui components and Tailwind CSS styling.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom color variables for brand consistency
- **UI Components**: shadcn/ui component library based on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution during development
- **Production Build**: esbuild for efficient server-side bundling

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but not actively used in current implementation)
- **Provider**: Neon Database serverless PostgreSQL
- **Schema**: User management schema defined in shared directory
- **Storage**: Currently using in-memory storage implementation for development

### UI Components
- Comprehensive shadcn/ui component library including:
  - Navigation components (menus, breadcrumbs)
  - Form components (inputs, selects, checkboxes)
  - Layout components (cards, dialogs, sheets)
  - Feedback components (toasts, alerts, progress)
  - Data display components (tables, charts, carousels)

### Portfolio Sections
- **Hero Section**: Introduction with professional photo and call-to-action
- **About Section**: Personal background and key statistics
- **Experience Section**: Professional work history with timeline design
- **Projects Section**: Featured projects with descriptions and achievements
- **Skills Section**: Technical skills organized by categories
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact information and social media links

## Data Flow

1. **Static Content**: Portfolio content is statically defined in React components
2. **Resume Download**: Server endpoint provides resume file download functionality
3. **Client-Side Navigation**: Smooth scrolling navigation between portfolio sections
4. **Responsive Design**: Mobile-first approach with responsive breakpoints
5. **Asset Management**: Images served from external CDN (Unsplash) and local assets

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- UI library (Radix UI components, shadcn/ui)
- Styling (Tailwind CSS, class-variance-authority, clsx)
- Utilities (date-fns, wouter for routing)

### Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Authentication/Session management (connect-pg-simple for PostgreSQL sessions)
- Development tools (tsx, esbuild for building)

### Development Dependencies
- Vite with React plugin for development server
- TypeScript for type safety
- PostCSS with Tailwind CSS for styling
- Replit-specific plugins for development environment

## Deployment Strategy

### Development
- Vite development server with HMR (Hot Module Replacement)
- tsx for running TypeScript server code
- Replit integration with runtime error overlay and cartographer

### Production Build
1. Frontend: Vite builds React application to `dist/public`
2. Backend: esbuild bundles server code to `dist/index.js`
3. Static assets served from build directory
4. Express server serves both API routes and static frontend

### Environment Configuration
- Environment variables for database connection
- Separate development and production configurations
- Database migrations managed through Drizzle Kit

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 29, 2025. Initial setup