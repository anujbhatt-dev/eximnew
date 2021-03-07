import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, withRouter } from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp'
import Aos from "aos"
import axios from 'axios'


 class BloggerBlog extends Component {
    GOOGLE_APP_KEY=`AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
    // UDATES_BLOG_ID=`753366898998375447`;
    

    state={
     
        blog:null,
    }

    componentDidMount=()=>{
       let blogId=this.props.match.params.blogId;
       let postId=this.props.match.params.postId;
       let BLOGGER_POST_API=`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${this.GOOGLE_APP_KEY}`;

       axios.get(BLOGGER_POST_API)
       .then(res=>this.setState({blog:res.data}))
       .catch(err=>alert("somethin went wrong -> Log.jsx"))


    }

render() {

    
        
    if(this.state.blog==null)
     return <div>Loading..</div>

     var m,
    urls = [], 
    str = '<img src="http://site.org/one.jpg  class="test"/>\n <img src="http://site.org/two.jpg />',
    rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

while ( m = rex.exec( str ) ) {
    urls.push( m[1] );
}

console.log(urls)

    return (
        <div className="blog">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.blog.title}</title>
                <link rel="canonical" href={this.props.url+"/"+this.state.blog.title} />
            </Helmet>
            {this.state.blog!==null?
              <div className="blog__box">
                  <div className="blog__box_flex">
                  <Link to={"/blogs"}>Exim Blogs</Link>
                  {this.state.blog.date}
                  </div>
                  <td dangerouslySetInnerHTML={{__html: this.state.blog.content}} />

                  <div className="blog__box_flex">
                     <Link to={"/blogs"}>Exim Blogs</Link>
                  </div>
                  <div  className="blog__box_social">
                     <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                     <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                     <a href=""><ReactWhatsapp element="a" number="+918517885555" message="message" >
                       <i class="fa fa-whatsapp" aria-hidden="true"></i>
                     </ReactWhatsapp></a>
                     <a href="tel://+918517885555"><i class="fa fa-phone" aria-hidden="true"></i></a>
                     <a href="https://www.linkedin.com/company/eduports"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                     <a href="https://instagram.com/eximeducation.com_"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  </div>

                 {/* {!this.state.blogs1?<Spinner/>:<div className="mainBlogs__2">
                          <div className="mainBlogs__2_flex blog__box_row">


                      {this.state.blogs1?this.state.blogs1.map(blog=> <div className="mainBlogs__2_flex-box">

                                <Link className="link" to={"/blogs/"+blog.id}>go...</Link>
                              {blog["jetpack_featured_media_url"]===""?<img id="blog__img" className="blog__box_row-img" src={m} alt=""/>:<img  id="blog__img" className="blog__box_row-img" src={blog["jetpack_featured_media_url"]} alt=""/>}
                              <div className="mainBlogs__2_flex-box--title">{blog.title.rendered.substring(0,60)}..</div>
                              <div className="mainBlogs__2_flex-box--content">
                              <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                              </div>
                              <div className="mainBlogs__2_flex-box--date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>
                          </div>):null}
                      </div>
                  </div>} */}
              </div>
                :null}
        </div>
    )
}
}

export default  withRouter(BloggerBlog);