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
    console.log("fasdfas");
    e.preventDefault();
    handleEmailPasswordLogin(loginData?.email, loginData?.password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setError("Email or password wrong!");
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
          <div className="text-center lg:text-left ml-8">
            <h1 className="text-5xl font-bold">Login your account now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleEmailLogin}>
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
                    href="/register"
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
