# BeetleKeys

A full-stack application built with Next.js, Tailwind CSS, and Node.js/Express backend.

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **CORS** - Cross-origin resource sharing

## Project Structure

```
BeetleKeys/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── backend/            # Node.js backend
│   ├── server.ts       # Express server
│   └── tsconfig.json   # Backend TypeScript config
├── docs/               # Documentation
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # Frontend TypeScript config
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

**Run Frontend (Next.js):**
```bash
npm run dev
```
The frontend will be available at [http://localhost:3000](http://localhost:3000)

**Run Backend (Node.js/Express):**
```bash
npm run backend
```
The backend will be available at [http://localhost:5000](http://localhost:5000)

**Run Both Concurrently:**
Open two terminal windows and run the commands above separately.

### Build for Production

**Build Frontend:**
```bash
npm run build
npm start
```

**Build Backend:**
```bash
npm run backend:build
npm run backend:start
```

## API Endpoints

The backend provides the following endpoints:

- `GET /api` - Welcome message
- `GET /api/health` - Health check endpoint

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js for production
- `npm start` - Start Next.js production server
- `npm run backend` - Start backend development server with nodemon
- `npm run backend:build` - Build backend TypeScript to JavaScript
- `npm run backend:start` - Start backend production server

## Environment Variables

Create a `.env.local` file in the root directory for frontend environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Create a `.env` file in the backend directory for backend environment variables:

```env
PORT=5000
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express Documentation](https://expressjs.com/)

## License

ISC
