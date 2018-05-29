import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'
import { bindActionCreators } from 'redux'

// const mapDispatchToProps = async dispatch => ({
//   dispatch: (message, author) => {
//     dispatch(addMessage(message, author))
//   }
// })

const mapDispatchToProps = dispatch => bindActionCreators({ addMessage }, dispatch)

export const AddMessage = connect(null, mapDispatchToProps)(AddMessageComponent)