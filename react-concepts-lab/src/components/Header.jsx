 import BackButton from "./BackButton";

function Header() {
  return (
    <div className="concept-page">
      <BackButton />

      <div className="card">
        <h1>JSX & Components</h1>

        <p>
          This component demonstrates JSX and
          reusable React components.
        </p>

        <h2>React Concepts Lab</h2>

        <p>
          Components allow us to split the UI into
          reusable pieces.
        </p>
      </div>
    </div>
  );
}

export default Header;