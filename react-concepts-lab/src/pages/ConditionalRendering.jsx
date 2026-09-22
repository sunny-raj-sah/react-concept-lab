import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPermission, setHasPermission] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="concept-page">
      <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <h1>Conditional Rendering</h1>

      <p>
        Rendering different UI based on conditions, state, or props.
      </p>

      {/* Case 1: if / else */}
      <section className="concept-card">
        <h2>1. if / else</h2>

        {isLoggedIn ? (
          <div>
            <p>Welcome back! You are logged in.</p>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p>You are currently logged out.</p>

            <button onClick={handleLogin}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        )}
      </section>

      {/* Case 2: Ternary operator */}
      <section className="concept-card">
        <h2>2. Ternary Operator</h2>

        <p>
          Status: {isLoggedIn ? "Online" : "Offline"}
        </p>

        <button onClick={isLoggedIn ? handleLogout : handleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </section>

      {/* Case 3: Logical AND */}
      <section className="concept-card">
        <h2>3. Logical AND (&&)</h2>

        {isLoggedIn && (
          <p>
            This message is visible only when the user is logged in.
          </p>
        )}
      </section>

      {/* Case 4: Permission based rendering */}
      <section className="concept-card">
        <h2>4. Permission-Based Rendering</h2>

        <button onClick={() => setHasPermission(!hasPermission)}>
          {hasPermission ? "Remove Permission" : "Give Permission"}
        </button>

        {hasPermission ? (
          <p>You have permission to access this content.</p>
        ) : (
          <p>Access denied.</p>
        )}
      </section>

      {/* Case 5: Loading state */}
      <section className="concept-card">
        <h2>5. Loading State</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>Content loaded successfully.</p>
        )}
      </section>
    </div>
  );
}

export default ConditionalRendering;