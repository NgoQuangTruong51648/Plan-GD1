import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home"
import Product from './pages/Product/Product';
import Shop from "./pages/Shop/Shop"
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
