const NavBar = () => {
  return (
    <div className="navbar min-h-[5em] bg-primary text-primary-content ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn lg:hidden xl:hidden">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-slate-500"
          >
            <form action="" method="get">
              <input
                type="text"
                placeholder="Search for a Tractor"
                className="input w-full max-w-xs xs:nav-bar-end text-slate-600"
              />
            </form>
          </ul>
        </div>

        <label
          htmlFor=""
          className=" lg:input-group xl:input-group max-w-xs  xs:nav-bar-end text-slate-600 "
        >
          <span className="lg:flex xl:flex hidden">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <form action="" method="get">
            <input
              type="text"
              placeholder="Search for a Tractor"
              className="input w-full max-w-xs md:hidden lg:flex xl:flex hidden xs:nav-bar-end text-slate-600 "
            />
          </form>
        </label>
      </div>

      <div className="navbar-center flex xs:justify-start xs:-ml-12 ml-0 text-slate-200">
        <a className="btn btn-ghost text-bold text-3xl text-slate-200">
          Tractors.
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn m-1 hidden md:flex lg:flex xl:flex"
          >
            Login/Sign up
          </label>
          <label
            tabIndex={0}
            className="btn m-1 flex md:hidden lg:hidden xl:hidden text-slate-100 px-5"
          >
            <i className="fa-solid fa-user"></i>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
          >
            <div className="card-body">
              <h3 className="card-title">Card title!</h3>
              <p>you can use any element as a dropdown.</p>
            </div>
          </div>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary mr-3 xs:mr-1">
            3
          </span>
          <button className="btn text-slate-100 mr-2 xs:mr-0 px-5">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <img
          className="h-10 w-auto mb-[3px] rounded-md xs:hidden s:hidden"
          src={require('../assets/logo-white.png')}
          alt="tractor harvesting"
        />
      </div>
    </div>
  );
};

export default NavBar;
