import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware,compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore,getFirestore } from 'redux-firestore'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'
import firebase from './config/firebaseConfig'

const store = createStore(
   rootReducer,
   compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(firebase,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true}),
      reduxFirestore(firebase)
   )
)

store.firebaseAuthIsReady.then(()=>{

   ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>
      , document.getElementById('app'));
	registerServiceWorker();
})
