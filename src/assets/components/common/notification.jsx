import PropTypes from "prop-types"

export default function Notification ({ type, message }) {

  return (
    <div className={`absolute px-3 py-2 rounded-md bottom-5 right-5 ${type === 'Save' ? 'bg-green-500/50 border-2 border-green-500' : 'bg-red-500/50 border-2 border-red-500'}`}>
      <p className="text-text">{message}</p>
    </div>
  )
}

Notification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
}
