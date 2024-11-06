import PropTypes from "prop-types"
import { deleteNote, updateNote } from "../../../utils/noteStorage"
import { useContext, useState } from "react"
import { AppContext } from "../../../context/AppContext";

export default function Note ({ note, updateNotes }) {
  const { showNotification } = useContext(AppContext);

  const [data, setData] = useState({
    title: note.title,
    content: note.content
  })

  function handleChange (e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleSaveNote (e) {
    e.preventDefault()
    updateNote({
      note: {
        ...note,
        title: data.title,
        content: data.content
      }
    })
    showNotification({ type: 'Save', message: 'Nota guardada' })
    updateNotes()
  }

  function handleDeleteNote (e) {
    e.preventDefault()
    deleteNote({
      note: {
        ...note,
        title: data.title,
        content: data.content
      }
    })
    showNotification({ type: 'Delete', message: 'Nota eliminada' })
    updateNotes()
  }

  return (
    <>
      <div className="bg-accent/10 border-4 border-accent rounded-lg shadow-2xl shadow-accent/30">
        <form action="" className="flex flex-col gap-2" onSubmit={handleSaveNote}>
          <input type="text" placeholder="Título" name="title" className="bg-transparent border-b-4 border-b-accent p-3 w-full outline-none" onChange={handleChange} value={data.title} />
          <textarea placeholder="Ingresa un contenido..." name="content" className="bg-transparent h-40 p-3 w-full outline-none overflow-y-scroll scrollbar-hide resize-none" onChange={handleChange} value={data.content}/>
          <div className="flex gap-2 m-2">
            <button className="bg-secondary/50 w-full px-4 py-2 rounded-md border-2 border-secondary hover:bg-transparent transition-colors" type="button" onClick={handleDeleteNote}>
              Eliminar
            </button>
            <button className="bg-primary/50 w-full px-4 py-2 rounded-md border-2 border-primary hover:bg-transparent transition-colors" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  updateNotes: PropTypes.func.isRequired
}
