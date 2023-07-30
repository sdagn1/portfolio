import './App.css';
import React, {useState} from 'react';

/*
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

const testTags = ["C#", "Java", "Python"];

const eduBlurb = "Achieved a First Class in all years of study at the university so far. "
const eduTags =["Java", "C", "Python", "SQL", "Spring"]

const loraxTags = ["C#", "SQL", "AWS", "S3", "CloudWatch", "Azure DevOps"]


const mentoTags = ["Spring Boot", "Vaadin"]

const timeTags = ["JavaScript", "Android Studio", "Apache Cordova"]

const tetrisTags = ["Python", "PyTorch", "PyQt5", "TensorBoard"]

class SectionTag extends React.Component{
  render(){
    return(
      <div class="text-white text-3xl my-3 hover:font-bold self-start">
        {this.props.tag}
      </div>
    )
  }

}
class SectionTitle extends React.Component{
  render(){
    return(
      <div class="font-bold text-4xl text-left m-5 w-3/5">
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
            <img src={require("./images/SamJak.png")} alt="SamJak" width="200"/>
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
      <div class="bg-green-200 w-1/5 h-screen flex flex-col items-center p-8 fixed">
        <div class="overflow-hidden rounded-full border-solid border-white border border-4 mb-5">
          <img src={require("./images/4115525.png")} alt="SamJak" width="200"/>
        </div>

        <div class="text-white font-bold text-4xl">
          Sam Dagnall
        </div>
        

        <div class="w-3/5">
          <SectionTag tag="About Me" />
          <SectionTag tag="Experience" />
          <SectionTag tag="Education" />
          <SectionTag tag="Projects" />
        </div>

      </div>
      <div class="w-1/5 h-screen"/>
      <div class="flex flex-col items-center flex-grow h-screen">
        <SectionTitle title="About Me"/>
        <div class="text-left w-3/5">
        I am a third year Computer Science student currently studying at the University of Warwick, with a love for problem solving and a desire to gain more experience as a software developer through both extra-curricular projects and professional industry experience. 
        <br/><br/>
Currently looking for internship/placement positions for Summer 2023.

        </div>
        <SectionTitle title="Experience" />
        <Topic title="Lorax EPI" job="Junior Software Engineer" tags={loraxTags}/>
        <SectionTitle title="Education" />
        <Topic title="University of Warwick" blurb={eduBlurb} tags={eduTags}/>
        <SectionTitle title="Projects"/>
        <Topic title="Mento" tags={mentoTags}/>
        <Topic title="Tetris Deep Learning" tags={tetrisTags}/>
        <Topic title="Smart Timeout" tags={timeTags}/>

      </div>
      
    </div>
  );
}

export default Portfolio;
