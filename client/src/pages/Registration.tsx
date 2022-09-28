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
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center w-3/4 mt-5 xs:w-9/10 lg:w-full">
          <p className="flex justify-center text-heading xs:text-5xl">
            Registration
          </p>
          <div className="items-center justify-center w-1/2 p-2 m-10 card xs:w-full bg-base-100 drop-shadow-my-card">
            <div className="w-3/4 card-body xs:w-full">
              <div className="flex justify-center text-2xl card-header">
                Create an account
              </div>
              <form onSubmit={handleFormSubmit}>
                <label className="label"></label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full input input-bordered"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full input input-bordered"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full input input-bordered"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full input input-bordered"
                />
                <label className="label"></label>
                <input
                  type="text"
                  placeholder="Password confirmation"
                  className="w-full input input-bordered"
                />
                <div className="flex items-center justify-center">
                  <input
                    type="submit"
                    value="Submit"
                    className="m-5 text-white btn "
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
