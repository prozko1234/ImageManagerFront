import React, { useEffect, useState } from "react";
import { loginUser } from "../../redux/actions/accountActions";
import { connect } from "react-redux";

const Login = ({ loginUser, user }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

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
  };

  return (
    <section className="loginPageSection">
      <div className="">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
      {user}
    </section>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (login, password) => dispatch(loginUser(login, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
