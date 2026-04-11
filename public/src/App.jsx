import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Terms from "./pages/Terms";

/* ---------------- LAYOUT ---------------- */
function Layout({ children }) {
  const navigate = (path) => window.location.href = path;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 20px",
        background: "linear-gradient(to right, #1d4ed8, #2563eb, #f97316)",
        color: "white",
        fontWeight: "bold",
      }}>
        <div style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => navigate("/")}>
          PitHub
        </div>

        <div style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "white",
        }} />
      </header>

      {/* PAGE CONTENT */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer style={{
        marginTop: "40px",
        padding: "16px",
        background: "linear-gradient(to right, #1d4ed8, #f97316)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
      }}>
        <div>2026 PitHub | All Rights Reserved</div>

        <div style={{ display: "flex", gap: "10px" }}>
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/terms")}
          >
            Terms of Use
          </span>

          <span>About</span>
        </div>
      </footer>

    </div>
  );
}

/* ---------------- HOME ---------------- */
function HomePage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #2563eb, #3b82f6, #f97316)"
    }}>
      <main style={{
        maxWidth: "900px",
        margin: "40px auto",
        background: "white",
        borderRadius: "12px",
        padding: "40px",
        minHeight: "500px",
      }}>
        <h1 style={{ color: "#1d4ed8", fontSize: "36px" }}>
          Welcome, User
        </h1>
        <p style={{ color: "#f97316" }}>PitHub Test Page</p>

        <form onSubmit={handleSearch} style={{ marginTop: "20px" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              width: "220px",
            }}
          />
          <button style={{ marginLeft: "10px" }}>Search</button>
        </form>
      </main>
    </div>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}