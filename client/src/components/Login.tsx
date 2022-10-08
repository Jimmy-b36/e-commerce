import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure } from '../redux/userRedux';
import { login } from '../redux/apiCalls';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let { isFetching, error } = useSelector((state: any) => state.user);
  const form = useRef(null);
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    login(dispatch, { email, password });
    setEmail('');
    setPassword('');
    error = false;
  };

  return (
    <div>
      <form ref={form} className="flex flex-col items-center">
        <input
          type="text"
          value={email}
          placeholder="Email"
          className="w-full max-w-xs m-2 input input-bordered"
          onChange={(e: React.FormEvent) =>
            setEmail((e.target as HTMLInputElement).value)
          }
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="w-full max-w-xs m-2 input input-bordered"
          onChange={(e: React.FormEvent) =>
            setPassword((e.target as HTMLInputElement).value)
          }
        />
        <div className="flex flex-row">
          <a href="/register" className="mx-3 mt-2 text-white btn">
            Sign up
          </a>
          <input
            type="submit"
            value="Log in"
            className="mx-3 mt-2 text-white btn "
            onClick={handleClick}
            disabled={isFetching}
          />
        </div>
        {error && (
          <div className="mx-3 mt-2 text-white">
            email or password incorrect
          </div>
        )}
        <a href="" className="mt-2 underline">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default Login;
