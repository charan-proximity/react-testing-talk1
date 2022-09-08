// http://localhost:3000/login
// this renders a login UI and calls the onSubmit handler with the email
// and password when the user submits the form.

import * as React from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email-field">Email</label>
        <input id="email-field" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password-field">Password</label>
        <input id="password-field" name="password" type="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Login;
