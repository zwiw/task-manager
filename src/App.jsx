
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import Task from './components/Task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(title) {
    if (title.trim() === '') {
      return
    }

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main>
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </main>
  )
}

export default App

