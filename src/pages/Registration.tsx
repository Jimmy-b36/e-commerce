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
        <div className="w-3/4 flex flex-col items-center">
          <p className="text-heading flex justify-center">Registration</p>
          <div className="card w-1/2 justify-center items-center bg-base-100 shadow-xl p-2 m-5">
            <div className="card-body w-3/4">
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
