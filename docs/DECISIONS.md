# Project Decisions

## Tech Stack

Frontend:
- React
- Vite
- Axios
- Chart.js

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Version Control:
- Git
- GitHub

UI Theme:
- Dark theme

Forecast Features:
- Solar generation forecast
- Wind generation forecast
- Confidence levels
- Forecast explanations
- Weather monitoring
- Kannada language support

## Database Decisions
- MongoDB chosen for flexible weather and forecast documents
- Seed scripts used during development before ML integration

## Dashboard Decisions
- Dark theme selected for monitoring dashboard aesthetics
- Chart.js selected for forecast visualizations
- Modular React components for maintainability

## Architecture

React Dashboard
      ↓
Axios API Calls
      ↓
Express Backend
      ↓
MongoDB Database
      ↓
Weather Data + Forecast Data
      ↓
ML Models (Phase 3)