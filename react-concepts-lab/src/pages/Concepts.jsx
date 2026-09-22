import { Link } from "react-router-dom";

function Concepts() {
  const concepts = [
    {
      id: 1,
      name: "JSX & Components",
      path: "/jsx-components",
      description: "Practice JSX and reusable React components.",
    },
    {
      id: 2,
      name: "Props",
      path: "/props",
      description: "Practice passing data from parent to child.",
    },
    {
      id: 3,
      name: "useState",
      path: "/use-state",
      description: "Practice state and state updates.",
    },
    {
      id: 4,
      name: "Events",
      path: "/events",
      description: "Practice React event handling.",
    },
    {
      id: 5,
      name: "Conditional Rendering",
      path: "/conditional-rendering",
      description: "Practice rendering UI based on state.",
    },
    {
      id: 6,
      name: "Lists & Keys",
      path: "/lists-keys",
      description: "Practice map(), lists, and React keys.",
    },
    {
      id: 7,
      name: "Forms",
      path: "/forms",
      description: "Practice controlled forms and validation.",
    },
    {
  id: 8,
  name: "useEffect",
  path: "/use-effect",
  description:
    "Practice dependency arrays, execution, and cleanup.",
},
  ];

  return (
    <div className="app">
      <h1>React Concepts Lab</h1>

      <p className="subtitle">
        React revision  
      </p>

      <div className="concept-grid">
        {concepts.map((concept) => (
          <div className="concept-card" key={concept.id}>
            <h2>{concept.name}</h2>

            <p>{concept.description}</p>

            <Link to={concept.path}>
              <button>Open Concept</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Concepts;