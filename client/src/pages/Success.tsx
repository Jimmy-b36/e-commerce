import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Success = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center w-full min-h-[475px]">
        <p className=" text-heading">Order placed successfully</p>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default Success;
