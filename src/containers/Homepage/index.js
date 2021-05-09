import React ,{useEffect,useState}from 'react';
import './style.css';

import Layout from '../../components/Layout'
import { getRealTimeConversations, getRealTimeUsers, updateMessage } from '../../actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { userConstants } from '../../actions/constants';

const User=(props)=>{
    const {user,onClick} =props;
    return (
        <div onClick={()=>onClick(user)} className="displayName">
        <div className="displayPic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1H81w4SmKH5DZmIbxU7EB0aMSkNQDoPQA1mRQxf2Y0wMF1NSa7vghbwwKASi1q4NPmNw&usqp=CAU" alt="" />
        </div>
        <div style={{display:'flex',flex:1, justifyContent:'space-between', margin: '0 10px'}}>
            <span className="username" style={{fontWeight: 500}}>{user.firstName}{user.lastName}</span>
            <span className={user.isOnline ? `onlineStatus` : `onlineStatus off` }></span>
        </div>
    </div>)
}

const HomePage = (props) => {
    const dispatch=useDispatch();
    const auth=useSelector(state=>state.auth)
    const user=useSelector(state=>state.user)
    const [chatStarted,setChatStarted]=useState(false) 
    const [chatUser,setChatUser]=useState('')
    const [message,setMessage]=useState('')
    const [userUid,setUserUid]=useState('')
    let unsubscribe;
    useEffect(()=>{
        unsubscribe= dispatch(getRealTimeUsers(auth.uid))
        .then(unsubscribe=>{
            return unsubscribe;
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
  //  dispatch(getRealTimeConversation({uid_1:auth.uid,}))
    //console.log(user)
    //component will unmount
    useEffect(()=>{
        return ()=>{
            //cleanup
            unsubscribe.then(f=>f()).catch(error=>console.log(error))
        }
    },[]);

    const initChat=(user)=>{
        setChatStarted(true)
        setChatUser(`${user.firstName} ${user.lastName}`)
       setUserUid(user.uid);
        console.log(user)
        dispatch(getRealTimeConversations ({uid_1:auth.uid,uid_2:user.uid}))
    }

    const submitMessage=(e)=>{
        const msgObj={
            user_uid_1:auth.uid,
            user_uid_2:userUid,
            message
        }
        if(message !== ""){
            dispatch(updateMessage(msgObj))
            .then(()=>{
                setMessage('')
            })
        }

    }

  return (
      <Layout>
    <section className="container">
    <div className="listOfUsers">
        {
            user.users.length >0 ? user.users.map(user=>{
                  return (
                      <User
                      onClick={initChat}
                      key={user.uid} user={user} 
                        />
                    )
            }):null
        }

       
                
    </div>
    <div className="chatArea">
        <div className="chatHeader">
        {
            chatStarted ?   chatUser : ''
        }
      </div>
        <div className="messageSections">
            {
                chatStarted ? 
                user.conversations.map(con=>
                <div style={{ textAlign:con.user_uid_1 ==auth.uid ? 'right' :'left' }}>
                <p className="messageStyle" >{con.message}</p>
            </div>) :null
            }
        {
            chatStarted ?
           
            <div className="chatControls">
            <textarea  
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Write mesaage"/>
            <button onClick={submitMessage}>Send</button>
        </div>:null
        }
           

        </div>
      
    </div>
</section>
</Layout>
  );
}

export default HomePage;