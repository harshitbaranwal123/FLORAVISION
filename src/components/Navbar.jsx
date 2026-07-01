import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 100,
      background: "rgba(27,35,22,0.92)",
      backdropFilter: "blur(10px)",
      padding: "18px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <Link to="/" style={{
        color: "white",
        fontWeight: 700,
        fontSize: 20,
        textDecoration: "none"
      }}>
        🌿 FloraVision.
      </Link>

      <ul style={{
        display: "flex",
        gap: 28,
        listStyle: "none"
      }}>
        {["Home", "Plants", "Type", "More", "Contact"].map(link => (
          <li key={link}>
            <Link
              to={link === "Plants" ? "/products" : "/"}
              style={{
                color: "#A5C9A5",
                textDecoration: "none",
                fontSize: 14
              }}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{
        display: "flex",
        gap: 20,
        fontSize: 18,
        cursor: "pointer",
        color: "#A5C9A5"
      }}>
        <span>🔍</span>
        <span>🛒</span>
        <span>☰</span>
      </div>

    </nav>
  )
}