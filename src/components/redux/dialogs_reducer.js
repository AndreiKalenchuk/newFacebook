const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Nastiya'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasily'},
        {id: 4, name: 'Ana'},
        {id: 5, name: 'Bedlla'},
    ],
    messages: [
        {id: 0, message: 'Yoou'},
        {id: 1, message: 'What is up?'},
        {id: 2, message: 'What ?'},
        {id: 3, message: 'Go'},
        {id: 4, message: 'Go home'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let newState = {...state};
            if (state.messages.length === 0) {
                newState.messages = [...state.messages, {id: 0, message: state.newMessageBody}]
            } else {
                const msg = {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: newState.newMessageBody
                }
                newState.messages = [...state.messages, msg];
            }
            newState.newMessageBody = '';
            return newState;
        default:
            return state;
    }
}
export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
