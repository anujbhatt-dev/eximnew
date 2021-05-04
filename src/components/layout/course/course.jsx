import React, {Component} from "react"
import {Link} from "react-router-dom"
import lock from "../../../assets/images/lock.svg";
import arrow from "../../../assets/images/arrow.svg";
import full from "../../../assets/images/full.svg";
import half from "../../../assets/images/half.svg";
import file from "../../../assets/images/file.svg";
import otherCourse1 from "../../../assets/images/otherCourse1.svg";
import pr from "../../../assets/images/planeRoute.svg";
import Aos from "aos"
import {Helmet} from "react-helmet"
import "aos/dist/aos.css"

  class Course extends Component{

    state={
      courses:[
        {
          title:"Parties and places involved in import/ export",
          lessons:"140 mins",
          locked:false
        },
        {
          title:"Types of Transportation, Container and packaging",
          lessons:"80 mins",
          locked:true
        },
        {
          title:"Basic Registration for Exim",
          lessons:"110 mins",
          locked:true
        },
        {
          title:"Export Incentives",
          lessons:"30 mins",
          locked:true
        },
        {
          title:"Incoterms",
          lessons:"10 mins",
          locked:true
        },
        {
          title:"Basic Terms",
          lessons:"60 mins",
          locked:true
        },
        // {
        //   title:"Risk management and insurance",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Documents",
        //   lessons:"13 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Export Procedure",
        //   lessons:"1 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Modes of Payment",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Special shipments",
        //   lessons:"6 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Exporting Terms",
        //   lessons:"12 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Sterilization",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
        // {
        //   title:"Other Documents",
        //   lessons:"4 Lesson",
        //   locked:true
        // },
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
         {/* <Helmet>
             <meta charSet="utf-8" />
             <title>Export and Import Course Details | Exim Course Details: EXIM EDUCATION</title>
             <link rel="canonical" href={this.props.url+"/courses"} />
             <meta name="description" content="Find the latest and revised Export and Import course details at EXIM EDUCATION. For detailed information, inquire today!"/>
         </Helmet> */}
                 <h1 className="heading-primary landing__3_heading">import & export course details / exim course details</h1>
                 <div  className="course__btnWrap">
                     <a rel="noreferrer" href="http://eximeducation.com/course/pdf/Course_01.pdf" target="_blank" className="course__btnWrap_btn"><span>Detailed</span><img src={file} alt=""/></a>
                 </div>
                 <div className="course__div">
                 <img className="course__div_route" src={pr} alt=""/>
                 <div className="course__wrapper">
                     {
                       this.state.courses.map((course,i)=>{
                         return <div  className={"course__wrapper_box "+"course__wrapper_box-"+(i+1)}>

                                    <div  className="course__wrapper_box-count">{i===5?"4":i===3?"6":i+1}</div>
                                    <div  className="course__wrapper_box-title">
                                        {course.title}
                                    </div>
                                    <div className="course__wrapper_box-lock">
                                         <div>{course.lessons}</div>
                                    </div>
                                 </div>
                       })
                     }

                     <div className="course__div_row">
                         <div  className="course__div_row-head">
                             Export IMport Course
                         </div>
                         <Link className="course__div_row-a" to="/courses/ExportImportCourse">Details <img src={arrow} alt=""/></Link>
                     </div>
                  </div>

                 </div>
                <h1 className="heading-primary landing__3_heading">other courses</h1>

                <div className="course__other">
                    <img src={otherCourse1} alt=""/>
                    <div className="course__other_text">
                        <div className="course__other_text-title">Regulation Courses
                        <br/>Export Import</div>
                        <div className="course__other_text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsum eum possimus eligendi similique voluptates veniam cumque cupiditate accusantium, reiciendis laboriosam molestiae, beatae voluptate blanditiis quo itaque esse doloremque ipsa explicabo quibusdam. Vero ducimus voluptatibus accusamus nam nemo quibusdam voluptates exercitationem necessitatibus ex at et repellat cumque, optio, eius culpa delectus, laborum.</div>
                        <Link  className="course__div_row-a" to="/courses/otherCourse1">Details <img src={arrow} alt=""/></Link>
                    </div>
                </div>

                <div className="course__other">
                    <img src={otherCourse1} alt=""/>
                    <div className="course__other_text">
                        <div className="course__other_text-title">Regulation Courses
                        <br/>Export Import</div>
                        <div className="course__other_text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsum eum possimus eligendi similique voluptates veniam cumque cupiditate accusantium, reiciendis laboriosam molestiae, beatae voluptate blanditiis quo itaque esse doloremque ipsa explicabo quibusdam. Vero ducimus voluptatibus accusamus nam nemo quibusdam voluptates exercitationem necessitatibus ex at et repellat cumque, optio, eius culpa delectus, laborum.</div>
                        <Link  className="course__div_row-a" to="/courses/otherCourse1">Details <img src={arrow} alt=""/></Link>
                    </div>
                </div>

                <div className="course__other">
                    <img src={otherCourse1} alt=""/>
                    <div className="course__other_text">
                        <div className="course__other_text-title">Regulation Courses
                        <br/>Export Import</div>
                        <div className="course__other_text-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ipsum eum possimus eligendi similique voluptates veniam cumque cupiditate accusantium, reiciendis laboriosam molestiae, beatae voluptate blanditiis quo itaque esse doloremque ipsa explicabo quibusdam. Vero ducimus voluptatibus accusamus nam nemo quibusdam voluptates exercitationem necessitatibus ex at et repellat cumque, optio, eius culpa delectus, laborum.</div>
                        <Link  className="course__div_row-a" to="/courses/otherCourse1">Details <img src={arrow} alt=""/></Link>
                    </div>
                </div>
         </div>
      )
    }
  }


 export default Course;
