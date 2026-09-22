import BackButton from "./BackButton";

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Learn JSX",
      completed: true,
    },
    {
      id: 2,
      title: "Learn Components",
      completed: true,
    },
    {
      id: 3,
      title: "Learn Props",
      completed: true,
    },
    {
      id: 4,
      title: "Learn useState",
      completed: false,
    },
    {
      id: 5,
      title: "Learn useEffect",
      completed: false,
    },
  ];

  return (
    <div className="concept-page">
      <BackButton />

      <div className="card">
        <h1>Lists & Keys</h1>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} -{" "}
              {task.completed
                ? "Completed"
                : "Pending"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;