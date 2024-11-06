import { useContext } from "react";
import Note from "../ui/note";
import { AppContext } from "../../../context/AppContext";
import Notification from "./notification";

export default function ContainerNote () {
  const { notes, updateNotes, notification } = useContext(AppContext)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-10 m-10">
        {notes.length === 0 ? (
          <p className="text-center text-2xl col-span-4">No hay notas...</p>
        ) : notes.map((note) => (
          <Note key={note.id} note={note} updateNotes={updateNotes}/>
        ))
        }
      </div>
      {notification.show && <Notification type={notification.type} message={notification.message} />}
    </>
  )
}