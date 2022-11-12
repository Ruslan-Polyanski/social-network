import { addContentActionCreator, changeContentActionCreator } from "./../../redux/reducerMessages.jsx";
import Dialogs from "./Dialogs";
import { connect } from "react-redux/es/exports";
// import { Navigate } from "react-router-dom";
import {WithAuthRedirect} from "./../../HOC/WithAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dataContentTextArea: state.messages.dataContentTextArea,
        dataDialogs: state.messages.dataDialogs,
        dataText: state.messages.dataText,
        authorized: state.authoriz.authorized,
    }
}

const withRedirect = WithAuthRedirect(Dialogs);

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

const DialogsContiner = connect(mapStateToProps, mapDispatchToProps)(withRedirect);

export default DialogsContiner;