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
        {id: 1, message: 'Yoou'},
        {id: 2, message: 'What is up?'},
        {id: 3, message: 'What ?'},
        {id: 4, message: 'Go'},
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
            let newState = {
                ...state,
                messages: [...state.messages]
            }
            const msg = {
                id: newState.messages.length,
                message: newState.newMessageBody
            }
            newState.messages.push(msg);
            newState.newMessageBody = '';
            return newState;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
