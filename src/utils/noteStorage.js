export function getNotes () {
  return JSON.parse(localStorage.getItem('notes')) || []
}

export function createEmptyNote () {
  return {
    id: Date.now(),
    title: '',
    content: ''
  }
}

export function storeNote ({ note }) {
  const notes = getNotes()
  notes.push(note)
  localStorage.setItem('notes', JSON.stringify(notes))
}

export function updateNote ({ note }) {
  const notes = getNotes()
  const index = notes.findIndex(n => n.id === note.id)
  notes[index] = note
  localStorage.setItem('notes', JSON.stringify(notes))
}

export function deleteNote ({ note }) {
  const notes = getNotes()

  if (notes.length === 1) {
    localStorage.removeItem('notes')
    return
  }

  const index = notes.findIndex(n => n.id === note.id)
  notes.splice(index, 1)
  localStorage.setItem('notes', JSON.stringify(notes))
}
