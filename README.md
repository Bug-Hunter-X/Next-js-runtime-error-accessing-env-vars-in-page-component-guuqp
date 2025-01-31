# Next.js runtime error accessing env vars in page component

This repository demonstrates a common error in Next.js applications where accessing environment variables directly within a page component's runtime results in a runtime error in production environments.

## Description

The issue arises when attempting to access environment variables (e.g., `process.env.MY_VAR`) directly within a page component's `return` statement or any method that's executed after the page is rendered on the client-side. In production, the `process.env` object is often stripped down or not available in the client-side bundle, leading to a runtime error.

## How to Reproduce

1. Clone this repository.
2.  Run `npm install`
3. Create a `.env.local` file in the root directory and add an environment variable `MY_VAR=myValue`.
4. Run `npm run dev` to start the development server.  You won't see any errors in development.
5. Run `npm run build` and `npm run start` to start the production server.  You'll encounter a runtime error in the browser console related to `process.env.MY_VAR` being undefined.

## Solution

To fix this, environment variables should only be accessed within `getServerSideProps` or `getStaticProps` (for SSG).

## Contributing

Contributions are always welcome!
