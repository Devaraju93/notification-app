# Insyd Notification System

A real-time notification system for the Insyd social platform targeting the Architecture Industry. This proof-of-concept demonstrates core notification functionality while considering future scalability.

## Tech Stack

- **Frontend**: Next.js (React framework)
- **Backend**: Node.js (JavaScript runtime)
- **Database**: PostgreSQL via Prisma ORM
- **Real-time Infrastructure**: Pusher

## Features

- Real-time notifications delivered via WebSockets
- Simulation of different notification types (follows, comments, likes)
- Persistent storage of notification history
- Toast notifications for immediate user awareness
- Chronological list view of all past notifications


## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - `DATABASE_URL`: PostgreSQL connection string
   - `PUSHER_ID`: Pusher application ID
   - `PUSHER_SECRET`: Pusher application secret
   - `NEXT_PUBLIC_PUSHER_KEY`: Pusher client-side key

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/components`: UI components including simulation buttons
- `/lib`: Utility functions for Prisma and Pusher
- `/actions`: Server actions for notification handling
- `/app`: Next.js pages including the notification dashboard
# notification-app
