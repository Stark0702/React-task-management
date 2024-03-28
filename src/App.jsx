import React from "react";
import "./App.css";
import TaskDashborad from "./Context/TaskDashborad";
function App() {
  return (
    <>
      <div className="heading">
        <h2>Task Management Web App</h2>
      </div>
      <>
        <TaskDashborad />
      </>
    </>
  );
}

export default App;
