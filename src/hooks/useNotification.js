import { useRef, useState } from "react"

export function useNotification () {
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  })

  const notificationTimeoutRef = useRef(null)

  function showNotification ({ type, message }) {
    setNotification({
      type: type,
      message: message,
      show: true,
    })

    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current)
    }

    notificationTimeoutRef.current = setTimeout(() => {
      setNotification({
        type: '',
        message: '',
        show: false,
      })
    }, 2000)
  }

  return { notification, showNotification }
}