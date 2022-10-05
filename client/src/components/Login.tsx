const Login = () => {
  return (
    <div>
      <form action="" className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Email"
          className="w-full max-w-xs m-2 input input-bordered"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full max-w-xs m-2 input input-bordered"
        />
        <div className="flex flex-row">
          <a href="/register" className="mx-3 mt-2 text-white btn">
            Sign up
          </a>
          <input
            type="submit"
            value="Log in"
            className="mx-3 mt-2 text-white btn "
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
