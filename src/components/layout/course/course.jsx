import React, {Component} from "react"
import lock from "../../../assets/images/lock.svg";
import full from "../../../assets/images/full.svg";
import half from "../../../assets/images/half.svg";
import file from "../../../assets/images/file.svg";
import Aos from "aos"
import {Helmet} from "react-helmet"
import "aos/dist/aos.css"

  class Course extends Component{

    state={
      courses:[
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson",
          locked:false
        },
        {
          title:"Types of Transportation, Container and packaging",
          lessons:"8 Lesson",
          locked:true
        },
        {
          title:"Basic Registration for Exim",
          lessons:"11 Lesson",
          locked:true
        },
        {
          title:"Basic Terms",
          lessons:"3 Lesson",
          locked:true
        },
        {
          title:"Incoterms",
          lessons:"1 Lesson",
          locked:true
        },
        {
          title:"Export Incentives",
          lessons:"6 Lesson",
          locked:true
        },
        {
          title:"Risk management and insurance",
          lessons:"4 Lesson",
          locked:true
        },
        {
          title:"Documents",
          lessons:"13 Lesson",
          locked:true
        },
        {
          title:"Export Procedure",
          lessons:"1 Lesson",
          locked:true
        },
        {
          title:"Modes of Payment",
          lessons:"4 Lesson",
          locked:true
        },
        {
          title:"Special shipments",
          lessons:"6 Lesson",
          locked:true
        },
        {
          title:"Exporting Terms",
          lessons:"12 Lesson",
          locked:true
        },
        {
          title:"Sterilization",
          lessons:"4 Lesson",
          locked:true
        },
        {
          title:"Other Documents",
          lessons:"4 Lesson",
          locked:true
        },
      ]
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
         <div data-aos="zoom-out" className="course">
                 <Helmet>
                     <meta charSet="utf-8" />
                     <title>EXIM EDUCATION {this.props.page}</title>
                     <link rel="canonical" href={this.props.url+"/courses"} />
                 </Helmet>
                 <h1 className="heading-primary landing__3_heading">import & export course details / exim course details</h1>
                 <div  className="course__btnWrap">
                     <a rel="noreferrer" href="http://eximeducation.com/course/pdf/Cousre_01.pdf" target="_blank" className="course__btnWrap_btn"><span>Detailed</span><img src={file} alt=""/></a>
                 </div>
                 <div className="course__wrapper">
                     {
                       this.state.courses.map((course,i)=>{
                         return <div  className="course__wrapper_box">
                                    <img className="course__wrapper_box-img" src={course.locked?full:half} alt=""/>
                                    <div  className="course__wrapper_box-count">{i+1}</div>
                                    <div style={!course.locked?{color:"#0062FF"}:null} className="course__wrapper_box-title">
                                        {course.title}
                                    </div>
                                    <div className="course__wrapper_box-lock">
                                         {course.locked?<img className="small-lock" src={lock} alt=""/>:null}
                                         <div style={course.locked?{color:"grey",display:"block"}:null}>{course.lessons}</div>
                                    </div>
                                 </div>
                       })
                     }

                 </div>
         </div>
      )
    }
  }


 export default Course;
