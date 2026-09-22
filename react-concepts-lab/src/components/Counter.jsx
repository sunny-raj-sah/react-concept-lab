 import { useState } from "react";
import BackButton from "./BackButton";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="concept-page">
      <BackButton />

      <div className="card">
        <h1>useState Practice</h1>

        <p>
          Current Count: <strong>{count}</strong>
        </p>

        <button
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <hr />

        <h3>Functional Update</h3>

        <button
          onClick={() =>
            setCount(
              (previousCount) => previousCount + 1
            )
          }
        >
          Functional Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;