import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Registration from './pages/Registration';
import Checkout from './pages/Checkout';
import Pay from './components/Pay';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/pay"
          element={
            <Pay
              children={null}
              cart={{
                products: [{ productId: '12', quantity: 5 }],
                subTotal: 1000,
              }}
            />
          }
        />
        <Route path="/cart" />
        {/* <Cart /> */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
