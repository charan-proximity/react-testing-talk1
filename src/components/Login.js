// http://localhost:3000/login
// this renders a login UI and calls the onSubmit handler with the email
// and password when the user submits the form.

import * as React from "react";
import "./Login.css";
function Login({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    onSubmit({
      email: email.value,
      password: password.value,
    });
  }
  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="formInput">
        <label htmlFor="email-field">Email</label>
        <input id="email-field" name="email" type="text" />
      </div>
      <div className="formInput">
        <label htmlFor="password-field">Password</label>
        <input id="password-field" name="password" type="password" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
