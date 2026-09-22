import { useState } from "react";
import BackButton from "./BackButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <div className="concept-page">
      <BackButton />

      <div className="card">
        <h1>Controlled Form</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>

            <br />

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <br />

          <div>
            <label>Password</label>

            <br />

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />
          </div>

          <br />

          <button type="submit">
            Login
          </button>
        </form>

        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default LoginForm;