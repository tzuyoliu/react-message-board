import { ACTION_TYPES } from '../actions'

export const INITIAL_STATE = {
    messages: [],
    loading: true,
    user: null,
}

export default function reducer(state = INITIAL_STATE, action) {
    const { messages } = action
    let messagesArray = []

    switch (action.type) {
        case ACTION_TYPES.SET_USER:
            return { ...state, user: action.user }
        case ACTION_TYPES.ADD_MESSAGE:
            return { ...state, loading: true }
        case ACTION_TYPES.INIT_FETCH_MESSAGES:
            return { ...state, loading: true }
        case ACTION_TYPES.END_FETCH_MESSAGES:
            messagesArray = Object.keys(messages || {}).map(key => ({ ...messages[key] }))

            return { ...state, loading: false, messages: messagesArray.reverse().slice(0, 6) }
        default:
            return state
    }
}
