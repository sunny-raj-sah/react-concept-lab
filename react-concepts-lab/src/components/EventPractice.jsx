import { useState } from "react";
import BackButton from "./BackButton";

function EventPractice() {
  const [message, setMessage] = useState(
    "Perform an event"
  );

  function handleClick() {
    setMessage("Button clicked");
  }

  function handleMouseEnter() {
    setMessage("Mouse entered");
  }

  function handleMouseLeave() {
    setMessage("Mouse left");
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className="concept-page">
      <BackButton />

      <div className="card">
        <h1>Events Practice</h1>

        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Click / Hover
        </button>

        <input
          type="text"
          placeholder="Type something"
          onChange={handleChange}
        />

        <p>
          Event result: <strong>{message}</strong>
        </p>
      </div>
    </div>
  );
}

export default EventPractice;