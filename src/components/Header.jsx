function Header({ totalItems, onCartClick }) {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(135deg, purple, violet)",
        color: "white",
        position: "relative"
      }}
    >
      <h1>QuickCart</h1>
      <p>A Lightweight Shopping Preview</p>

      <button
        onClick={onCartClick}
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
        Cart ({totalItems})
      </button>
    </header>
  );
}

export default Header;