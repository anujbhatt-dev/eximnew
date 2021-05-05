import React, {Component} from "react"
import Navigation from "./nav/nav"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import AboutUs from "./aboutUs/aboutUs"
import Course from "./course/course"
import OtherCourse1 from "./course/othercourse1/othercourse1"
import Footer from "./footer/footer"
import GoToTop from "./goToTop/goToTop"
import { Switch, Route } from "react-router-dom";
import BlogsPage from "./blog_page/blog_page"
import BlogsManual from "./blogs_manual/blogs_manual"
import BlogMain from "./blog_page/blog_main/blog_main"
import BlogManual from "./blogs_manual/blog_manual/blog_manual"
import axios from "axios"
import BloggerBlogs from "./blogger/blogger-blogs"
import BloggerBlog from "./blogger/blogger-blog"
import WebinarConfig from "./webinar_config"
import AdminLogin from "./admin_login"

class Layout extends Component{


  GOOGLE_APP_KEY = `AIzaSyBfhPkgmqU6VTigT8WRzhaHbcjeKGD11HQ`;
  UDATES_BLOG_ID = `2936337281138035481`;
  UDATES_BLOGGER_POSTS_API = `https://www.googleapis.com/blogger/v3/blogs/${this.UDATES_BLOG_ID}/posts?key=${this.GOOGLE_APP_KEY}`



  state = {

    blogs: [],
    url:"https://vast-earth-12296.herokuapp.com/"


}

componentDidMount=()=>{
  axios.get(this.UDATES_BLOGGER_POSTS_API)
  .then(res =>
      this.setState({ blogs: [...res.data.items] })
  )
  .catch(err => alert("something went wrong"));
}


  getBlog=(id)=>{

    let index=this.state.blogs.findIndex(blog=>blog.id===+id);
    return index===-1?null:this.state.blogs[index];

  }

  render(){

    return (
          <div className="layout">
               <div className="layout__city">hydrabad</div>
               <Switch>

              <Route exact  path="/admin">
              <Navigation/>
                  <AdminLogin  url={this.state.url}/>
              </Route>


               <Route>
               <Navigation/>
               <GoToTop/>
               <Route exact  path="/">
                 <Landing page="HOME" url={this.state.url}/>
               </Route>
               <Route  exact path="/blogs" url={this.state.url} >
                 <BloggerBlogs page="BLOGS" blogs={this.state.blogs}  />
              </Route>
              <Route  exact path="/blog/:blogId/post/:postId" url={this.state.url}>
                 <BloggerBlog page="BLOGS" />
              </Route>

              <Route exact  path="/pricing">
                  <Pricing page="PRICING"  url={this.state.url}/>
              </Route>

              <Route exact  path="/about">
                  <AboutUs page="ABOUT"  url={this.state.url}/>
              </Route>

              <Route exact  path="/courses">
                  <Course page="COURSES"  url={this.state.url}/>
              </Route>
              <Route exact  path="/courses/otherCourse1">
                  <OtherCourse1 page="COURSES"  url={this.state.url}/>
              </Route>
              </Route>


               </Switch>
               <Footer/>

          </div>
    )
  }
}


 export default Layout;
