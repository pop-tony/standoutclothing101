
# Standout Clothing 101

An independent streetwear storefront based in West Legon, Accra. The frontend is a React/Vite SPA; the backend is an Express API.

## Local development

Run each app in its own terminal:

```powershell
cd frontend
npm install
npm run dev
```

```powershell
cd backend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` and proxies `/api` requests to `http://localhost:5000`.

## Deployment

Create two Vercel projects from the same repository and set each project's Root Directory to `frontend` or `backend`. Each directory includes its own `vercel.json` and `.gitignore`.

For the frontend project, set `VITE_API_URL` to the deployed backend's base URL, without a trailing slash. The backend exposes `/api/health`, `/api/products`, and `/api/orders`.
