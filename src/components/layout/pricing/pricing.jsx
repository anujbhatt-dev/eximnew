import React, { Component } from "react";
import tick from "../../../assets/images/tick.svg";
import ac1 from "../../../assets/images/ac1.svg";
import ac2 from "../../../assets/images/ac2.svg";
import ac3 from "../../../assets/images/ac3.svg";
import send from "../../../assets/images/send2.svg";
import circleTimes from "../../../assets/images/circle-times.svg";
import circleDownArrow from "../../../assets/images/circle-downArrow.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import pr from "../../../assets/images/planeRoute.svg";
import filledArrow from "../../../assets/images/filledArrow.svg";
import arrow1 from "../../../assets/images/arrow.svg";

class Pricing extends Component {
  state = {
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
      }
    ],
    faq: [
      {
        ques: "What are the advantages of taking export import classes online?",
        answer:
          "Convenience and flexibility are the most common advantages of online classes. Taking classes online is ideal for someone who wants to continue working and keen to learn new skills",
        toggle: true,
      },
      {
        ques: "How much time should I spend on one class every week?",
        answer:
          " The time you spend on a class can vary. No two instructors will format their classes exactly the same. Plan to spend 1 hours daily and 3 hours on Sunday.",
        toggle: false,
      },
      {
        ques: "How do I interact with the professor?",
        answer:
          "Students and instructors communicate primarily through course sites and emails in online courses.",
        toggle: false,
      },
      {
        ques: "Is there interaction with other online students?",
        answer:
          "Yes, students will be grouped with different different batches where they will be able to interact with there classmates.",
        toggle: false,
      },
      {
        ques: "Do Students need to attend classes at specific time?",
        answer:
          "Students complete coursework on their own time but still need to attend weekend classes on time.",
        toggle: false,
      },
    ],
  };

  faqToggleHandler = (i) => {
    let newState = this.state;
    newState.faq[i].toggle = !newState.faq[i].toggle;
    this.setState({
      faq: newState.faq,
    });
  };

  componentDidMount = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Aos.init({
      duration: 1500,
      delay: 100,
    });
  };

  render() {
    return (
      <div data-aos="zoom-out" className="pricing">
        {/* <Helmet>
                   <meta charSet="utf-8" />
                   <title>Import Export Course Fees in Mumbai | Exim Course Fees in India: EXIM EDUCATION</title>
                   <link rel="canonical" href={this.props.url+"/pricing"} />
                   <meta name="description" content="Know the latest and revised Import Export Course Fees in Mumbai, India. For more details, inquire today at EXIM EDUCATION."/>
               </Helmet> */}
        {
          // head
        }
        <h1 className="heading-primary landing__3_heading">
            Investment
        </h1>
        <h4>
          Choose a plan that works best for you
          <br />
          or your team
        </h4>
        {
          // cards
        }
        <div className="pricing__cards">
          <div className="card">
            <div className="card__name">Standard training</div>
            <div className="card__price">₹ 13999</div>
            <hr />
            <ul>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Live online training</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />6 weeks, 18 modules{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                i-Support{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Recorded videos</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Doubt solving lectures</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Interactive sessions{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Discuss new targeted and marketing opportunity{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Certificate</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Mobile App- on the go!{" "}
              </li>
            </ul>
            <a
              href="https://rzp.io/l/zmgRkFiRcE"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <button className="btn__buy">
                Buy Now <img src={send} alt="" />
              </button>
            </a>
          </div>

          <div className="card black">
            <div className="card__name">Advance Training </div>
            <h3>Most Popular</h3>
            <div className="card__price">₹ 15999</div>
            <hr />
            <ul>
              <li>
                {" "}
                <img src={tick} alt="" /> <strong>Standard training +</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Company logo</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" /> Company introduction
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Digital marketing setup
              </li>
              <li>
                {" "}
                <img src={tick} alt="" /> Physical certificate
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Premium</strong> support
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Weekly blogs
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Linkedin profile set up/ professional resume
              </li>
            </ul>
            <a
              rel="noreferrer"
              href="https://rzp.io/l/Fz1MNUwAFc"
              target="_blank"
            >
              {" "}
              <button className="btn__buy">
                Buy Now <img src={send} alt="" />
              </button>
            </a>
          </div>

          <div className="card">
            <div className="card__name">
              Premium Training <br /> & Service
            </div>
            <div className="card__price">₹ 27,999</div>
            <hr />
            <ul>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Advance Training +</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                get GST{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong> MSME</strong>
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Free registration- IEC{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Company registration(OPC, Pvt Lt, LLP){" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                100% dynamic website + SEO{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                <strong>Google business setup</strong>{" "}
              </li>
              <li>
                {" "}
                <img src={tick} alt="" />
                Email templates{" "}
              </li>
            </ul>

            <a
              href="https://rzp.io/l/0CL6lTmO"
              rel="noreferrer"
              target="_blank"
            >
              <button className="btn__buy">
                Buy Now <img src={send} alt="" />
              </button>
            </a>
          </div>
        </div>
        <div className="customHr">...</div>

        {
          //course
        }

        <div className="pricing__course">
            <h1 className="heading-primary landing__3_heading">course details</h1>
            <div className="course__div">
                <img className="course__div_route" src={pr} alt=""/>
                <div id="pricing__course" className="course__wrapper">
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
        </div>
        <div className="pricing__back">
          <Link className="pricing__course_btn" to="/courses"><span>View Details</span><img src={filledArrow} alt=""/></Link>
        </div>

        {
          // advance courses
        }

        <div className="pricing__adv">
           <h1 className="heading-primary landing__3_heading">Advance course</h1>
           <p className="pricing__adv_subH">Choose a plan that works best for you
           <br/>or your team</p>
           <div className="pricing__adv_flex">
               <div className="pricing__adv_flex-item">
                  <img src={ac1} alt=""/>
                  <div className="pricing__adv_flex-item-title">
                      <div>
                          Regulation On
                          <br/>Transport Of
                          <br/>Dangerous Goods
                          <br/>By Sea IMDG Code
                      </div>
                      <Link className="pricing__adv_flex-item-btn" to="/courses"><span>Details</span> <img src={arrow1} alt=""/></Link>
                  </div>
               </div>
               <div className="pricing__adv_flex-item">
                  <img src={ac2} alt=""/>
                  <div className="pricing__adv_flex-item-title">
                      <div>
                          Regulation On
                          <br/>Transport Of
                          <br/>Dangerous Goods
                          <br/>By Sea IMDG Code.
                      </div>
                      <Link className="pricing__adv_flex-item-btn" to="/courses"><span>Details</span> <img src={arrow1} alt=""/></Link>
                  </div>
               </div>
               <div className="pricing__adv_flex-item">
                  <img src={ac3} alt=""/>
                  <div className="pricing__adv_flex-item-title">
                      <div>
                          Regulation On
                          <br/>Transport Of
                          <br/>Dangerous Goods
                          <br/>By Sea IMDG Code
                      </div>
                      <Link className="pricing__adv_flex-item-btn" to="/courses"><span>Details</span> <img src={arrow1} alt=""/></Link>
                  </div>
               </div>
           </div>
        </div>

        {
          // faq
        }
        <h1 className="heading-primary landing__3_heading">FAQ</h1>
        <div className="faq">
          {this.state.faq.map((faq, i) => {
            return (
              <div className="faq__box">
                <div className="faq__box_ques">
                  <div>{faq.ques}</div>
                  {faq.toggle ? (
                    <img
                      className="faq__box_ques-times"
                      onClick={() => this.faqToggleHandler(i)}
                      src={circleTimes}
                      alt=""
                    />
                  ) : (
                    <img
                      onClick={() => this.faqToggleHandler(i)}
                      src={circleDownArrow}
                      className="faq__box_ques-downArrow"
                      alt=""
                    />
                  )}
                </div>
                <div
                  style={{ display: faq.toggle ? "block" : "none" }}
                  className="faq__box_answer"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pricing;
