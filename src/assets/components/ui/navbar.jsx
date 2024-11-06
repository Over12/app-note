import { useContext } from "react"
import { createEmptyNote, storeNote } from "../../../utils/noteStorage"
import { AppContext } from "../../../context/AppContext"

export default function NavBar () {
  const { updateNotes } = useContext(AppContext)

  function handleNewNote () {
    storeNote({
      note: createEmptyNote()
    })
    updateNotes()
  }

  return (
    <nav className="px-10 py-5 border-b-2 border-b-text/20 flex justify-between items-center">
      <div className="flex items-center gap-1" href="#">
        <img className="size-12" src="/icon.svg" alt="Icono de la página Jotter" />
        <span className="text-3xl font-bold">JOTTER</span>
      </div>
      <button className="bg-primary/50 px-4 py-2 rounded-md border-2 border-primary hover:bg-transparent transition-colors" onClick={() => handleNewNote()}>
        Nueva nota
      </button>
    </nav>
  )
}
