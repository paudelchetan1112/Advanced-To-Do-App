import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './Footer';
import Todos from './Todos';
import Cardcontainer from './Cardcontainer';
import About from './About';

const App = () => {
  let inittasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  
  const [mode, setMode] = useState("light");
  const [tasks, setTasks] = useState(inittasks);

  const handleMode = () => {
    setMode(mode === "Dark" ? "Light" : "Dark");
  };

  const handleDelete = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const handleSubmit = (title, description) => {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].sn + 1 : 1;
    if (!title || !description) {
      alert("Title and Description cannot be blank");
    } else {
      const newTask = { sn: id, title, description };
      setTasks([...tasks, newTask]);
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className={`${mode === "Dark" ? "" : "bg-gray-900 text-white"}`}>
        <Navbar mode={mode} handleMode={handleMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="w-full flex items-center justify-center p-4 m-2">
                  <Cardcontainer handleSubmit={handleSubmit} mode={mode} />
                </div>
                <Todos
                  mode={mode}
                  tasks={tasks}
                  handleDelete={handleDelete}
                  handleMode={handleMode}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer mode={mode} handleMode={handleMode} />
      </div>
    </Router>
  );
};

export default App;
