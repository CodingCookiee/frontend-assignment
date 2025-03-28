# Frontend Assignment - Page Selection Modal

## Tech Stack

- React 19 with Vite
- Tailwind CSS for styling
- Radix UI primitives for accessible components
- Framer Motion for animations
- Class Variance Authority for component variants

## Components

### Modal
A modal dialog for selecting pages with:
- "All pages" master checkbox
- Individual page selection
- Clean dividers
- Action button

### Checkbox
A customizable checkbox component with:
- Primary and secondary variants
- Hover effects with subtle blue halo
- Checked state styling

### SelectPage
A component combining text and checkbox for page selection.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/CodingCookiee/frontend-assignment
cd frontend-assignment
```

2. Install dependencies:
```bash
npm install --force
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build

To build the project for production:

```bash
npm run build
```

## Preview

To preview the production build:

```bash
npm run preview
```

## Linting

To lint the codebase:

```bash
npm run lint
```

## Project Structure

- `src/components/ui/` - UI components (Button, Checkbox, Modal, etc.)
- `src/components/layout/` - Layout components (Header, Main)
- `src/lib/` - Utility functions
- `src/styles/` - Custom CSS and styling utilities

## Dependencies

- React 19
- Radix UI components
- Tailwind CSS 4
- Framer Motion
- Lucide React (for icons)
- Class Variance Authority
