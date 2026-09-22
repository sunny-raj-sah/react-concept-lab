import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <button onClick={handleBack}>
      ← Back to Concepts
    </button>
  );
}

export default BackButton;