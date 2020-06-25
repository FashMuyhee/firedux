import {SIGN_IN_SUCCESS,SIGN_IN_ERROR,SIGN_OUT,SIGN_UP_SUCCESS,SIGN_UP_ERROR} from './type'

export const signIn = (credentials) => {
   return (dispact,getState,{getFirebase})=>{
      const firebase = getFirebase()
      const {email,password} = credentials
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
         dispact({
            type:SIGN_IN_SUCCESS,
            message: 'Successful'
         })
      }).catch((error)=>{
         dispact({
            type:SIGN_IN_ERROR,
            message:error
         })
      })
   }
}

export const signOut = () => {
   return (dispact,getState,{getFirebase})=>{
      const firebase = getFirebase()
    
      firebase.auth().signOut().then(()=>{
         dispact({
            type:SIGN_OUT,
         })
      }).catch((error)=>{
         dispact({
            type:SIGN_IN_ERROR,
            message:error
         })
      })
   }
}

export const signUp = (user) => {
   return (dispact,getState,{getFirebase,getFirestore})=>{
      const firebase = getFirebase()
      const firestore = getFirestore()

      const {email,password,lname,fname} = user
      const newUser = {
         email : email,
         lname : lname,
         fname : fname,
         initials : lname[0] + fname[0]
      }
      console.log(newUser)
      firebase.auth().createUserWithEmailAndPassword(email,password).then((resp)=>{
         return firestore.collection(`users`).doc(resp.user.uid).set(newUser).then(()=>{
            dispact({
               type:SIGN_UP_SUCCESS,
            })
         })
      }).catch((error)=>{
         dispact({
            type:SIGN_UP_ERROR,
            message:error
         })
      })
   }
}