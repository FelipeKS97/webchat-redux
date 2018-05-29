import React from "react"
import PropTypes from "prop-types"

const Sidebar = ({ usersArray }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {
        usersArray.map(user => (
            <li key={user.id}>{user.name}</li>
            )
        )
      }
    </ul>
  </aside>
)

Sidebar.propTypes = {
  usersArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default Sidebar