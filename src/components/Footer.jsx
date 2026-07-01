import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer style={{
      background: "#141A10",
      padding: "60px",
      borderTop: "1px solid rgba(255,255,255,0.05)"
    }}>

     <div className="footer-grid" style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 40,
  maxWidth: 1100,
  margin: "0 auto"
}}>

        {/* Logo */}
        <div>
          <div style={{
            fontSize: 20,
            fontWeight: 700,
            color: "white",
            marginBottom: 12
          }}>
            🌿 FloraVision.
          </div>
          <p style={{
            color: "#A5C9A5",
            fontSize: 13,
            lineHeight: 1.7
          }}>
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive."
          </p>
          <div style={{
            display: "flex",
            gap: 20,
            marginTop: 20,
            color: "#A5C9A5"
          }}>
            {["FB", "TW", "LI"].map(s => (
              <span key={s} style={{ cursor: "pointer" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            color: "white",
            marginBottom: 16,
            fontSize: 15
          }}>
            Quick Links
          </h4>
          {["Home", "Types Of Plants", "Contact", "Privacy"].map(link => (
            <div key={link} style={{
              color: "#A5C9A5",
              fontSize: 13,
              marginBottom: 10,
              cursor: "pointer"
            }}>
              {link}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{
            color: "white",
            marginBottom: 16,
            fontSize: 15
          }}>
            For Every Update.
          </h4>
          <div style={{
            display: "flex",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "none",
                color: "white",
                padding: "12px 16px",
                fontSize: 13,
                outline: "none"
              }}
            />
            <button
              onClick={() => setEmail("")}
              style={{
                background: "#4CAF50",
                border: "none",
                color: "white",
                padding: "0 16px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer"
              }}>
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>

      <div style={{
        textAlign: "center",
        color: "#A5C9A5",
        fontSize: 12,
        marginTop: 40,
        paddingTop: 20,
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}>
        FloraVision © all right reserve
      </div>

    </footer>
  )
}