import './App.css';
import React, {useState} from 'react';
import {FaBriefcase, FaCogs, FaGraduationCap, FaUser} from 'react-icons/fa';

/*

  Sidebar:
    - A scrolling effect when going between them
    - Social Links (at bottom of sidebar)

  Main tabs:
    - Add UxV controller project
    - Look into slideshow functionality
    - Design expand/close assets


  Main things to include:
    - Header introducing me
    - Education
    - Work Experience



    Do I want to go for a sidebar design or a top-down


    - I feel sidebar can better show off certain things


    - LHS has my name, my profession and a photo with 3 parts of "About", "Experience" and "Projects" with contact information below

    - RHS has the information
      - A blurb containing my bio
      - My experience and Education

    - top-bar could be good

    - Design the CSS for the general topic element

    Also need to include the job title and date range

    About:

    Hi, I'm currently a student at the University of Warwick etc. etc. (Just basically stuff from CV)
*/


const eduBlurb = "Achieved a First Class in all years of study at the university so far. "
const eduTags =["Java", "C", "Python", "SQL", "Spring"]

const loraxBlurb = "Worked as a intern developer across two summers for a collective 6 months of industry experience. Was able to work on and make live changes to both the front-end and back-end of their proprietary software as well as assist with customer support tickets. Worked across multiple small teams during my time there."
const loraxTags = ["C#", "SQL", "AWS", "S3", "CloudWatch", "Azure DevOps"]

const mentoBlurb = "A web application designed to initiate and facilitate mentor/mentee pairings. Was entered into a competition judged by Deutsche Bank and was awarded second place for our efforts. Worked as a joint project manager for this project."
const mentoTags = ["Spring Boot", "Vaadin", "MySQL"]

const timeBlurb = "A mobile application aimed for parents with children that have learning disabilities, providing an assortment of tools to prepare the child for time-out whilst providing useful advice. For this project I worked directly with the University of Warwick Psychology department to convert a mobile application from a strictly iOS dependent framework to a cross-platform one for more accessibility during beta testing. Initially, this application had a rough framework written in Swift, which I was able to convert it into Javascript using the Apache Cordova framework."
const timeTags = ["JavaScript", "Android Studio", "Apache Cordova"]

const tetrisBlurb = "An independent research project in my third year of study aimed to apply deep reinforcement learning techniques in order to teach an agent how to play and subsequently master the puzzle game Tetris. For this study I was awarded a First with a mark of 87 overall."
const tetrisTags = ["Python", "PyTorch", "PyQt5", "TensorBoard"]

class SectionTag extends React.Component{
  render(){
    return(
      
      <a href={"#"+ this.props.link} class="text-white text-3xl my-3 hover:font-bold self-start">
        {this.props.tag}
      </a>
    )
  }

}
class SectionTitle extends React.Component{
  render(){
    return(
      <div id={this.props.id} class="font-bold text-4xl text-left m-5 w-3/5">
        {this.props.title}
      </div>

    )
  }
}
class Tag extends React.Component{
  render(){
    return(
      <div class="rounded-full bg-gray-300 hover:bg-gray-400 items-center p-3 ml-2">
        {this.props.tag}
      </div>
    );
  }
}
function SlideShow(props){
  return(
    <div></div>

  );
}

function Topic(props){


    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };


    return (

      <div class={"border border-solid flex-col border-5 border-black m-5 p-5 w-3/5 rounded-lg shadow-lg transition-all ease-in-out duration-100 " + (isReadMore ? "max-h-96" : "max-h-72" )}>
        
        <div class="flex-row flex pb-10">

          <div class="flex-col w-4/5">
            <div class="text-left underline text-3xl">
              {props.title}
            </div>
            <div class="text-left italic text-2xl my-2">
              {props.job}
            </div>
            <div className='text-1xl my-2'>
              {props.blurb}
            </div>
            <div class={"text-8xl transition-all ease-in-out duration-100 " + (isReadMore ? "animate-fadeIn" : "animate-fadeOut hidden")} >
              More more
            </div>


          </div>
          <div class="justify-self-end w-1/5">
            <img src={require("./images/" + props.imgName + ".png")} alt="SamJak" width="200"/>
          </div>
        </div>
        <div class="flex-row flex justify-between">
          <div class="flex-row flex">
            {props.tags.map(item => ( <Tag tag={item}/>))}

          </div>
          
          

          <div class="flex justify-end w-1/5">
            <img src={require("./images/SamJak.png")} alt="SamJak" width="50" onClick={toggleReadMore}/>
          </div>
        </div>

        


      </div>

  );
  }

function Portfolio() {
  return (
    <div class="flex flex-row">
      <div class="bg-emerald-400 w-1/5 h-full flex flex-col items-center p-8 fixed">
        <div class="overflow-hidden rounded-full border-solid border-white border border-4 mb-5">
          <img src={require("./images/IMG_20220111_152212_418.jpg")} alt="SamJak" width="200"/>
        </div>

        <div class="text-white font-bold text-4xl">
          Sam Dagnall
        </div>
        

        <div class="flex-col flex w-3/5">
          <div class="flex flex-row">
            <FaUser class="self-center text-white text-3xl mr-2"/>
            <SectionTag link="" tag="About Me" />
          </div>

          <div class="flex flex-row">
          <FaBriefcase class="self-center text-white text-3xl mr-2"/>
            <SectionTag link="exp" tag="Experience" />
          </div>
          <div class="flex flex-row">
            <FaGraduationCap class="self-center text-white text-3xl mr-2"/>
            <SectionTag link="edu" tag="Education" />
          </div>
          <div class="flex flex-row">
          <FaCogs class="self-center text-white text-3xl mr-2"/>
          <SectionTag link="pro" tag="Projects" />
          </div>
          
        </div>

      </div>
      <div class="w-1/5 h-screen"/>
      <div class="flex flex-col items-center flex-grow h-screen py-10">
        <SectionTitle title="About Me"/>
        <div class="text-left w-3/5">
        I am a third year Computer Science student currently studying at the University of Warwick, with a love for problem solving and a desire to gain more experience as a software developer through both extra-curricular projects and professional industry experience. 
        <br/><br/>
Currently looking for internship/placement positions for Summer 2023.

        </div>

        <SectionTitle id="exp" title="Experience" />
        <Topic title="Lorax EPI" job="Junior Software Engineer" blurb={loraxBlurb} tags={loraxTags} imgName="lorax"/>
        <SectionTitle id="edu" title="Education" />
        <Topic title="University of Warwick" blurb={eduBlurb} tags={eduTags} imgName="warwick"/>
        <SectionTitle id="pro" title="Projects"/>
        <Topic title="Mento" blurb={mentoBlurb} tags={mentoTags} imgName="mento31"/>
        <Topic title="Using Deep Reinforcement Learning to Solve Tetris" blurb={tetrisBlurb} tags={tetrisTags} imgName="SamJak"/>
        <Topic title="Smart Timeout" blurb={timeBlurb} tags={timeTags} imgName="circle-Logo"/>
        <div class="text-white">aaa</div>



      </div>
      
    </div>
  );
}

export default Portfolio;
