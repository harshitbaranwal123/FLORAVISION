import { Link } from "react-router-dom"
import { plants } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section" style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "120px 60px 60px",
        background: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=900&fit=crop') center/cover",
        position: "relative"
      }}>

        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #1B2316 45%, transparent)"
        }} />

        {/* Left Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
          <h1 style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            lineHeight: 1,
            marginBottom: 20
          }}>
            Earth's Exhale
          </h1>
          <p style={{
            color: "#A5C9A5",
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 32
          }}>
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link to="/products">
              <button
                onMouseEnter={e => {
                  e.currentTarget.style.background = "white"
                  e.currentTarget.style.color = "#1B2316"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.color = "white"
                }}
                style={{
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  padding: "12px 28px",
                  borderRadius: 50,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  transition: "all 0.3s"
                }}>
                Buy Now
              </button>
            </Link>
            <button style={{
              background: "none",
              border: "none",
              color: "#A5C9A5",
              cursor: "pointer",
              fontSize: 14
            }}>
              ▶ Live Demo
            </button>
          </div>
        </div>

        {/* Right floating card */}
        <div style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          padding: 20,
          width: 280,
          backdropFilter: "blur(10px)"
        }}>
          <img
            src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=220&fit=crop"
            alt="Aglaonema"
            style={{
              width: "100%",
              borderRadius: 16,
              marginBottom: 12,
              height: 200,
              objectFit: "cover"
            }}
          />
          <span style={{ color: "#A5C9A5", fontSize: 12 }}>Indoor Plant</span>
          <h3 style={{
            color: "white",
            fontSize: 18,
            margin: "4px 0 12px"
          }}>
            Aglaonema plant
          </h3>
          <button style={{
            width: "100%",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "white",
            padding: 10,
            borderRadius: 12,
            cursor: "pointer",
            fontSize: 14
          }}>
            Buy Now
          </button>
        </div>

      </section>

      {/* Top Selling Plants */}
      <section style={{ padding: "80px 60px" }}>
        <h2 style={{
          textAlign: "center",
          color: "white",
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 40
        }}>
          Our Top Selling Plants
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24
        }}>
          {plants.slice(0, 6).map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: "0 60px 80px" }}>
        <h2 style={{
          textAlign: "center",
          color: "white",
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 40
        }}>
          Customer Review
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24
        }}>
          {[
            { name: "Shelly Russel", text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!", img: "https://i.pravatar.cc/60?img=5" },
            { name: "Lula Rolfson", text: "The vibrant colors and fresh greenery make such a huge difference in my home.", img: "https://i.pravatar.cc/60?img=9" },
            { name: "Carol Huels", text: "Definitely worth the investment — my plant collection has never looked better!", img: "https://i.pravatar.cc/60?img=16" },
          ].map((r, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 24
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16
              }}>
                <img
                  src={r.img}
                  alt={r.name}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
                <div>
                  <p style={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: 14
                  }}>
                    {r.name}
                  </p>
                  <span style={{ color: "#FFD700", fontSize: 12 }}>
                    ★★★★★
                  </span>
                </div>
              </div>
              <p style={{
                color: "#A5C9A5",
                fontSize: 13,
                lineHeight: 1.6
              }}>
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}