import AddText from "./AddText"
import {changeTextActionCreator, addPostActionCreator} from "./../../redux/reducerProfile.jsx";
import { connect } from "react-redux/es/exports";

const mapStateToProps = (state) => {
    return {
        dataTextArea: state.profile.dataTextArea,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowText: (myText) => {
            const action = changeTextActionCreator(myText)
            dispatch(action)
        },
        onAddText: () => {
            const action = addPostActionCreator();
            dispatch(action)
        }
    }
}

const AddTextContiner = connect(mapStateToProps, mapDispatchToProps)(AddText);

export default AddTextContiner;