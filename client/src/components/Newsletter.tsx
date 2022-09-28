const Newsletter = () => {
  return (
    <div className="flex justify-center w-full mt-5 bg-container">
      <div className="flex flex-col items-center justify-center w-3/4">
        <p className="mt-5 text-heading">Newsletter</p>
        <p className="pt-3 pb-10 text-lg">Enter your email for some updates!</p>
        <form
          action=""
          className="flex flex-row items-center justify-center mb-10"
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full max-w-xs mx-2 input input-bordered"
          />
          <button type="submit" className="btn">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
