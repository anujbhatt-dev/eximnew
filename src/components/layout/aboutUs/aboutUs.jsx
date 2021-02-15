import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import greenCall from "../../../assets/images/greenCall.svg";
import vBar from "../../../assets/images/vBar.svg";
import aboutMain from "../../../assets/images/aboutMain.svg";
import logs from "../../../assets/images/logs.svg";
import emailjs from 'emailjs-com';
import {Helmet} from "react-helmet"

  class AboutUs extends Component{

    state={
      name:"",
      email:"",
      phone:"",
      preference:"select",
      submitted:1,
    }

    onChangeHandler=(e)=>{
      e.preventDefault();
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    onSubmitHandler=(e)=>{

      e.preventDefault();
       //console.log(this.state);
      this.setState({
        submitted:4,
      });


      let template="template_ep26v59";


      emailjs.sendForm('service_9wrddem', template, e.target, 'user_3C6n5XsLh20WgqpTa3412')
      .then((result) => {
         this.setState({
            name:"",
            email:"",
            phone:"",
            preference:"select",
            submitted:2,
          });
         setTimeout(()=>{this.setState({submitted:1})},5000);
      }, (error) => {
         this.setState({
             submitted:3,
          });
         setTimeout(()=>{this.setState({submitted:1})},2000);
      });


     }

     componentDidMount=()=>{

       window.scrollTo({top:0,behavior:"smooth"});
       Aos.init({
          duration: 1500,
          delay: 100,
        });
     }

    render(){

      return (
           <div data-aos="zoom-out" className="about">
               <Helmet>
                   <meta charSet="utf-8" />
                   <title>EXIM EDUCATION {this.props.page}</title>
                   <link rel="canonical" href={this.props.url+"/about"} />
               </Helmet>
              <h1 className="heading-primary landing__3_heading">Reach us</h1>

              <div className="about__1">
                  <form className="about__1_form" onSubmit={this.onSubmitHandler}>
                      <input required name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="name" type="text"/>
                      <input required name="phone" value={this.state.phone} onChange={this.onChangeHandler} placeholder="phone" type="text"/>
                      <input required name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="email" type="text"/>


                    <select required value={this.state.preference} onChange={(e)=>this.onChangeHandler(e)} name="preference" id="">
                       <option disabled value="select"  selected>select your plan</option>
                       <option value="Class Training">Class Training</option>
                       <option value="Online Training">Online Training</option>
                       <option value="Enterprises & School Training">Enterprises & School Training</option>

                    </select>


                      {this.state.submitted===1?
                      <input className="btn__buy" value="SUBMIT" type="submit"/>
                      :this.state.submitted===2?
                      <input className="btn__buy" style={{backgroundImage:"linear-gradient(90deg, rgba(75,204,51,1) 46%, rgba(22,217,54,1) 100%)"}} type="submit" disabled value="We'll connect with you soon.." />
                      :this.state.submitted===3?
                      <input className="btn__buy" style={{backgroundImage:"linear-gradient(90deg, rgba(204,51,51,1) 46%, rgba(168,13,13,1) 100%)"}} type="submit" disabled value="OOPS! Something went wrong.a1" />
                      :
                      <input className="btn__buy" type="submit" disabled value="..." />
                      }
                  </form>

                  <div className="about__1_text">
                      <div className="about__1_text-big"><span>Talk to our Experts</span></div>
                      <div className="about__1_text-small">We need a few details to reach you.<br/><span>or</span><br/>Simply call us</div>
                      <a href="tel://+918517885555" className="about__1_text-call"><img className="about__1_text-call--img1" src={greenCall} alt=""/><img src={vBar} alt=""/>+91  8517885555</a>
                  </div>
              </div>

              {
                // 2
              }

              <div className="about__2">
                  <div  className="about__2_text">
                      <div  className="about__2_text-big">
                          We  are  tech   LOGISTIC<br/>
                          start-up  powered  to<br/>
                          tranform  import<br/>
                          export
                      </div>
                      <div  className="about__2_text-small">POWERED WITH SPECIAL TEAM AND SUPPORT SYSTEM</div>
                  </div>
                  <img src={aboutMain} alt=""/>
              </div>

              {
                // 3
              }

              <h1 className="heading-primary landing__3_heading">services</h1>
              <div className="about__3">
                  <div className="about__3_row">
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Education </h2>
                        <ul>
                           <li>Mobile App training</li>
                           <li>School seminar</li>
                           <li>Online education </li>
                           <li>Classroom training </li>
                           <li>Enterprise training </li>


                        </ul>
                     </div>
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Services</h2>
                        <ul>
                           <li><a href="https://www.indiaport.in/">Indiaport.in</a></li>
                           <li>Insurance service</li>
                           <li>Freight forwarding</li>
                           <li>Custom House agents</li>
                           <li>Exim Consultency service</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Tools</h2>
                        <ul>
                           <li>Blogs</li>
                           <li>CBM Calculator</li>
                           <li>Duty Calculator</li>
                           <li>Custom Docs generate</li>
                        </ul>
                     </div>


                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Digital Support</h2>
                        <ul>
                           <li>SEO</li>
                           <li>Export data</li>
                           <li>Digital Marketing</li>
                           <li>Google Ads setup</li>
                           <li>Ecommerce Website setup</li>
                        </ul>
                     </div>


                  </div>
              </div>

              {
                // logs
              }

              <div className="about__4">
                 <img className="about__4_img" src={logs} alt=""/>
                 <div><strong>EXIM</strong> logistics</div>
              </div>

              {
                // our team
              }

              <h1 className="heading-primary landing__3_heading">our team</h1>
              <div className="about__3">


                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Vedant Kothari</h2>
                        <ul>
                           <li>Founder of EximEducation, a chef in leisure time </li>
                        </ul>
                     </div>
                     <div className="about__3_row">
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Sanesh Sagvekar</h2>
                        <ul>
                           <li>Front & back end developer and a great photographer </li>
                        </ul>
                     </div>


                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Sagar & Anuj</h2>
                        <ul>
                           <li>Web developers</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">Zeba Barudgar</h2>
                        <ul>
                           <li>Our Edu tech-head, content writer and a poet when in spirit</li>
                        </ul>
                     </div>
                  </div>
                  <div className="about__3_row">
                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">Ritika Tatiya</h2>
                       <ul>
                          <li>Digital marketer, content creator and a wanderlust lover</li>
                       </ul>
                    </div>

                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">Rushikesh Kamble</h2>
                       <ul>
                          <li>Graphics designer UI/UX and a sports enthusiast</li>
                       </ul>
                    </div>
                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">Pramod Kodag</h2>
                       <ul>
                          <li>Developer and an excellent singer</li>
                       </ul>
                    </div>

                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">CA Abhishek Shah</h2>
                       <ul>
                          <li>Provides financial service and an explorer</li>
                       </ul>
                    </div>
                  </div>
              </div>
           </div>
      )
    }
  }


 export default AboutUs;
