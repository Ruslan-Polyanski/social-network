import AddText from "./AddText"
import {changeTextActionCreator, addPostActionCreator} from "./../../redux/reducerProfile.jsx";
import { connect } from "react-redux/es/exports";
// import StoreContext from "../../../StoreContext";

// const AddTextContiner = ({dispatch, dataTextArea}) => {

//         return (
//             <StoreContext.Consumer>
//                 {
//                     (store) => {

//                         const dispatch = store.dispatch;
//                         const dataTextArea = store.getState().profile.dataTextArea;


//                         const onShowText = (myText) => {
//                             const action = changeTextActionCreator(myText)
//                             dispatch(action)
//                         }
                    
//                         const onAddText = () => {
//                             const action = addPostActionCreator();
//                             dispatch(action)
//                         }

//                         return (
//                             <AddText onShowText={onShowText} onAddText={onAddText} dataTextArea={dataTextArea} />
//                         )
//                     }
//                 }
//             </StoreContext.Consumer>
//         )
//     }

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