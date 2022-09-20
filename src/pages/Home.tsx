import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Catagories from '../components/Catagories';
import ContactForm from '../components/ContactForm';
import Product from '../components/Product';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Catagories />
      <Products />
    </>
  );
};

export default Home;
