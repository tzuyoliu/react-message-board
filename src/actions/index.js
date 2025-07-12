import { getDatabase, ref, push, set, onValue } from 'firebase/database'
import { getAuth, signInWithRedirect, signOut, GithubAuthProvider } from 'firebase/auth'

export const ACTION_TYPES = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  INIT_FETCH_MESSAGES: 'INIT_FETCH_MESSAGES',
  END_FETCH_MESSAGES: 'END_FETCH_MESSAGES',
  SET_USER: 'SET_USER',
}

// 初始化 Firebase 元件
const db = getDatabase()
const messagesRef = ref(db, 'messages')
const auth = getAuth()
const provider = new GithubAuthProvider()

export const addMessage = message => () => {
  const newMessageRef = push(messagesRef)
  set(newMessageRef, message)
}

export const initFetchMessages = () => {
  return { type: ACTION_TYPES.INIT_FETCH_MESSAGES }
}

export const endFetchMessages = messages => {
  return { type: ACTION_TYPES.END_FETCH_MESSAGES, messages }
}

export const fetchMessages = () => async dispatch => {
  dispatch(initFetchMessages())

  onValue(messagesRef, snapshot => {
    dispatch(endFetchMessages(snapshot.val()))
  })
}

export const setUser = user => {
  return { type: ACTION_TYPES.SET_USER, user }
}

export const login = () => async () => {
  await signInWithRedirect(auth, provider)
}

export const logout = () => async () => {
  await signOut(auth)
}

export default {
  addMessage,
  initFetchMessages,
  endFetchMessages,
  fetchMessages,
  setUser,
  login,
  logout,
}
