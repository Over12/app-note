import { createContext, useState } from 'react'
import { getNotes } from '../utils/noteStorage';
import PropTypes from 'prop-types'
import { useNotification } from '../hooks/useNotification';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const notes = getNotes()
    return notes ? notes : []
  })

  const updateNotes = () => {
    setNotes(getNotes())
  }

  const { notification, showNotification } = useNotification()

  return (
    <AppContext.Provider value={{ notes, updateNotes, notification, showNotification }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}