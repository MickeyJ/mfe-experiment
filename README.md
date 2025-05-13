> **⚠️ WORK IN PROGRESS:**  
> This project is under active development. Not everything described below is guaranteed to work yet!

# Microfrontend Practice Project

This project is for educational purposes and demonstrates a microfrontend architecture using React, Vue, and Module Federation (Webpack 5). The goal is to build a scalable web application where different features are developed and deployed independently.

## Demo

A live demo is available at:  
[https://mfe.mickeymalotte.com/](https://mfe.mickeymalotte.com/)

## Project Structure

- **container**: The main host application. It loads and orchestrates the other microfrontends.
- **marketing**: A React-based microfrontend for marketing pages (home, pricing, etc).
- **auth**: A React-based microfrontend for authentication (sign up, sign in, etc).
- **dashboard**: A Vue-based microfrontend for user dashboards and analytics.

Each microfrontend is a standalone project with its own dependencies, build process, and deployment pipeline.

## Technologies Used

- React (marketing, auth, container)
- Vue (dashboard)
- Material-UI (React UIs)
- Webpack 5 Module Federation
- AWS S3 & CloudFront (deployment)
- GitHub Actions (CI/CD)

## Development

Each microfrontend can be run independently for local development. Use the following commands inside each package:

```bash
npm install
npm start
```

The container app runs on [http://localhost:8080](http://localhost:8080) by default.

## Deployment

Deployment is handled via GitHub Actions. Each microfrontend is built and deployed to AWS S3 and served via CloudFront. The container and remotes are versioned and loaded dynamically.
