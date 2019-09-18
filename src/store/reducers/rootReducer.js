import authReducer from './authReducer'
import petReducer from './petReducer'
import {combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer  = combineReducers({
    auth: authReducer,
    pet: petReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer 