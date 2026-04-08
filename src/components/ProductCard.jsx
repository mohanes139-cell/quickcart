function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300";
        }}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h2 style={{ color: "black" }}>{product.name}</h2>
      <p style={{ color: "#333" }}>{product.description}</p>
      <p><b>{product.category}</b></p>
      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          background: "purple",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;