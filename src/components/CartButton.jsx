function CartButton({ totalItems, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "20px",
        top: "20px",
        padding: "10px 15px",
        border: "none",
        borderRadius: "8px",
        background: "white",
        color: "purple",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      🛒 Cart ({totalItems})
    </button>
  );
}

export default CartButton;