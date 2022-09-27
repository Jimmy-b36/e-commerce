import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const Registration = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <Announcement />
      <NavBar />
      <div className="flex justify-center items-center flex-col w-full">
        <div className="w-3/4 xs:w-9/10 lg:w-full flex flex-col items-center mt-5">
          <p className="text-heading flex justify-center xs:text-5xl">
            Registration
          </p>
          <div className="card w-1/2 xs:w-full justify-center items-center bg-base-100 drop-shadow-my-card p-2 m-10">
            <div className="card-body w-3/4 xs:w-full">
              <div className="card-header flex justify-center text-2xl">
                Create an account
              </div>
              <form onSubmit={handleFormSubmit}>
                <label className="label"></label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input input-bordered w-full"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="Password confirmation"
                  className="input input-bordered w-full"
                />
                <div className="flex justify-center items-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn m-5 text-white "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;