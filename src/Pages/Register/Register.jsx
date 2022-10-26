import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [error, setError] = useState({});

  const {
    handleGoogleSignIn,
    handleEmailPasswordRegister,
    setUser,
    setUserName,
    setLoading,
    user,
    handleGithubSignIn
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const validationRegister = (name, password) => {
    const errorMessage = {};
    if (name.length < 5 || name.length > 15) {
      errorMessage.name = "Name Must be between 5 to 15 characters";
    }
    if (password.length < 6 || password.length > 14) {
      errorMessage.password = "Password Must be between 5 to 14 characters";
    }
    return errorMessage;
  };

  const handleEmailRegistration = (e) => {
    setLoading(true);
    e.preventDefault();

    const errorMessage = validationRegister(
      registerData?.name,
      registerData?.password
    );

    if (errorMessage.name || errorMessage.password) {
      setError(errorMessage);
      return;
    }
    handleEmailPasswordRegister(
      registerData?.email,
      registerData?.password,
      registerData?.name
    )
      .then((result) => {
        setUserName(registerData?.name);
        const LoginUser = result.user;
        setUser(LoginUser);
        // emailVerification();
        console.log(user);
        navigate(from, { replace: true });
        setError({});
      })
      .catch((e) => {
        setError({ email: "User already exits this email" });
      })
      .finally(() => setLoading(false));
  };

  const signInGoogle = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  const signInGithub = () => {
    setLoading(true);
    handleGithubSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .finally(() => setLoading(false));
  };


  return (
    <div>
      
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
              <form onSubmit={handleEmailRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    onChange={handleOnChange}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
                <label className="label block text-center">
                  <Link
                    href="/login"
                    className="label-text-alt text-center link link-hover"
                  >
                    Already have an account? Please login here
                  </Link>
                </label>
                
                </form>
                <div className="form-control mt-2">
                  <button onClick={signInGoogle} className="btn shadow-md btn-ghost">
                    Register with Google
                  </button>
                </div>
                <div className="form-control mt-2">
                  <button onClick={signInGithub} className="btn shadow-md ">
                    Register with Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Register;
