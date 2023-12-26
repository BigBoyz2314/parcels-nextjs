## Prerequisites

- Node.js and npm installed on your local development machine.
- A basic understanding of JavaScript and React.

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

## Components

This project uses React and is organized into several components. Here's a brief overview of the key components:

- `About.jsx`: This component renders the About page and also FAQ page of the application.
- `Dashboard.jsx`: This component is responsible for rendering the Dashboard page.
- `Enterprise.jsx`: This component renders the Enterprise element.
- `Footer.jsx`: This component renders the footer across the application.
- `Form1.jsx`, `Form2.jsx`, `Form3.jsx`, `Form4.jsx`: These components are responsible for rendering different parts of the form in the application (currently not in use).
- `Header.jsx`: This component renders the header across the application.
- `Landing.jsx`: This component renders the Landing page.
- `MainForm.jsx`: This component is responsible for rendering the main form in the application (currently not in use).
- `PayAsYouGo.jsx`: This component renders the Pay As You Go element.
- `Price.jsx`: This component renders the Price element.
- `Pricing.jsx`: This component renders the Pricing page.
- `SignUp.jsx`: This component is responsible for rendering the Sign Up page (currently not in use).
- `Success.jsx`: This component renders the Success page after a successful Stripe payment.
- `Track.jsx`: This component renders the Tracking element.

