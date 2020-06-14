import React, { useEffect, useState } from "react";
import { loginUser } from "../../redux/actions/accountActions";
import { connect } from "react-redux";

const Login = ({ loginUser, user, error }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userAuthentificated, setUserAuthentificated] = useState(false);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUserName(event.target.value);
        break;
      case "email":
        setUserEmail(event.target.value);
        break;
      case "password":
        setUserPassword(event.target.value);
        break;
      default:
        return;
    }
    //[event.target.name]: event.target.value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(userName, userPassword).catch((error) => {
      console.log(error);
    });
    setUserAuthentificated(true);
  };
  if (!userAuthentificated)
    return (
      <section className="loginPageSection">
        <div className="">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              onChange={handleChange}
              type="username"
              name="username"
              placeholder="Username"
            />
            <br />

            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />

            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />

            <input type="submit" />
          </form>
        </div>
      </section>
    );
  else
    return (
      <section className="loginPageSection">
        <h1>{`Hello ${user.username}`}</h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              onChange={handleChange}
              type="username"
              name="username"
              placeholder="Username"
            />
            <br />

            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />

            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />

            <input type="submit" />
          </form>
        </div>
      </section>
    );
};

const mapStateToProps = (state) => {
  return { user: state.accountReducer.user, error: state.accountReducer.error };
};

const mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
