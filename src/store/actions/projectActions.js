import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./type";

// creating project
export const createProject = (project) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      //   send data to firebase
      const firestore = getFirestore();
      const profile = getState().firebase.profile
      const authId = getState().firebase.auth.uid
      const data = {
         ...project,
         authLastName: profile.lname,
         authFirstName: profile.fname,
         authorId: authId,
         createdAt: new Date()
      }
      firestore.collection('projects').add(data).then(() => {
         dispatch({
            type: CREATE_PROJECT,
            payload: project
         })
      }).catch((error) => {
         dispatch({
            type: CREATE_PROJECT_ERROR,
            error: error
         })
      })

   }
}
