import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import blogs from '../blog_page/blogs/blogs'
import Aos from "aos"


export default class BlogsManual extends Component {


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
    }


    render() {

        console.log(this.state)

        return (
            <div className="mainBlogs">

          <div className="mainBlogs__2">
              <div className="mainBlogs__2_flex">
               { this.state.blogs.map((blog,i)=>



              {
                return( <div className="mainBlogs__2_flex-box">
             <Link className="link" to={{pathname:"/blog/"+blog.id, state:blog}} >go...</Link>
                    <img src={blog.titleImage} alt=""/>
                      <div className="mainBlogs__2_flex-box--title">{blog.shortTitle}</div>
                      <div className="mainBlogs__2_flex-box--content">
                      <td dangerouslySetInnerHTML={{__html:(blog.shortContent)}}  />...
                      </div>
                      <div className="mainBlogs__2_flex-box--date">{blog.date}</div>
                  </div>)

                }


                  )}


              </div>
          </div>


          </div>


        )
    }
}
