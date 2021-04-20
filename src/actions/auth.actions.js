import {auth,firestore} from 'firebase';
import firebase from 'firebase' ;  
 
 //import ;
export const signup=(user)=>{
    return async (dispatch)=>{
        const db=firebase.firestore();
        firebase.auth()
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(user=>{
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
}