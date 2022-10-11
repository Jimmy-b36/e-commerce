import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';

interface IForm {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  password: string | null;
  passwordConfirmation: string | null;
}

const Registration = () => {
  const [error, setError] = useState<{
    emailError: boolean;
    passError: boolean;
    formError: boolean;
  }>({ emailError: false, passError: false, formError: false });
  const [userForm, setUserForm] = useState<IForm>({
    email: null,
    firstName: null,
    lastName: null,
    password: null,
    passwordConfirmation: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const originalForm = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (let key in userForm) {
      if (userForm[key as keyof typeof userForm] === null) {
        setError({ ...error, formError: true });
        return;
      }
      if (userForm.password !== userForm.passwordConfirmation) {
        setError({ ...error, passError: true });
        return;
      }
    }
    try {
      await axios.put('/api/auth/register', userForm);
      originalForm.current?.reset();
      setError({ passError: false, emailError: false, formError: false });
      navigate('/');
    } catch (err: any) {
      return setError({ ...error, emailError: true });
    }
    login(dispatch, { email: userForm.email, password: userForm.password });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
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
              <form onSubmit={handleFormSubmit} ref={originalForm}>
                <label className="label"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full input input-bordered"
                  onChange={handleChange}
                />
                <label className="label"></label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full input input-bordered"
                  onChange={handleChange}
                />
                <label className="label"></label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full input input-bordered"
                  onChange={handleChange}
                />
                <label className="label"></label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full input input-bordered"
                  onChange={handleChange}
                />
                <label className="label"></label>
                <input
                  type="password"
                  placeholder="Password confirmation"
                  name="passwordConfirmation"
                  className="w-full input input-bordered"
                  onChange={handleChange}
                />
                {error.emailError && (
                  <p className="text-center text-red-500">
                    A user with that email already exists
                  </p>
                )}
                {error.formError && (
                  <p className="flex justify-center text-red-500">
                    Please fill out all fields
                  </p>
                )}
                {error.passError && (
                  <p className="flex justify-center text-red-500">
                    Passwords do not match
                  </p>
                )}
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
