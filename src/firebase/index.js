import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import {
  getAuth,
  GithubAuthProvider,
  browserLocalPersistence
} from 'firebase/auth';

import { firebaseCredentials } from '~/credentials';

const app = initializeApp(firebaseCredentials);

// database
export const database = getDatabase(app);
export const messagesDB = ref(database, 'messages');

// auth
export const auth = getAuth(app);
export const providers = {
  github: new GithubAuthProvider(),
};
export const persistances = browserLocalPersistence;
