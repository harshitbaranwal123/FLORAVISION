import { useState } from "react"
import { plants, categories } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Products() {
  const [active, setActive] = useState("All")
  const [search, setSearch] = useState("")

  const filtered = plants.filter(p => {
    const matchCat = active === "All" || p.category === active
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{
      paddingTop: 100,
      paddingBottom: 80,
      paddingLeft: 60,
      paddingRight: 60
    }}>

      <h1 style={{
        color: "white",
        fontSize: 42,
        fontWeight: 900,
        marginBottom: 8
      }}>
        Plant Catalogue
      </h1>

      <p style={{ color: "#A5C9A5", marginBottom: 32 }}>
        Find your perfect plant companion.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          padding: "12px 20px",
          borderRadius: 50,
          fontSize: 14,
          width: 300,
          marginBottom: 24,
          outline: "none"
        }}
      />

      {/* Count */}
      <p style={{ color: "#A5C9A5", fontSize: 13, marginBottom: 24 }}>
          {filtered.length} plants found
      </p>

      {/* Category Filter */}
      <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: "8px 20px",
              borderRadius: 50,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
              border: "none",
              background: active === cat ? "white" : "rgba(255,255,255,0.08)",
              color: active === cat ? "#1B2316" : "#A5C9A5",
              transition: "all 0.3s"
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="product-grid" style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24
}}>
        {filtered.map(plant => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{
          color: "#A5C9A5",
          textAlign: "center",
          marginTop: 60,
          fontSize: 18
        }}>
          No plants found 🌵
        </p>
      )}

    </div>
  )
}