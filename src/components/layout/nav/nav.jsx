import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import exim from "../../../assets/images/exim.svg";
import cancel from "../../../assets/images/cancel.png";
import play from "../../../assets/images/blackPlay.svg";
import greenCall from "../../../assets/images/greenCall.svg";
import vBar from "../../../assets/images/vBar.svg";
import $ from "jquery"

  class Navigation extends Component{

    state={
      mob:false
    }


    componentDidMount=()=>{


      if($(window).width()<=800){
         this.setState({
           mob:true
         })

      }

      let path=window.location.pathname+"";
      if(path.indexOf("courses")!==-1)
      this.selectedNav(3);

     else if(path.indexOf("pricing")!==-1)
      this.selectedNav(2);

      else  if(path.indexOf("blog")!==-1)
      this.selectedNav(4);

      else if(path.indexOf("about")!==-1)
      this.selectedNav(5);

      else
      this.selectedNav(1);


      this.props.history.listen((location, action) => {
        // console.log("on route change");


      let path=window.location.pathname+"";
         if(path.indexOf("courses")!==-1)
         this.selectedNav(3);

        else if(path.indexOf("pricing")!==-1)
         this.selectedNav(2);

         else  if(path.indexOf("blog")!==-1)
         this.selectedNav(4);

         else if(path.indexOf("about")!==-1)
         this.selectedNav(5);

         else
         this.selectedNav(1);
        });

    }

    selectedNav=(nav)=>{
       switch (nav) {
         case 1:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-1").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-1").css("color","#0062FF")
           break;
         case 2:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-2").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-2").css("color","#0062FF")
             break;
         case 3:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-3").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-3").css("color","#0062FF")
             break;
         case 4:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-4").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-4").css("color","#0062FF")
             break;
         case 5:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-5").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-5").css("color","#0062FF")
             break;
         default:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-1").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-1").css("color","#0062FF")

       }
    }

    mobNavHndler=()=>{
      $(".nav__mob_wrapper").css({"opacity":"0","visibility":"hidden"});
      $(".nav__mob_wrapper2").css({"animation":"none","opacity":"0","visibility":"hidden"});
      $(".nav__mob_wrapper3").css({"animation":"none","opacity":"0","visibility":"hidden"})
    }

    // menuHandler=()=>{
    //
    //      $(".nav__mob_wrapper2").css({"animation":"wrapper2 1.5s linear","opacity":"1","visibility":"visible"});
    //      setTimeout(()=>{
    //        $(".nav__mob_wrapper").css({"opacity":"1","visibility":"visible"});
    //        $(".nav__mob_wrapper3").css({"animation":"wrapper3 10s linear infinite","opacity":"1","visibility":"visible"})
    //      },800)
    //      setTimeout(()=>{
    //        $(".nav__mob_wrapper2").css({"animation":"wrapper2 3s linear","opacity":"0","visibility":"hidden"});
    //      },1400)
    // }

    render(){

;

      return (
          <div className="nav">
              <NavLink to ="/"><img className="nav__compName" src={exim} alt="EXIM"/></NavLink>
              {this.state.mob?
                <div className="nav__mob">
                        <NavLink exact activeStyle={{color:"#0062FF",fontWeight:"bold"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.174" height="45.383" viewBox="0 0 43.174 45.383">
                            <path id="Path_5162" data-name="Path 5162" d="M36.316,45.59V23.985a2.909,2.909,0,0,0-2.906-2.9H22.28a2.909,2.909,0,0,0-2.906,2.9V45.59H9.3a2.548,2.548,0,0,1-2.545-2.545V17.579a2.567,2.567,0,0,1,1.023-2.042L26.324,1.712a2.544,2.544,0,0,1,3.043,0L47.909,15.538a2.565,2.565,0,0,1,1.023,2.041V43.045a2.548,2.548,0,0,1-2.545,2.545Z" transform="translate(-6.258 -0.707)" fill="#fff" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            </svg>
                            <div className="nav__mob_a-name">Home</div>
                        </NavLink>
                        <NavLink exact activeStyle={{color:"#0062FF",fontWeight:"bold"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/pricing">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.945" height="42.362" viewBox="0 0 28.945 42.362">
                            <path id="Path_5171" data-name="Path 5171" d="M126.306,6.608v5.778h-8.55a8.45,8.45,0,0,1,1.227,1.623,9.561,9.561,0,0,1,.99,2.573h6.333v5.067h-5.858a8.2,8.2,0,0,1-.871,3.721,10.413,10.413,0,0,1-2.3,3.048,11.038,11.038,0,0,1-3.4,2.1,12.373,12.373,0,0,1-4.2.87l10.767,11.875-5.938,4.512-9.183-11.8q-1.109-1.345-2.019-2.415t-1.7-1.939l-1.663-1.742,1.979-4.354a11.293,11.293,0,0,0,1.662.475,9.739,9.739,0,0,0,1.9.159,8.689,8.689,0,0,0,5.186-1.307,4.92,4.92,0,0,0,2.1-3.206H98.361V16.582h14.17a6.918,6.918,0,0,0-1.028-2.375,13.326,13.326,0,0,0-1.5-1.82H98.361V6.608Z" transform="translate(-97.861 -6.108)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            </svg>
                            <div className="nav__mob_a-name">Pricing</div>
                        </NavLink>
                        <NavLink exact activeStyle={{color:"#0062FF",fontWeight:"bold"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/courses">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62.576" height="34.962" viewBox="0 0 62.576 34.962">
                            <g id="Group_1451" data-name="Group 1451" transform="translate(0.5 0.501)">
                            <path id="Path_5166" data-name="Path 5166" d="M198.67,20.014l27.169,1.28v8.632" transform="translate(-168.838 -10.05)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5167" data-name="Path 5167" d="M223.966,17.585a.277.277,0,0,1-.007.531l-5.227,1.5-9.91,2.836L193.755,26.76a1.7,1.7,0,0,1-.927,0l-14.221-4.071-.651-.186-15.125-4.329a.341.341,0,0,1-.009-.654l30.263-9.528a.691.691,0,0,1,.413,0Z" transform="translate(-162.583 -7.961)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5168" data-name="Path 5168" d="M233.614,33.962a2.147,2.147,0,0,1-1.982,1.857,3.455,3.455,0,0,1-.648.06,3.332,3.332,0,0,1-.637-.06,2.145,2.145,0,0,1-1.991-1.857c0-1.06,1.176-1.92,2.627-1.92S233.614,32.9,233.614,33.962Z" transform="translate(-173.983 -12.134)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5169" data-name="Path 5169" d="M214.3,38.039l-18.238,6.878a1.056,1.056,0,0,1-.75,0L177.106,38.05a1.07,1.07,0,0,1-.687-1.033c.167-5.919,2.236-9.364,3.469-10.9a1.058,1.058,0,0,1,1.118-.357L195.4,29.875a1.072,1.072,0,0,0,.584,0L210.568,25.7a1.069,1.069,0,0,1,1.122.354c3.022,3.719,3.3,9.059,3.3,10.995A1.058,1.058,0,0,1,214.3,38.039Z" transform="translate(-164.981 -11.028)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5170" data-name="Path 5170" d="M232.6,45.186l-3.068.108a.871.871,0,0,1-.88-1.065l1.739-7.62a3.332,3.332,0,0,0,.637.06,3.446,3.446,0,0,0,.647-.06l1.743,7.509A.87.87,0,0,1,232.6,45.186Z" transform="translate(-174.031 -12.926)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                            </svg>
                            <div className="nav__mob_a-name">Courses</div>
                        </NavLink>
                        <NavLink activeStyle={{color:"#0062FF",fontWeight:"bold"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/blogs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51.582" height="45.698" viewBox="0 0 51.582 45.698">
                            <g id="Group_1452" data-name="Group 1452" transform="translate(0.543 0.5)">
                            <path id="Path_5163" data-name="Path 5163" d="M287.316,24.976a3.605,3.605,0,0,1,0,3.6,3.606,3.606,0,1,1,0-3.6Z" transform="translate(-258.947 -4.43)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5164" data-name="Path 5164" d="M304.42,21.047,293.6,2.3A3.609,3.609,0,0,0,290.481.5H268.832a3.611,3.611,0,0,0-3.122,1.8L254.893,21.047a3.6,3.6,0,0,0,0,3.6l4.038,7L265.71,43.4a3.61,3.61,0,0,0,3.122,1.8h21.649a3.608,3.608,0,0,0,3.122-1.8l7.862-13.621,2.955-5.123A3.6,3.6,0,0,0,304.42,21.047Zm-8.009,3.785L289.75,36.366a3.978,3.978,0,0,1-3.432,1.983H273a3.977,3.977,0,0,1-3.432-1.983L262.9,24.832a3.973,3.973,0,0,1,0-3.966l6.661-11.535A3.977,3.977,0,0,1,273,7.35h13.323a3.978,3.978,0,0,1,3.432,1.982l6.661,11.535A3.977,3.977,0,0,1,296.411,24.832Z" transform="translate(-254.409 -0.5)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5165" data-name="Path 5165" d="M287.8,26.778a3.6,3.6,0,0,1-3.6,3.6,3.606,3.606,0,0,1-3.122-1.8,3.6,3.6,0,0,1,3.122-5.407,3.6,3.6,0,0,1,3.122,1.8A3.57,3.57,0,0,1,287.8,26.778Z" transform="translate(-258.947 -4.43)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                            </svg>
                            <div className="nav__mob_a-name">Blogs</div>
                        </NavLink>
                        <NavLink exact activeStyle={{color:"#0062FF",fontWeight:"bold"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/about">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33.859" height="45.986" viewBox="0 0 33.859 45.986">
                            <g id="Group_1453" data-name="Group 1453" transform="translate(0.5 0.5)">
                            <path id="Path_5172" data-name="Path 5172" d="M346.666,20.092a9.279,9.279,0,1,1,9.28-9.28A9.291,9.291,0,0,1,346.666,20.092Z" transform="translate(-330.237 -1.533)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="Path_5173" data-name="Path 5173" d="M328.738,51.643V36.126a7.933,7.933,0,0,1,7.91-7.91h17.04a7.933,7.933,0,0,1,7.91,7.91V51.643" transform="translate(-328.738 -6.158)" fill="none" stroke="#8b8b8b" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                            </svg>
                            <div className="nav__mob_a-name">About Us</div>
                        </NavLink>
                </div>
                :
                <ul className="nav__list">
                <NavLink onClick={()=>this.selectedNav(1)} className="nav__link" to="/"><li className="nav__list_item nav__list_item-1">Home</li><hr className="nav__list_Hr nav__list_Hr-1"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(3)} className="nav__link" to="/courses"><li className="nav__list_item nav__list_item-3">Courses</li><hr className="nav__list_Hr nav__list_Hr-3"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(2)} className="nav__link" to="/pricing"><li className="nav__list_item nav__list_item-2">Pricing</li><hr className="nav__list_Hr nav__list_Hr-2"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(4)} className="nav__link" to="/blogs"><li className="nav__list_item nav__list_item-4">Blogs</li><hr className="nav__list_Hr nav__list_Hr-4"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(5)} className="nav__link" to="/about"><li className="nav__list_item nav__list_item-5">About Us</li><hr className="nav__list_Hr nav__list_Hr-5"/></NavLink>
                <a style={{opacity:"0"}} href="tel://+918517885555" className="about__1_text-call nav__list_a" id="nav__list_a"><img className="about__1_text-call--img1" src={greenCall} alt=""/> +91  8517885555</a>
              </ul>}
          </div>
      )
    }
  }


 export default withRouter(Navigation);
