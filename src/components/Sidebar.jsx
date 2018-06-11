import React from "react"
import propTypes from "prop-types"

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

// Sidebar.propTypes = {
//   usersArray: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.number.isRequired,
//       name: propTypes.string.isRequired,
//     }).isRequired
//   ).isRequired
// }

export default Sidebar