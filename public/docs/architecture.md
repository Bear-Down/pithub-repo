# architecture.md

> This document outlines the high-level architecture of PitHub and how our system components interact.

## Tech Stack

* Frontend: React.js
* Backend: Node.js (Express)
* Database: Firebase Firestore
* Storage: Firebase Storage
* Auth: Firebase Auth

## System Architecture

```
[ React ] -> [ Express API ] -> [ Firestore + Storage ]
```

## Responsibilities

* React: UI & state
* Express: PitHub logic & validation
* Firebase: persistence & storage

## Request Flow

1. User interacts with UI
2. API request sent
3. Backend validates
4. Firestore queried
5. Response returned

## Repository Structure

```
/pithub
│
├── /frontend                      # React application (UI layer)
│   ├── /public                    # Static assets served directly
│   │   ├── index.html             # Root HTML file
│   │   └── favicon.ico
│   │
│   ├── /src                       # Main frontend source code
│   │   ├── /components            # Reusable UI components (pure UI)
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ClassCard.jsx
│   │   │   ├── VideoCard.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── /pages                 # Full page views (route-level components)
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── ClassPage.jsx
│   │   │   ├── VideoPage.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── About.jsx
│   │   │   └── Terms.jsx
│   │   │
│   │   ├── /services              # API communication layer (backend calls)
│   │   │   ├── api.js             # Axios/FETCH base config
│   │   │   ├── userService.js
│   │   │   ├── classService.js
│   │   │   ├── videoService.js
│   │   │   └── starService.js
│   │   │
│   │   ├── /hooks                 # Custom React hooks (logic reuse)
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── useDebounce.js
│   │   │
│   │   ├── /context               # Global state (optional, if used)
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── /utils                 # Helper functions
│   │   │   ├── formatDate.js
│   │   │   └── validators.js
│   │   │
│   │   ├── App.jsx                # Main app component (routes defined here)
│   │   ├── main.jsx               # Entry point
│   │   └── styles.css             # Global styles
│   │
│   └── package.json
│
├── /backend                       # Node.js + Express backend (logic layer)
│   ├── /controllers               # Handles request logic (core business logic)
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── classController.js
│   │   ├── videoController.js
│   │   └── starController.js
│   │
│   ├── /routes                    # Defines API endpoints and maps to controllers
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── classRoutes.js
│   │   ├── videoRoutes.js
│   │   └── starRoutes.js
│   │
│   ├── /middleware                # Reusable request processing logic
│   │   ├── authMiddleware.js      # Verifies Firebase token
│   │   ├── errorMiddleware.js     # Global error handler
│   │   └── validationMiddleware.js
│   │
│   ├── /config                    # Configuration files
│   │   ├── firebase.js            # Firebase Admin SDK setup
│   │   └── env.js                 # Environment variables loader
│   │
│   ├── /utils                     # Backend helper functions
│   │   ├── responseFormatter.js   # Standard API response format
│   │   └── logger.js
│   │
│   ├── app.js                     # Express app setup (middleware, routes)
│   ├── server.js                  # Server entry point
│   └── package.json
│
├── /docs                          # Project documentation (source of truth)
│   ├── api.md                     # API endpoints + contracts
│   ├── architecture.md            # System design and structure
│   ├── database.md                # Data models and relationships
│   ├── auth.md                    # Authentication overview
│   └── decisions.md               # Design decisions log
│
├── .env                           # Environment variables (DO NOT COMMIT)
├── .gitignore
└── README.md                      # Project overview and setup instructions
```

