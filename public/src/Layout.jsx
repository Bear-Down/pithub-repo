import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();

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
        padding: "16px",
        background: "linear-gradient(to right, #1d4ed8, #f97316)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
      }}>
        <div>2026 PitHub | All Rights Reserved</div>

        <div style={{ display: "flex", gap: "10px" }}>
          <span onClick={() => navigate("/terms")} style={{ cursor: "pointer" }}>
            Terms of Use
          </span>

          <span>About</span>
        </div>
      </footer>

    </div>
  );
}