import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
// data syncer
import {firestoreReducer} from 'redux-firestore'
// firebase auth
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
   auth: authReducer,
   project: projectReducer,
   firestore: firestoreReducer,
   firebase:firebaseReducer
})

export default rootReducer