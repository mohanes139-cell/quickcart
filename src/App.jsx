import Header from "./components/Header";
import ProductList from "./components/ProductList";
import products from "./data/products";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>QuickCart App</h1> {/* ✅ add this */}
      
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export default App;