import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const {
    handleEmailPasswordLogin,
    setLoading,
    handleGoogleSignIn,
    handleGithubSignIn,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleEmailLogin = (e) => {
    setLoading(true);
    e.preventDefault();
   if(loginData.email&&loginData.password){
    handleEmailPasswordLogin(loginData.email, loginData.password)
    .then((result) => {
      navigate(from, { replace: true });
    })
    .catch((e) => {
      console.log(e);
      setError("Email or password wrong!");
    })
    .finally(() => setLoading(false));
   }
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
          <div className="text-center lg:text-left lg:ml-8">
            <h1 className="text-5xl font-bold">Login your account now!</h1>
            <p className="py-6">
            Study Care provide you a better quality and advanced courses about indivitual topics
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleEmailLogin}>
              <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
              {/* show error */}
              {error&&<div className="alert alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>}
                {/* end show alert */}
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
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <label className="label block text-center">
                  <Link
                    to="/register"
                    className="label-text-alt text-center link link-hover"
                  >
                    Haven't any account? Please Register.
                  </Link>
                </label>
              </form>
              <div className="form-control mt-2">
                <button
                  onClick={signInGoogle}
                  className="btn shadow-md btn-ghost"
                >
                  Login with Google
                </button>
              </div>
              <div className="form-control mt-2">
                <button onClick={signInGithub} className="btn shadow-md ">
                  Login with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
