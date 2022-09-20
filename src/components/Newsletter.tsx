const Newsletter = () => {
  return (
    <div className="w-full flex justify-center mt-5 bg-container">
      <div className="flex justify-center flex-col w-3/4 items-center">
        <p className="text-heading mt-5">Newsletter</p>
        <p className="pb-10 pt-3 text-lg">Enter your email for some updates!</p>
        <form
          action=""
          className="flex flex-row justify-center items-center mb-10"
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs mx-2"
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
