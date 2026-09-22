
import { useEffect, useRef, useState } from "react";
import BackButton from "./BackButton";

function UseEffectLab() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Visible console messages
  const [logs, setLogs] = useState([]);

  // Case 1 uses ref because this effect runs after every render.
  // Updating state here would create an infinite loop.
  const case1Runs = useRef(0);

  // Other counters use state because their UI needs to update.
  const [case2Runs, setCase2Runs] = useState(0);
  const [case3Runs, setCase3Runs] = useState(0);
  const [case4Runs, setCase4Runs] = useState(0);
  const [cleanupRuns, setCleanupRuns] = useState(0);

  // =====================================================
  // Helper: Add message to Effect Console
  // =====================================================

  function addLog(message) {
    const time = new Date().toLocaleTimeString();

    setLogs((previousLogs) => [
      ...previousLogs,
      `[${time}] ${message}`,
    ]);
  }

  // =====================================================
  // CASE 1
  // No dependency array
  //
  // Runs after EVERY committed render.
  //
  // IMPORTANT:
  // Do NOT call setState here.
  // =====================================================

  useEffect(() => {
    case1Runs.current += 1;

    console.log(
      "CASE 1: Effect without dependency array executed"
    );
  });

  // =====================================================
  // CASE 2
  // Empty dependency array []
  //
  // Runs when component mounts.
  // =====================================================

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCase2Runs((previous) => previous + 1);

    addLog(
      "CASE 2 → useEffect([], mount) executed"
    );

    return () => {
      setCleanupRuns((previous) => previous + 1);

      console.log(
        "CASE 2 → Cleanup executed during unmount"
      );
    };
  }, []);

  // =====================================================
  // CASE 3
  // Dependency [count]
  //
  // Runs whenever count changes.
  // =====================================================

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCase3Runs((previous) => previous + 1);

    addLog(
      `CASE 3 → [count] effect executed | count = ${count}`
    );

    return () => {
      setCleanupRuns((previous) => previous + 1);

      addLog(
        `CASE 3 → cleanup executed | previous count = ${count}`
      );
    };
  }, [count]);

  // =====================================================
  // CASE 4
  // Dependency [name]
  //
  // Runs whenever name changes.
  // =====================================================

  useEffect(() => {
    // Don't show anything for the initial empty value.
    if (name === "") {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCase4Runs((previous) => previous + 1);

    addLog(
      `CASE 4 → [name] effect executed | name = "${name}"`
    );

    return () => {
      setCleanupRuns((previous) => previous + 1);

      addLog(
        `CASE 4 → cleanup executed | previous name = "${name}"`
      );
    };
  }, [name]);

  // =====================================================
  // Count handlers
  // =====================================================

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrement() {
    setCount((previousCount) => previousCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  // =====================================================
  // Clear console
  // =====================================================

  function clearLogs() {
    setLogs([]);
  }

  return (
    <div className="concept-page">
      <BackButton />

      <div className="effect-lab">

        {/* =================================================
            LEFT SIDE — EFFECT CASES
        ================================================== */}

        <div className="effect-content">

          {/* Introduction */}

          <div className="card">
            <h1>useEffect Practice Lab</h1>

            <p>
              Experiment with different dependency-array
              cases and observe when each effect executes.
            </p>

            <p>
              Open the Effect Console on the right and
              interact with the examples.
            </p>
          </div>

          {/* =================================================
              CASE 1
          ================================================== */}

          <div className="card effect-case">

            <h2>
              Case 1 — No Dependency Array
            </h2>

            <code>
              useEffect(() =&gt; {"{}"});
            </code>

            <p>
              Runs after{" "}
              <strong>every committed render</strong>.
            </p>

            <p className="warning-text">
              ⚠️ Never update state unconditionally inside
              this effect. It can create an infinite render
              loop.
            </p>

             <div className="effect-info">
  <span>Execution behavior</span>

  <strong>Every render</strong>
</div>

<p className="console-hint">
  Open DevTools → Console to see Case 1 executions.
</p>

          </div>

          {/* =================================================
              CASE 2
          ================================================== */}

          <div className="card effect-case">

            <h2>
              Case 2 — Empty Dependency Array
            </h2>

            <code>
              useEffect(() =&gt; {"{}"}, []);
            </code>

            <p>
              Runs after the component mounts.
            </p>

            <p>
              Common examples:
            </p>

            <ul>
              <li>Initial API request</li>
              <li>Event subscription</li>
              <li>External library setup</li>
            </ul>

            <div className="effect-info">
              <span>Observed executions</span>

              <strong>
                {case2Runs}
              </strong>
            </div>

          </div>

          {/* =================================================
              CASE 3
          ================================================== */}

          <div className="card effect-case">

            <h2>
              Case 3 — Dependency [count]
            </h2>

            <code>
              useEffect(() =&gt; {"{}"}, [count]);
            </code>

            <p>
              Runs when{" "}
              <strong>count changes</strong>.
            </p>

            <div className="control-row">

              <button onClick={decrement}>
                −
              </button>

              <strong className="count-value">
                {count}
              </strong>

              <button onClick={increment}>
                +
              </button>

              <button onClick={resetCount}>
                Reset
              </button>

            </div>

            <div className="effect-info">
              <span>Count effect executions</span>

              <strong>
                {case3Runs}
              </strong>
            </div>

          </div>

          {/* =================================================
              CASE 4
          ================================================== */}

          <div className="card effect-case">

            <h2>
              Case 4 — Dependency [name]
            </h2>

            <code>
              useEffect(() =&gt; {"{}"}, [name]);
            </code>

            <p>
              Runs whenever{" "}
              <strong>name changes</strong>.
            </p>

            <input
              type="text"
              value={name}
              placeholder="Type your name..."
              onChange={(event) =>
                setName(event.target.value)
              }
            />

            <p>
              Current name:{" "}
              <strong>
                {name || "No name entered"}
              </strong>
            </p>

            <div className="effect-info">
              <span>Name effect executions</span>

              <strong>
                {case4Runs}
              </strong>
            </div>

          </div>

          {/* =================================================
              CLEANUP
          ================================================== */}

          <div className="card effect-case">

            <h2>
              Cleanup Function
            </h2>

            <code>
              useEffect(() =&gt; {"{"}
              <br />
              &nbsp;&nbsp;return () =&gt; {"{}"};
              <br />
              {"}"}, [count]);
            </code>

            <p>
              Cleanup runs:
            </p>

            <ul>
              <li>
                Before the effect runs again because
                a dependency changed
              </li>

              <li>
                When the component unmounts
              </li>
            </ul>

            <div className="effect-info">
              <span>Cleanup executions</span>

              <strong>
                {cleanupRuns}
              </strong>
            </div>

          </div>

        </div>

        {/* =================================================
            RIGHT SIDE — EFFECT CONSOLE
        ================================================== */}

        <aside className="effect-console">

          <div className="console-header">

            <div>
              <h2>
                Effect Console
              </h2>

              <span>
                Live effect observations
              </span>
            </div>

            <button
              className="console-clear"
              onClick={clearLogs}
            >
              Clear
            </button>

          </div>

          {/* Console messages */}

          <div className="console-body">

            {logs.length === 0 ? (

              <div className="console-empty">
                <span>›</span>
                No effect messages yet...
              </div>

            ) : (

              logs.map((log, index) => (
                <div
                  className="console-line"
                  key={`${log}-${index}`}
                >
                  <span className="console-arrow">
                    ›
                  </span>

                  {log}
                </div>
              ))

            )}

          </div>

          {/* Console counters */}

          <div className="console-footer">

           

            <div className="console-counter">
              <span>Case 2</span>
              <strong>
                {case2Runs}
              </strong>
            </div>

            <div className="console-counter">
              <span>Case 3</span>
              <strong>
                {case3Runs}
              </strong>
            </div>

            <div className="console-counter">
              <span>Case 4</span>
              <strong>
                {case4Runs}
              </strong>
            </div>

            <div className="console-counter">
              <span>Cleanup</span>
              <strong>
                {cleanupRuns}
              </strong>
            </div>

          </div>

        </aside>

      </div>
    </div>
  );
}

export default UseEffectLab;