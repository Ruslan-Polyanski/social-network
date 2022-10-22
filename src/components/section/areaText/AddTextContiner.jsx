import React from "react";
import AddText from "./AddText"
import {changeTextActionCreator, addPostActionCreator} from "./../../redux/reducerProfile.jsx";
import StoreContext from "../../../StoreContext";

const AddTextContiner = ({dispatch, dataTextArea}) => {

        return (
            <StoreContext.Consumer>
                {
                    (store) => {

                        const dispatch = store.dispatch.bind(store);
                        const dataTextArea = store.getState().profile.dataTextArea;


                        const onShowText = (myText) => {
                            const action = changeTextActionCreator(myText)
                            dispatch(action)
                        }
                    
                        const onAddText = () => {
                            const action = addPostActionCreator();
                            dispatch(action)
                        }

                        return (
                            <AddText onShowText={onShowText} onAddText={onAddText} dataTextArea={dataTextArea} />
                        )
                    }
                }
            </StoreContext.Consumer>
        )
    }

export default AddTextContiner;