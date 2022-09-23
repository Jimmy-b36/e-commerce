import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Catagories from '../components/Catagories';
import ContactForm from '../components/ContactForm';
import Products from '../components/PopularProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
