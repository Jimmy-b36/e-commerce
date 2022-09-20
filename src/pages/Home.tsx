import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Catagories from '../components/Catagories';
import ContactForm from '../components/ContactForm';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Catagories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
