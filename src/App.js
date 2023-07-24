import './App.css';
import React from 'react';

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


    About:

    Hi, I'm currently a student at the University of Warwick etc. etc. (Just basically stuff from CV)
*/
class SectionTitle extends React.Component{
  render(){
    return(
      <div>

      </div>

    )
  }
}
class Tag extends React.Component{
  render(){
    return(
      <div>

      </div>
    );
  }
}

class Topic extends React.Component{

  render(){ 
    return (

      <div class="border border-solid flex-col border-5 border-black m-5 p-5 w-3/5 rounded-lg shadow-lg">
        
        <div class="flex-row flex">

          <div class="flex-col w-4/5">
            <div class="text-left text-lg underline">
              {this.props.title}
            </div>
            <div>
              Blurb Blurb
            </div>


          </div>
          <div class="justify-self-end w-1/5">
            <img src={require("./images/SamJak.png")} alt="SamJak" width="200"/>
          </div>
        </div>

        


      </div>

  );
  }
}

function Portfolio() {
  return (
    <div class="flex flex-row">
      <div class="bg-green-200 w-1/5 h-screen flex flex-col items-center p-8">
        <div class="text-white font-bold text-4xl">
          Sam Dagnall
        </div>
        
        <div>
          <div>
            About Me
          </div>
          <div>
            Experience
          </div>
          <div>
            Education
          </div>
          <div>
            Projects
          </div>
        </div>

      </div>
      <div class="flex flex-col items-center flex-grow h-screen w-full p-2/5">
        <Topic title="University of Warwick"/>
        <Topic title="Lorax EPI"/>
      </div>
      
    </div>
  );
}

export default Portfolio;
