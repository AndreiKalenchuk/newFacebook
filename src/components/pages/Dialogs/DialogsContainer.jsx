import Dialogs from "./Dialogs";
import {sendMessage} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStareToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStareToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);