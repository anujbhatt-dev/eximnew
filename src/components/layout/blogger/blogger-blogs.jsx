import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp'
import Aos from "aos"
import axios from 'axios'
import m from "../../../assets/images/blog-m.svg";//"../../../assets/images/blog-m.svg";

export default class BloggerBlogs extends Component {


    GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
  UDATES_BLOG_ID = `2936337281138035481`;
  UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`



    state={
        blogs:[]
    }
  
  
      componentDidMount=()=>{
  
          this.setState({blogs:this.props.blogs});
          window.scrollTo({top:0,behavior:"smooth"});
        Aos.init({
           duration: 1500,
           delay: 100,
         });


         if(this.props.blogs.length===0)
              axios.get(this.UDATES_BLOGGER_POSTS_API)
            .then(res =>
                this.setState({ blogs: [...res.data.items] })
            )
            .catch(err => alert("something went wrong"));
       else 
         this.setState({blogs:this.props.blogs})
      }
  
  
      render() {
    
        return (
              <div className="mainBlogs">
  
            <div className="mainBlogs__2">
                <div className="mainBlogs__2_flex">
                 { this.state.blogs.map((blog,i)=>
  
  
  
                {
                  return( <div className="mainBlogs__2_flex-box">
               <Link className="link" to={{pathname:"/blog/"+blog.blog.id+"/post/"+blog.id, state:blog}} >go...</Link>
                   <img src={blog.labels[0]} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">{blog.title}</div>
                        <div className="mainBlogs__2_flex-box--content">
                        </div>
                        <div className="mainBlogs__2_flex-box--date">{blog.date}</div>
                        <div className="mainBlogs__3_slide-box--date">{blog.published.substring(0,blog.published.indexOf("T"))}</div>

                    </div>)
  
                  }
  
  
                    )}
  
  
                </div>
            </div>
  
  
            </div>
  
  
          )
      }
  }
  