import { userConstants } from "./constants"
//import {firestore} from 'firebase'
import firebase from 'firebase' ;  
export const getRealTimeUsers=(uid)=>{
    return async  (dispatch)=>{
        dispatch({type:`${userConstants.GET_REALTIME_USERS}_REQUEST`})
        const db=firebase.firestore();
        const unsubscribe=db.collection('users')
        //.where("uid","!=",uid)
        .onSnapshot((querySnapshot)=>{
            
            var users=[];
            querySnapshot.forEach(function(doc){
                if(doc.data().uid != uid){
                users.push(doc.data());
                }
            });
           // console.log(users);
            dispatch({type:`${userConstants.GET_REALTIME_USERS}_SUCCESS`,
            payload:{users}
        })
        })
        return unsubscribe;
    }
}