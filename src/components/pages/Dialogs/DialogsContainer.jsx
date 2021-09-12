import Dialogs from "./Dialogs";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";

const mapStareToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const DialogsContainer = connect(mapStareToProps, {sendMessage, updateNewMessageBody})(Dialogs);

export default DialogsContainer;