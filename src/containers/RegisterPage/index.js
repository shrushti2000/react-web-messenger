import React ,{useState,useEffect}from 'react'
import { signup } from '../../actions';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Layout/UI/Card';
import {Redirect} from 'react-router-dom'
import './style.css'
const RegisterPage = (props) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch();
    const registerUser=(e)=>{
        e.preventDefault();
        const user={
            firstName,lastName,password,email
        }
        dispatch(signup(user))
    }
    if(auth.authenticated){
        return <Redirect to={`/`}/>
    }
    return (
        <Layout>
            <div className="registerContainer">
           <Card>
               <form onSubmit={registerUser}>
                   <h2>Signup</h2>
               <input
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  placeholder="firstName"

                  />
                   <input
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                  placeholder="lastName"

                  />
                   <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"

                  />
                  <input  
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Password"

                  />
                   <div>
                       <button>Register</button>
                   </div>
               </form>
           </Card>
        </div>
        </Layout>
    )
}
export default RegisterPage;