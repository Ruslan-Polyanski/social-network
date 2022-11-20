import { addContentCreatorThunk } from "./../../redux/reducerMessages.jsx";
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

export default compose(
    connect(mapStateToProps, {addContentCreatorThunk}),
    WithAuthRedirect
)(Dialogs)