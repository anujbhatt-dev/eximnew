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
import BlogsManual from "./blogs_manual/blogs_manual"
import BlogMain from "./blog_page/blog_main/blog_main"
import BlogManual from "./blogs_manual/blog_manual/blog_manual"
class Layout extends Component{
  state = {

    blogs: [

        //SKELETON

        // {
        //     id: 1,
        //     shortTitle: `shortTitle`,
        //     title: `title`,
        //     titleImage: `image url`,
        //     shortContent: `shortContent`,
        //     content: `content`,
        //     date: `2021-02-10`,

        // },

        {
            id: 1,
            shortTitle:`Small Business Export Ideas`,
            title: `Small Business Export Ideas`,
            titleImage: `https://i.ibb.co/FqYfq5R/small-Bussi-image.jpg`,
            shortContent: `Searching for Small Business Export thoughts to design your best course of action into the world of import and export?  Mentioned below are business export thoughts that you can start as early`,
            content:`<p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:7.5pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:21px;font-family:"Times New Roman",serif;color:black;'>Searching for Small Business Export thoughts to design your best course of action into the world of import and export?&nbsp;</span></p>
          <p style='margin-top:7.5pt;margin-right:0cm;margin-bottom:7.5pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;background:white;'><span style='font-size:21px;font-family:"Times New Roman",serif;color:black;'>Mentioned below are business export thoughts that you can start as early as possible to earn profits. Every other individual has a unique startup thought. But, when it comes to export business ideas, it requires more accurate and efficient Google research if you are searching for a private company to send out plans to design your best course of action into the world of import and export. How about we take a view of the best business export thoughts that you can select to begin ahead. India has countless business openings, be it import business thoughts or export business thoughts.</span></p>
          <ol style="list-style-type: decimal;margin-left:26px;">
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Vegetable Export&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- India is probably the biggest maker of vegetables, for example, potato, onion, cabbage, cauliflower, and these vegetables have an enormous necessity in neighbouring and far nations. Beginning a Small Business Export with vegetables is not a major assignment and a beneficial business. Along these lines, this is an impressive choice to begin an export business in India with low speculation.</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Clothing</span><span style="font-size:16.0pt;color:black;">- The clothing industry is an evergreen market, and when it comes to export, India tops the list as it has some of the world&rsquo;s finest fabric with low price. If you are looking for Business Export Ideas, then clothing is the best for Small Business Export, which means, less investment and high margin. If you are interested in this exciting business idea, then for more information, you may Google for clothing export ideas from India and know where and which region India exports clothing.</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Beauty Products&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- On the off chance that you are truly intrigued with this energizing business thought, at that point for more data, you may Google for dress export thoughts from India. You can exchange and export the number of magnificence items as your drive for Small Business Exports.&nbsp;</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Fish Export&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- Individuals around the globe love to fish, and there are numerous nations which import assortments of fish from nations like India, which have assortments of top-quality fishes, crabs, and so forth to oblige the expanding interest for these items around the world. Start your Small Business Export by selling fish.</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Meat Exports&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- Indian meat is viewed as the best in quality and is an exceptionally beneficial business for a private company send out also. So need to additional marvel about which send out business is acceptable from India? You found the solution as a business opportunity, right&nbsp;</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Apparatus Export Business</span><span style='font-family:"Times New Roman",serif;'>- Become an exporter of little hardware. This can be possible by finding a solid client and a producer for the equivalent to get your first arrangement.&nbsp;</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Synthetic Exports&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>-With an always expanding interest for synthetics, India&apos;s is a top exporter of natural and inorganic synthetic substances to numerous nations. Indeed, even as a little scope wholesaler, taking a stab at beginning compound export is a beneficial export business in India.&nbsp;</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Oil-based goods&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- India provides food with a huge scope of the oil-based commodity to different nations. In 2021, if you are hoping to begin some Small Business Export, chipping away at these Business Export Ideas is an extraordinary alternative to acquiring exceptional yields.</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Leather Products</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>&nbsp;- The requests for cowhide products are in every case high to begin a simple fare to neighbouring nations.&nbsp;</span></li>
              <li><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:red;'>Safety Shoes&nbsp;</span><span style='font-family:"Times New Roman",serif;font-size:16.0pt;color:black;'>- It likewise goes under cowhide articles. Huge, medium or little, every assembling unit have their natural and security standards to wear wellbeing shoes. Contact organizations abroad and begin selling security shoes as a feature of your fare business. It is one of the suitable fare business openings in India</span></li>
          </ol>`,
            date: `2021-02-10`,

        },
      
    ],
    url:"https://vast-earth-12296.herokuapp.com/"


}


  getBlog=(id)=>{
  
    let index=this.state.blogs.findIndex(blog=>blog.id===+id);
    return index===-1?null:this.state.blogs[index];

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
               <Route  exact path="/blogs" url={this.state.url} >
                 <BlogsManual page="BLOGS" blogs={this.state.blogs}  />
              </Route>
              <Route  exact path="/blog/:id" url={this.state.url}>
                 <BlogManual page="BLOGS" getBlog={this.getBlog}  />
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
