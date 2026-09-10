 # AI Pitch Deck

An AI-powered pitch deck generator built with Next.js. Enter a startup idea and generate a complete pitch deck with AI-generated slide content and images.

## Live Demo

**Deployed App:**

> https://ai-pitch-deck-puce.vercel.app/

## Features

- Generate pitch decks from a startup idea
- AI-generated slide titles and content
- AI-generated slide images
- Background processing with Inngest
- Image storage with ImageKit
- PostgreSQL database
- Real-time generation status through polling
- View previously generated decks
- Responsive UI
- TypeScript support

## Tech Stack

- **Next.js** – Full-stack React framework
- **TypeScript** – Type-safe JavaScript
- **Tailwind **CSS**** – Styling
- **Prisma** – PostgreSQL **ORM**
- **PostgreSQL** – Relational database
- **Neon** – Serverless PostgreSQL hosting
- **Inngest** – Background jobs and workflows
- **ImageKit** – Image storage and delivery
- **OpenAI** – AI-powered content and image generation
- **Base UI** – UI primitives
- **Shadcn** – UI components

## How It Works

```text
### Startup Idea
     ↓
Next.js **API**
     ↓
Create Deck in PostgreSQL
     ↓
### Inngest Background Job
     ↓
### Generate Slide Content
     ↓
### Generate Slide Image
     ↓
Upload Image to ImageKit
     ↓
Save Slide to Database
     ↓
### Display Completed Pitch Deck
```

## Getting Started

### 1. Clone the repository

```bash git clone [https://github.com/JustenAnas/AI-Pitch-Deck.git](https://github.com/JustenAnas/AI-Pitch-Deck.git) cd AI-Pitch-Deck ```

### 2. Install dependencies

```bash npm install ```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env DATABASE_URL=*your-neon-database-url*

OPENAI_API_KEY=*your-openai-api-key*

IMAGEKIT_PRIVATE_KEY=*your-imagekit-private-key* IMAGEKIT_PUBLIC_KEY=*your-imagekit-public-key* IMAGEKIT_URL_ENDPOINT=*your-imagekit-url-endpoint* ```
```

Add any other environment variables required by your configuration.

### 4. Set up the database

Run Prisma migrations:

```bash npx prisma migrate dev ```

Generate the Prisma client:

```bash npx prisma generate ```

### 5. Start the development server

```bash npm run dev ```

The application will be available at:

```text [http://localhost:**3000**](http://localhost:**3000**) ```

### 6. Start Inngest

In a separate terminal:

```bash npx inngest-cli@latest dev ```

The Inngest development dashboard will be available at:

```text [http://localhost:**8288**](http://localhost:**8288**) ```

## Production Build

To create a production build:

```bash npm run build ```

To start the production server:

```bash npm start ```

 ## Project Structure

```text
AI-Pitch-Deck/
├── app/
│   ├── api/
│   │   ├── decks/
│   │   └── inngest/
│   ├── decks/
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── deck-viewer.tsx
│   ├── create-deck-form.tsx
│   └── site-header.tsx
│
├── lib/
│   ├── generated/
│   │   └── prisma/
│   └── types/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
├── .env
└── package.json
```

## Environment Variables

| Variable                | Description                       |
| ----------------------- | --------------------------------- |
| `DATABASE_URL`          | Neon PostgreSQL connection string |
| `OPENAI_API_KEY`        | OpenAI API key                    |
| `IMAGEKIT_PRIVATE_KEY`  | ImageKit private API key          |
| `IMAGEKIT_PUBLIC_KEY`   | ImageKit public API key           |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit URL endpoint             |

Never commit your `.env` file or expose **API** keys publicly.

## Deployment

The application can be deployed using Vercel.

Before deploying, configure all required environment variables in the Vercel project settings.

The database is hosted using Neon, while ImageKit handles generated image storage and delivery.

## Repository

GitHub: [https://github.com/JustenAnas/AI-Pitch-Deck](https://github.com/JustenAnas/AI-Pitch-Deck)

## License

This project is licensed under the **MIT** License.

See the `**LICENSE**` file for details.

## Created by 
Anas with ❤️
