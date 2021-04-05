import React, { Component } from 'react'
import fire from "./firebase_config"



export default class WebinarConfig extends Component {



    state={
     
      
    }

    componentDidMount=()=>{

        const todoRef = fire.database().ref('webinar')
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const webinar = [];
            for (let id in todos) {
                webinar.push({ id, ...todos[id] });
            }
            this.setState( {...webinar[0]});
          });

    }

    onSubmit=(e)=>{

        e.preventDefault();


         fire.database().ref('webinar').remove();
        const todoRef = fire.database().ref('webinar')
        const todo = {
         ...this.state
        };
    
        console.log(todo)
        todoRef.push(todo)
        .then(()=>{
            alert("Updated")
        })
        .catch(()=>{
            alert("An error Occured")
        })
        .catch((err)=>{
            alert("An error Occured "+err)
        });


    }




    onChangeHandler=(e)=>{

        this.setState({[e.target.name] : e.target.value});
       }


    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}  className="landing__10_webinar">
            <p>Webinar Configuration</p>
            <input type="text" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="topic"  name="topic" value={this.state.topic}/>
            <input type="text" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="mentor"  name="mentor" value={this.state.mentor}/>
            <input type="text" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="date"  name="date" value={this.state.date}/>
            <input type="text" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="day"  name="day" value={this.state.day}/>
            <input type="text" required className="landing__10_webinar-name" onChange={(e)=>this.onChangeHandler(e)} placeholder="time"  name="time" value={this.state.time}/>           
            <input  className="landing__10_webinar-submit" type="submit" value="submit"/>
         </form>
         </div>
        )
    }
}
// style={this.state.detail?{display:"flex"}:{display:"none"}}