const Login = () => {
  return (
    <div>
      <form action="" className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs m-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs m-2"
        />
        <div className="flex flex-row">
          <a href="" className="btn text-white mt-2 mx-3">
            Sign up
          </a>
          <input
            type="submit"
            value="Log in"
            className="btn mt-2 mx-3 text-white "
          />
        </div>
        <a href="" className="mt-2 underline">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default Login;
