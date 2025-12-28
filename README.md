# Personal Portfolio Website

This is a personal portfolio website for an AI/Quantum Researcher, built with Next.js, Tailwind CSS, and shadcn/ui. The project was created and customized with the help of Firebase Studio.

## Features

- **Modern Tech Stack**: Built with Next.js App Router, React, and Tailwind CSS.
- **Component-Based**: Uses shadcn/ui for beautiful and reusable components.
- **Easy to Customize**: Centralized data management for easy content updates.
- **Responsive Design**: Looks great on all devices, from desktops to mobile phones.
- **AI-Powered Development**: Developed in collaboration with an AI coding partner.

---

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have Node.js (version 20 or newer) and npm installed on your machine.

### Installation

1.  Clone the repository to your local machine.
2.  Install the necessary dependencies by running the following command in the project root:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

---

## How to Customize Your Portfolio

All the content for the portfolio is managed in a few key files, making it simple to update your personal information.

### 1. Editing Text Content (Bio, Projects, Publications)

Nearly all the text on the website is located in one central file:

-   `src/lib/data.ts`

Inside this file, you'll find several JavaScript objects that you can edit directly:

-   `profile`: Contains your name, position, bio, skills, and social media links.
-   `publications`: An array of your published papers.
-   `projects`: An array showcasing your personal or professional projects.
-   `navLinks`: Controls the links in the main navigation header.

To change your name, for example, you would edit the `name` property within the `profile` object:

```typescript
// in src/lib/data.ts
export const profile = {
  name: 'Your Name Here',
  position: 'Your job title or a short tagline.',
  // ... and so on
};
```

### 2. Changing Images

All image information is managed in one JSON file:

-   `src/lib/placeholder-images.json`

This file contains a list of image objects. To change your profile picture, find the object with `"id": "profile-photo"` and update its `imageUrl`.

**Option A: Using a Local Image (Recommended)**

1.  Place your image file (e.g., `profile.jpg`) inside the `/public` directory at the root of your project. If the `public` folder doesn't exist, create it.
2.  Update the `imageUrl` in `src/lib/placeholder-images.json` to point to your local file. The path should start with a `/`.

    ```json
    // in src/lib/placeholder-images.json
    {
      "id": "profile-photo",
      "description": "A professional headshot of me.",
      "imageUrl": "/profile.jpg", // Path to your local image
      "imageHint": "professional portrait man"
    }
    ```

**Option B: Using an External Image URL**

1.  Upload your image to an image hosting service (like Imgur) and get the **direct image link** (ending in `.jpg`, `.png`, etc.), not the gallery link.
2.  Add the hostname (e.g., `i.imgur.com`) to the `next.config.ts` file to grant Next.js permission to use it.

    ```typescript
    // in next.config.ts
    const nextConfig: NextConfig = {
      images: {
        remotePatterns: [
          // ... other patterns
          {
            protocol: 'https',
            hostname: 'i.imgur.com', // Add the new hostname here
          },
        ],
      },
    };
    ```

3.  Update the `imageUrl` in `src/lib/placeholder-images.json` with the full external URL.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Generative AI**: [Google Genkit](https://firebase.google.com/docs/genkit)
-   **Deployment**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)
