# FitLog

FitLog is a modern workout library and personal workout planning application built with Next.js and TypeScript. It allows users to explore workouts, view detailed exercise information, add exercises to today's plan, save exercises for later, and manage their plans through a responsive dark-themed interface.

## Project Description

FitLog is designed as a simple, focused fitness companion. Users can browse a collection of workouts, sort workouts by duration, calories, or rating, open individual workout details, and organize exercises into their personal plans.

The application uses React Context for shared plan state and localStorage to keep the user's Today Plan and Saved exercises available after refreshing the page.

## Technologies Used

- **Next.js** – React framework with App Router
- **TypeScript** – Type-safe development
- **React** – Component-based UI and state management
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – UI styling utilities
- **Lucide React** – Icons
- **Sonner** – Toast notifications
- **Lottie React** – Animated 404 page
- **Context API** – Global workout plan state
- **localStorage** – Persistent workout plans
- **Next/Image** – Image optimization
- **External FitLog API** – Workout data source

## Key Features

### 1. Workout Library

Users can browse workouts with information including:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Sets and reps
- Rating

### 2. Workout Details

Each workout has a dedicated details page containing:

- Exercise image
- Description
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories
- Sets and reps
- Rating
- Step-by-step instructions

### 3. Today Plan & Save For Later

Users can organize workouts into two sections:

- **Today's Plan** – Exercises planned for the current workout
- **Saved For Later** – Exercises kept for later

Duplicate exercises are handled to prevent unnecessary duplicate entries.

### 4. Persistent Workout Plans

Today Plan and Saved For Later data are stored in the browser's `localStorage`.

This keeps selected workouts available even after refreshing the page.

### 5. Responsive Dark UI

FitLog uses a responsive dark-themed interface designed for:

- Mobile
- Tablet
- Laptop
- Desktop

The layout, cards, buttons, navigation, images, and workout plans adapt to different screen sizes.

## Additional Features

- Sorting by **Duration, Calories, and Rating**
- Dynamic workout routes using Next.js App Router
- Custom animated 404 page
- Toast notifications for plan actions
- Empty-state UI
- Responsive navigation
- Workout statistics for exercises, minutes, and calories
- Reusable React components
- TypeScript interfaces for workout data
- External image support with Next.js Image

## Project Structure

```text
src/
├── app/
│   ├── fit-logs/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-plans/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
│
├── components/
│   ├── fit-logs-details/
│   ├── shared/
│   └── ui/
│
├── context/
│   └── FitLogsContext.tsx
│
└── Types/
    └── type.ts
```

## Workout Data

Workout information is fetched from the FitLog API:

```text
https://api.abcz.workers.dev/api/fitlog
```

The API provides workout information such as name, image, muscle groups, equipment, difficulty, duration, calories, sets, reps, rating, description, and instructions.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd fit-log
```

### 2. Install dependencies

This project uses pnpm:

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Main Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/fit-logs` | Workout library |
| `/fit-logs/[id]` | Workout details |
| `/my-plans` | Today Plan and Saved For Later |
| Invalid route | Custom animated 404 page |

## State Management

FitLog uses the React Context API to share workout-plan data between components.

Main shared state:

```text
todayPlan
saveForLater
```

The state is synchronized with `localStorage` so workout plans persist after a browser refresh.

## UI & UX

The application follows a dark visual style with:

- Dark backgrounds
- Lime accent color
- Rounded cards and buttons
- Responsive layouts
- Clear workout information hierarchy
- Toast feedback for user actions
- Animated error handling

## Future Improvements

Possible future improvements include:

- User authentication
- Cloud-based workout plan synchronization
- Workout search
- Advanced filters
- Workout categories
- Progress tracking
- Favorite workouts
- Workout history
- Personalized workout recommendations

## Author

**Nishat Mahzaben**

---

Built with Next.js, TypeScript, Tailwind CSS, and React.
