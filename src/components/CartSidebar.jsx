function CartSidebar({
  cartItems,
  isCartOpen,
  onClose,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: isCartOpen ? 0 : "-400px",
        width: "350px",
        height: "100%",
        background: "white",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
        padding: "20px",
        transition: "0.3s",
        overflowY: "auto",
        zIndex: 1000
      }}
    >
      <button
        onClick={onClose}
        style={{
          float: "right",
          border: "none",
          background: "red",
          color: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Close
      </button>

      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "10px 0"
              }}
            >
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default CartSidebar;