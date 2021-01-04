import React, {Component} from "react"
import Navigation from "./nav/nav"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import AboutUs from "./aboutUs/aboutUs"
import Course from "./course/course"
import Footer from "./footer/footer"
import GoToTop from "./goToTop/goToTop"
import { Switch, Route } from "react-router-dom";
import BlogsPage from "./blog_page/blog_page"

class Layout extends Component{

  state={
    url:"https://vast-earth-12296.herokuapp.com/"
  }

  render(){

    return (
          <div className="layout">
               <Navigation/>
               <GoToTop/>
               <Switch>
               <Route exact  path="/">
                 <Landing page="HOME" url={this.state.url}/>
               </Route>
               <Route   path="/blogs">
                 <BlogsPage page="BLOGS"  url={this.state.url}/>
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
               </Switch>
               <Footer/>
          </div>
    )
  }
}


 export default Layout;
