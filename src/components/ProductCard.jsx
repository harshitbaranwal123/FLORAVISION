export default function ProductCard({ plant }) {
  return (
    <div
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        overflow: "hidden",
        transition: "transform 0.3s",
        cursor: "pointer",
        position: "relative"
      }}>

      {plant.id === 1 && (
        <div style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "#4CAF50",
          color: "white",
          fontSize: 11,
          fontWeight: 700,
          padding: "4px 10px",
          borderRadius: 20,
          zIndex: 1
        }}>
          Bestseller
        </div>
      )}

      <img
        src={plant.img}
        alt={plant.name}
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover"
        }}
      />

      <div style={{ padding: 16 }}>

        <div style={{ marginBottom: 6 }}>
          <span style={{ color: "#FFD700", fontSize: 12 }}>★★★★</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>★</span>
        </div>

        <span style={{ color: "#A5C9A5", fontSize: 12 }}>
          {plant.category}
        </span>

        <h3 style={{
          color: "white",
          fontSize: 16,
          margin: "6px 0 8px"
        }}>
          {plant.name}
        </h3>

        <p style={{
          color: "#A5C9A5",
          fontSize: 13,
          lineHeight: 1.5,
          marginBottom: 16
        }}>
          {plant.desc}
        </p>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span style={{
            color: "white",
            fontWeight: 700,
            fontSize: 18
          }}>
            Rs. {plant.price}/-
          </span>

          <button
            onMouseEnter={e => e.currentTarget.style.background = "#4CAF50"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              width: 36,
              height: 36,
              borderRadius: 10,
              cursor: "pointer",
              fontSize: 16
            }}>
            🛒
          </button>
        </div>

      </div>
    </div>
  )
}