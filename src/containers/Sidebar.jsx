import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'

const mapStateToProps = state => ({
    usersArray: state.users.usersArray
})


export const Sidebar = connect(mapStateToProps, null)(SidebarComponent)