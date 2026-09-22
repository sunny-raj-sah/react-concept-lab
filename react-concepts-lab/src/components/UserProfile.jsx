 import { useState } from "react";
import BackButton from "./BackButton";

function UserProfile() {
  const [name, setName] = useState("Sunny");
  const [age, setAge] = useState(22);
  const [role, setRole] = useState("React Developer");

  return (
    <div className="concept-page">
      <BackButton />

      <div className="card">
        <h1>Props Practice</h1>

        <p>
          Name: <strong>{name}</strong>
        </p>

        <p>
          Age: <strong>{age}</strong>
        </p>

        <p>
          Role: <strong>{role}</strong>
        </p>

        <button onClick={() => setName("Sunny Raj")}>
          Change Name
        </button>

        <button onClick={() => setAge(age + 1)}>
          Increase Age
        </button>

        <button
          onClick={() => setRole("Backend Developer")}
        >
          Change Role
        </button>
      </div>
    </div>
  );
}

export default UserProfile;