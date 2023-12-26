This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

The project is structured as follows:

- `app/`: Contains the main application files. Each subdirectory represents a different page or feature of the application.
- `app/api/[...auth0]`: Contains auth0 handleauth().
- `app/checkout.js`: Contains Stripe Checkout Functionality.
- `components/`: Contains the React components used throughout the application.
- `public/`: Contains static files that are served by the server.
- `.env`: Contains environment variables.
- `package.json`: Contains the list of project dependencies and scripts.

## Dependencies

This project uses several dependencies to work properly. These are listed in the `package.json` file in the root directory of the project. Here's a brief overview of the key dependencies:

- `@auth0/nextjs-auth0`: This library provides Auth0 integration for Next.js applications. It's used in this project to handle user authentication.
- `@stripe/stripe-js`: This is the official Stripe JavaScript library. It's used in this project to handle payments.
- `dotenv`: This module loads environment variables from a `.env` file into `process.env`. It's used in this project to manage environment variables.
- `next`: A framework for server-rendered React applications. It's used in this project to handle routing, server-side rendering, and to create a build of the project.
- `react`: A JavaScript library for building user interfaces. This is the core library that powers the components of this application.
- `react-dom`: This package serves as the entry point to the DOM and server renderers for React. It's used alongside React to manipulate the DOM.

To install these dependencies, navigate to the project's root directory and run the following command in your terminal:

```sh

npm install

```

## Prerequisites

- Node.js and npm installed on your local development machine.
- A basic understanding of JavaScript and React.

