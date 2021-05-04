import React, {Component} from "react"
import bgCC from "../../../../assets/images/bgCC.svg"
import apple1 from "../../../../assets/images/apple1.svg"
import play1 from "../../../../assets/images/play1.svg"
import whyJoin from "../../../../assets/images/whyJoin.svg"
import handPhone from "../../../../assets/images/handPhone.svg"
import pr from "../../../../assets/images/planeRoute.svg";
import Aos from "aos";
import "aos/dist/aos.css";

class OtherCourse1 extends Component{

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

  componentDidMount = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Aos.init({
      duration: 1500,
      delay: 100,
    });
  };

    render(){

      return (
           <div className="otherCourse1">
               <h1 className="heading-primary landing__3_heading">course details</h1>
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
                    </div>
                </div>
                <div className="otherCourse1__Wrapper">
                   <img src={bgCC} alt=""/>
                   <div className=""></div>
                </div>
                <h1 className="heading-primary landing__3_heading">why join exim education</h1>
                <img className="otherCourse1__whyJoin" src={whyJoin} alt=""/>
                <div className="otherCourse1__lastImg">
                    <img src={handPhone} alt=""/>
                    <a href="" className="otherCourse1__lastImg-apple otherCourse1__lastImg-btn"><img src={apple1} alt=""/></a>
                    <a href="" className="otherCourse1__lastImg-play otherCourse1__lastImg-btn"><img src={play1} alt=""/></a>
                    <div className="otherCourse1__lastImg-blur">0</div>
                </div>
           </div>
      )
    }
}

export default OtherCourse1;
