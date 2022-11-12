import { addContentActionCreator, changeContentActionCreator } from "./../../redux/reducerMessages.jsx";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";
import {WithAuthRedirect} from "./../../HOC/WithAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state) => {
    return {
        dataContentTextArea: state.messages.dataContentTextArea,
        dataDialogs: state.messages.dataDialogs,
        dataText: state.messages.dataText,
        authorized: state.authoriz.authorized,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeContent: (text) => {
            const action = changeContentActionCreator(text);
            dispatch(action)
        },
        onAddContent: () => {
            const action = addContentActionCreator()
            dispatch(action)
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)