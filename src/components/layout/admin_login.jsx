import React, { Component } from 'react'
import firebase, {auth} from "./firebase_config"
import WebinarConfig from './webinar_config';

export default class AdminLogin extends Component {



    state={
        authenticated:false,
    }

    onChangeHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value});
        }

    componentDidMount=()=>{ 

        auth.onAuthStateChanged(async userAuth => {
            this.setState({ authenticated:userAuth?true:false });
          });

    }

    onSubmit=(e)=>{
        e.preventDefault();

    auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
      alert("Error signing in with password and email", error);
    });
}


    render() {
        return (
            <div>
           
         {this.state.authenticated?
         <div>
         <button className="landing__10_webinar-submit" style={{backgroundColor:"red"}} onClick={()=>auth.signOut()} >LOGOUT</button>
         <WebinarConfig/>
         </div>
         : 
         <form onSubmit={this.onSubmit}  className="landing__10_webinar">
         <p>Admin Login</p>
         <input type="email" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="email"  name="email" value={this.state.email}/>
         <input type="password" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="password"  name="password" value={this.state.password}/>
        <input  className="landing__10_webinar-submit" type="submit" value="Authenticate Me"/>
      </form>}
         </div>
        )
    }
}
