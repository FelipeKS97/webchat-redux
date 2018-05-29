import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'


const mapStateToProps = state => ({
    messages: state.messages.messagesArray
})

export const MessagesList = connect(mapStateToProps, null)(MessagesListComponent)