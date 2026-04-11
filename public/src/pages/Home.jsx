import { useState } from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #2563eb, #3b82f6, #f97316)",
      }}
    >
      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          background: "white",
          borderRadius: "12px",
          padding: "40px",
          minHeight: "500px",
        }}
      >
        <h1 style={{ color: "#1d4ed8", fontSize: "36px" }}>
          Welcome, User
        </h1>
        <p style={{ color: "#f97316" }}>PitHub Test Page</p>

        <form onSubmit={handleSearch} style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid #ccc",
            }}
          />
          <button>Search</button>
        </form>
      </main>
    </div>
  );
}