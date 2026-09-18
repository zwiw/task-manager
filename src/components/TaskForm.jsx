
import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === '') {
      return
    }

    onAddTask(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Introdu denumirea sarcinii"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Adaugă</button>
    </form>
  )
}

export default TaskForm

