import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/apiCalls';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';
const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleSignout = (e: React.FormEvent) => {
    e.preventDefault();
    logout(dispatch);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/product/search/${searchValue}`);
      setError(false);
      navigate(`/product/${res.data[0]._id}`);
    } catch (err: any) {
      setError(true);
    }
  };
  const quantity = useSelector((state: any) => state.cart.quantity);
  return (
    <div className="navbar min-h-[5em] bg-primary text-primary-content ">
      <div className="navbar-start">
        {/* Responsive */}
        <div className="dropdown ">
          <label
            tabIndex={0}
            className="btn lg:hidden 2xl:hidden"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-slate-500"
          >
            <form ref={searchRef} onSubmit={handleSearch} method="get">
              <input
                type="text"
                placeholder="Search for Stickers"
                className="w-full max-w-xs bg-white input xs:nav-bar-end text-slate-200"
              />
            </form>
          </ul>
        </div>
        {/* Standard */}
        <label
          htmlFor=""
          className="max-w-xs lg:input-group 2xl:input-group xs:nav-bar-end text-slate-600"
        >
          <span
            className="hidden lg:flex 2xl:flex bg-slate-600"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass "></i>
          </span>
          <form ref={searchRef} onSubmit={handleSearch} method="get">
            <input
              type="text"
              placeholder="Search for Stickers"
              className="hidden w-full max-w-xs bg-white input md:hidden lg:flex 2xl:flex xs:nav-bar-end text-slate-600"
              onChange={e => setSearchValue(e.target.value)}
            />
          </form>
        </label>
        {error && <span className="-mr-5 ">Product not found</span>}
      </div>

      <div className="flex ml-0 navbar-center xs:justify-start xs:-ml-12 text-slate-200">
        <a href="/" className="text-3xl text-white btn btn-ghost text-bold">
          Stickers.
        </a>
      </div>
      <div className="navbar-end">
        {!user.currentUser ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="hidden m-1 text-white btn md:flex lg:flex 2xl:flex bg-slate-600 hover:bg-slate-800"
            >
              Login/Sign up
            </label>
            <label
              tabIndex={0}
              className="flex px-5 m-1 text-white btn md:hidden lg:hidden 2xl:hidden "
            >
              <i className="fa-solid fa-user"></i>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card w-64 card-compact  p-2 shadow bg-[#E2443C] text-primary-content"
            >
              <div className="card-body ">
                <Login />
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="pr-2 text-xl">{user.currentUser?.email}</p>
            <button className="mr-2 text-white btn" onClick={handleSignout}>
              Sign out
            </button>
          </>
        )}
        <Link to={'/checkout'}>
          <div className="indicator">
            <span className="mr-3 indicator-item badge badge-secondary xs:mr-1">
              {quantity}
            </span>
            <button className="px-5 mr-2 text-white btn xs:mr-0 bg-slate-600 hover:bg-slate-800">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </Link>
        <img
          className="h-10 w-auto mb-[3px] rounded-md xs:hidden s:hidden"
          src="https://github.com/Jimmy-b36/e-commerce/blob/main/client/src/assets/images/logo-white.png?raw=true"
          alt="tractor harvesting"
        />
      </div>
    </div>
  );
};

export default NavBar;
