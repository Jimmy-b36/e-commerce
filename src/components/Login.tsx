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

        <input type="submit" value="Submit" className="btn mt-2 text-white " />
        <a href="" className="mt-2 underline">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default Login;
