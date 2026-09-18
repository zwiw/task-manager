
function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span className={task.completed ? 'completed' : ''}>
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </div>
  )
}

export default Task

