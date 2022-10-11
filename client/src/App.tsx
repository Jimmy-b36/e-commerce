import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Registration from './pages/Registration';
import Checkout from './pages/Checkout';
import Custom from './pages/Custom';
import Success from './pages/Success';

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/custom" element={<Custom />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Registration />}
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
